<?php

namespace App\Exceptions;

use Throwable;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }
    public function render($request, Throwable $exception)
    {
        if ($exception instanceof ThrottleRequestsException) {
            $retryAfter = $exception->getHeaders()['Retry-After'] ?? 180;

            return response()->json([
                'message' => 'شما بیش از حد تلاش کرده‌اید. لطفاً کمی بعد مجدداً تلاش کنید.',
                'success' => false,
                'retry_after' => $retryAfter
            ], 429, [
                'Retry-After' => $retryAfter
            ]);
        }

        return parent::render($request, $exception);
    }
}
