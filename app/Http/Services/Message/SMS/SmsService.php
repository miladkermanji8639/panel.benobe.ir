<?php

namespace App\Http\Services\Message\SMS;

use App\Http\Interfaces\MessageInterface;
use App\Http\Services\Message\SMS\PishgamRayanSmsService;


class SmsService implements MessageInterface
{

  public $otpId; // Replace with your actual OTP ID

  public $parameters;

  public $senderNumber; // Replace with your sender number
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

  /**
   * @param mixed $recipientNumbers
   */
  public function setRecipientNumbers($recipientNumbers): void
  {
    $this->recipientNumbers = $recipientNumbers;
  }
}
