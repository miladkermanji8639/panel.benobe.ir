<?php

namespace App\Models\Dr;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class AppointmentSlot extends Model
{

    protected $fillable = [
        'work_schedule_id',
        'time_slots',
        'max_appointments',
        'current_appointments',
        'is_active',
        'is_booked',
        'slot_date'
    ];

    protected $casts = [
        'time_slots' => 'array',
        'is_active' => 'boolean',
        'is_booked' => 'boolean'
    ];
    public function getTimeSlotAttribute($value)
    {
        // اگر مقدار JSON بود، دیکد کن
        if (is_string($value)) {
            return json_decode($value, true) ?? $value;
        }
        return $value;
    }

    public function setTimeSlotAttribute($value)
    {
        // اگر آرایه بود، انکد کن
        if (is_array($value)) {
            $this->attributes['time_slots'] = json_encode($value);
        } else {
            $this->attributes['time_slots'] = $value;
        }
    }
    // متد برای تنظیم اسلات‌های زمانی
    public function setTimeSlots(array $slots)
    {
        $formattedSlots = collect($slots)->map(function ($slot) {
            return [
                'start' => Carbon::createFromFormat('H:i', $slot['start'])->format('H:i'),
                'end' => Carbon::createFromFormat('H:i', $slot['end'])->format('H:i'),
                'max_per_slot' => $slot['max_per_slot'] ?? 1
            ];
        })->toArray();

        $this->attributes['time_slots'] = json_encode($formattedSlots);
    }

    // متد برای بررسی تداخل زمانی
    public function hasTimeConflict(string $startTime, string $endTime)
    {
        $slots = json_decode($this->time_slots, true);

        return collect($slots)->contains(function ($slot) use ($startTime, $endTime) {
            $slotStart = Carbon::createFromFormat('H:i', $slot['start']);
            $slotEnd = Carbon::createFromFormat('H:i', $slot['end']);
            $newStart = Carbon::createFromFormat('H:i', $startTime);
            $newEnd = Carbon::createFromFormat('H:i', $endTime);

            return (
                ($newStart >= $slotStart && $newStart < $slotEnd) ||
                ($newEnd > $slotStart && $newEnd <= $slotEnd) ||
                ($newStart <= $slotStart && $newEnd >= $slotEnd)
            );
        });
    }

    // متد برای بررسی ظرفیت اسلات
    public function checkSlotCapacity(string $startTime, string $endTime)
    {
        $slots = json_decode($this->time_slots, true);

        $matchingSlot = collect($slots)->first(function ($slot) use ($startTime, $endTime) {
            return $slot['start'] === $startTime && $slot['end'] === $endTime;
        });

        return $matchingSlot ? $matchingSlot['max_per_slot'] : 0;
    }

    // اسکوپ برای جستجوی اسلات‌های در دسترس
    public function scopeAvailableSlots($query, $date, $startTime = null, $endTime = null)
    {
        return $query->where('slot_date', $date)
            ->where('is_active', true)
            ->where('is_booked', false)
            ->when($startTime && $endTime, function ($q) use ($startTime, $endTime) {
                return $q->whereJsonContains('time_slots', [
                    'start' => $startTime,
                    'end' => $endTime
                ]);
            });
    }

    // متد برای اضافه کردن اسلات جدید
    public function addTimeSlot(string $start, string $end, int $maxPerSlot = 1)
    {
        $slots = json_decode($this->time_slots, true) ?? [];

        // بررسی تداخل زمانی
        if ($this->hasTimeConflict($start, $end)) {
            throw new \Exception('اسلات زمانی تداخل دارد');
        }

        $slots[] = [
            'start_time' => $start,
            'end_time' => $end,
            'max_per_slot' => $maxPerSlot
        ];

        $this->time_slots = $slots;
        $this->save();

        return $this;
    }

    // متد برای حذف اسلات
    public function removeTimeSlot(string $start, string $end)
    {
        $slots = collect(json_decode($this->time_slots, true));

        $filteredSlots = $slots->reject(function ($slot) use ($start, $end) {
            return $slot['start'] === $start && $slot['end'] === $end;
        });

        $this->time_slots = $filteredSlots->values()->toArray();
        $this->save();

        return $this;
    }
    public function workSchedule()
    {
        return $this->belongsTo(DoctorWorkSchedule::class, 'work_schedule_id');
    }
}
