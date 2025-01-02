<?php

namespace App\Http\Controllers\Admin\Dashboard\Specialty;

use App\Http\Controllers\Admin\Controller;
use App\Http\Requests\Admin\Dashboard\Specialty\SpecialtyRequest;
use App\Models\Admin\Dashboard\Specialty\Specialty;
use Illuminate\Http\Request;

class SpecialtyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $specialties = Specialty::where('level', '1')->paginate(10);

        return view("admin.content.dashboard.specialty.index", compact('specialties'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $specialties = Specialty::where('level', '1')->get();

        return view("admin.content.dashboard.specialty.create");

    }
    public function createSpecialty()
    {
        $specialties = Specialty::where('level', '1')->get();

        return view("admin.content.dashboard.specialty.create-specialty", compact('specialties'));

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SpecialtyRequest $request)
    {
        // dd("hi");
        $specialty = new Specialty;
        $specialty->name = $request->input('name');
        $specialty->parent_id = $request->input('level');
        $specialty->level = "1";
        $specialty->save();
        if ($specialty) {
            return redirect()->route('admin.Dashboard.specialty.index')->with('swal-success', ' تخصص  جدید شما با موفقیت اضافه شد');

        } else {
            return redirect()->back();
        }

    }
    public function storeSpecialty(SpecialtyRequest $request)
    {
        // dd("hi");
        $specialty = new Specialty;
        $specialty->name = $request->input('name');
        $specialty->parent_id = $request->input('level');
        $specialty->level = "2";
        $specialty->save();
        if ($specialty) {
            return redirect()->route('admin.Dashboard.specialty.index')->with('swal-success', ' زیر دسته  جدید شما با موفقیت اضافه شد');

        } else {
            return redirect()->back();
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $specialties = Specialty::where('parent_id', $id)->paginate(10);
        $specialtyName = Specialty::where('id', $id)->get();

        return view('admin.content.dashboard.specialty.show', compact(['specialties', 'specialtyName']));

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $specialty = Specialty::where('id', $id)->first();

        return view("admin.content.dashboard.specialty.edit",compact('specialty'));

    }
    public function editSpecialty(string $id)
    {
        $specialtyy = Specialty::where('id', $id)->first();
        $specialties = Specialty::where('level', '1')->get();


        return view("admin.content.dashboard.specialty.edit-specialty",compact(['specialtyy','specialties']));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SpecialtyRequest $request, string $id)
    {

        $item = Specialty::find($id);
        $item->name = $request->input('name');
        $item->parent_id = $request->input('parent_id');
        $item->save();
        return redirect()->route('admin.Dashboard.specialty.index')->with('swal-success', 'ویرایش تخصص با موفقیت انجام شد');

    }
    public function updateSpecialty(SpecialtyRequest $request, string $id)
    {

        $item = Specialty::find($id);
        $item->name = $request->input('name');
        $item->parent_id = $request->input('parent_id');
        $item->save();
        return redirect()->route('admin.Dashboard.specialty.show', $item->parent_id)->with('swal-success', 'ویرایش زیر دسته با موفقیت انجام شد');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Specialty::find($id);
        $item->delete();
        return redirect()->route('admin.Dashboard.specialty.index')->with('swal-success', 'حذف تخصص با موفقیت انجام شد');

    }
    public function destroySpecialty(string $id)
    {
        $item = Specialty::find($id);
        $item->delete();
        return redirect()->route('admin.Dashboard.specialty.index')->with('swal-success', 'حذف تخصص با موفقیت انجام شد');

    }
    public function status(Specialty $specialty)
    {

        $specialty->status = $specialty->status == 0 ? 1 : 0;
        $result = $specialty->save();
        if ($result) {
            if ($specialty->status == 0) {
                return response()->json(['status' => true, 'active' => false]);
            } else {
                return response()->json(['status' => true, 'active' => true]);
            }
        } else {
            return response()->json(['status' => false]);
        }

    }
    public function statusSpecialty(Specialty $specialty)
    {

        $specialty->status = $specialty->status == 0 ? 1 : 0;
        $result = $specialty->save();
        if ($result) {
            if ($specialty->status == 0) {
                return response()->json(['status' => true, 'active' => false]);
            } else {
                return response()->json(['status' => true, 'active' => true]);
            }
        } else {
            return response()->json(['status' => false]);
        }

    }
    public function searchSpecialty(Request $request)
    {
        if ($request->ajax()) {

            $output = "";
            $specialtys = Specialty::where('name', 'LIKE', '%' . $request->search . "%")->get();

            if ($specialtys) {

                foreach ($specialtys as $specialty) {

                    $output .= '<tr>' .
                    '<td class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowspan="1" colspan="1" style="width: 18px;" data-col="1" aria-label=""><input type="checkbox" class="form-check-input"></td>' .
                    '<td>' . $specialty->id . '</td>' .
                    '<td>' . $specialty->name . '</td>' .
                    '<td>' .
                    '<span id="' . $specialty->id . '" title="برای فعال یا غیر فعالسازی وضعیت کلیک کنید" onclick="changeStatus(' . $specialty->id . ')" data-url="' . route('admin.Dashboard.specialty.status', $specialty->id) . '" class="cursor-pointer badge bg-label-' . ($specialty->status == 1 ? 'success' : 'danger') . ' me-1" ' . ($specialty->status === 1 ? 'active' : 'deactive') . '>' .
                    ($specialty->status === 0 ? 'غیر فعال' : 'فعال') .
                    '</span>' .
                    '</td>' .
                    '<td>' .
                    '<div class="dropdown">' .
                    '<button class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown" type="button">' .
                    '<i class="ti ti-dots-vertical"></i>' .
                    '</button>' .
                    '<div class="dropdown-menu">' .
                    '<a class="dropdown-item ' . ($specialty->level == 2 ? "d-none" : "") . '"  onclick="location.href=\'' . url('admin/dashboard/specialty/show/' . $specialty->id) . '\'" href="javascript:void(0);">' .
                    '<i class="ti ti-eye me-1"></i> مشاهده زیر دسته' .
                    '</a>' .
                    '<a class="dropdown-item" onclick="location.href=\'' . url('admin/dashboard/specialty/edit/' . $specialty->id) . '\'" href="javascript:void(0);">' .
                    '<i class="ti ti-pencil me-1"></i> ویرایش' .
                    '</a>' .
                    '<form method="POST" class="" action="' . url('admin/dashboard/specialty/delete/' . $specialty->id) . '">' .
                    csrf_field() .
                    method_field('DELETE') .
                        '<button type="submit" class="dropdown-item delete" id="delete">' .
                        '<i class="ti ti-trash me-1"></i> حذف' .
                        '</button>' .
                        '</form>' .
                        '</div>' .
                        '</div>' .
                        '</td>' .
                        '</tr>';

                }
                return $output;

            }
        }
    }
}
