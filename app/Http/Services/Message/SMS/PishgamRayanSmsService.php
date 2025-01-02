<?php

namespace App\Http\Services\Message\SMS;

use Illuminate\Support\Facades\Config;

class PishgamRayanSmsService
{
  private $headers = [];
  private $otpId;
  private $senderNumber;

  public function SendWebServiceSmsRequest($otpId, $parameters, $senderNumber, $recipientNumbers)
  {
    $url = "https://smsapi.pishgamrayan.com/Messages/SendOtp";
    $data = array(
      'otpId' => $otpId,
      'parameters' => $parameters,
      'senderNumber' => $senderNumber,
      'recipientNumbers' => $recipientNumbers,
    );

    $headers = array(
      'Authorization: ' . env("SMS_AUTH_KEY"),

      'Content-Type: application/json',
    );

    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => $url,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_POST => true,
      CURLOPT_POSTFIELDS => json_encode($data),
      CURLOPT_HTTPHEADER => $headers,
    ));

    $response = curl_exec($curl);
    curl_close($curl);

    return $response;
  }
}

