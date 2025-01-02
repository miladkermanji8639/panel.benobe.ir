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
