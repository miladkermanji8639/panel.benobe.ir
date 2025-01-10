<?php

namespace Modules\SendOtp\App\Http\Services\SMS;

use Modules\SendOtp\App\Http\Interfaces\MessageInterface;

class SmsService implements MessageInterface
{
 public $otpId;
 public $parameters;
 public $senderNumber;
 public $recipientNumbers;

 public function fire()
 {
  $pishgamRayanSms = new PishgamRayanSmsService();
  return $pishgamRayanSms->SendWebServiceSmsRequest($this->otpId, $this->parameters, $this->senderNumber, $this->recipientNumbers);
 }
 public static function create($otpCode, $newMobile)
 {
  $smsService = new self();
  $smsService->setSenderNumber(env('SMS_SENDER_NUMBER'));
  $smsService->setOtpId(env('SMS_OTP_ID'));
  $smsService->setParameters([$otpCode]);
  $smsService->setRecipientNumbers([$newMobile]);
  return $smsService;
 }
 public function getOtpId()
 {
  return $this->otpId;
 }

 public function setOtpId($otpId)
 {
  $this->otpId = $otpId;
 }

 public function getParameters()
 {
  return $this->parameters;
 }

 public function setParameters($parameters)
 {
  $this->parameters = $parameters;
 }

 public function getSenderNumber()
 {
  return $this->senderNumber;
 }

 public function setSenderNumber($senderNumber)
 {
  $this->senderNumber = $senderNumber;
 }

 public function getRecipientNumbers()
 {
  return $this->recipientNumbers;
 }

 public function setRecipientNumbers($recipientNumbers)
 {
  $this->recipientNumbers = $recipientNumbers;
 }
}
