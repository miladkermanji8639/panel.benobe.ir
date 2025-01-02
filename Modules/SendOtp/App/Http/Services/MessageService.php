<?php

namespace Modules\SendOtp\App\Http\Services;

use Modules\SendOtp\App\Http\Interfaces\MessageInterface;

class MessageService
{
 public $message;

 public function __construct(MessageInterface $message)
 {
  $this->message = $message;
 }

 public function send()
 {
  return $this->message->fire();
 }
}
