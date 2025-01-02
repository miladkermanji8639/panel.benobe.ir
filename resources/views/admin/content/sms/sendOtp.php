<?php
function SendWebServiceSmsRequest($otpId, $parameters, $senderNumber, $recipientNumbers) {
    $url = "https://smsapi.pishgamrayan.com/Messages/SendOtp";
    $data = array(
        'otpId' => $otpId,
        'parameters' => $parameters,
        'senderNumber' => $senderNumber,
        'recipientNumbers' => $recipientNumbers,
    );

    $headers = array(
        'Authorization: 3kI/11v5LW508Yrn6O1eilkulgU3LccaysKHAXlWoaI=',
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

// Usage example:
$otpId = 96; // Replace with your actual OTP ID
$randomeCode = rand(100000,1000000);
$parameters= [$randomeCode];
$senderNumber = "5000309180607211"; // Replace with your sender number
$recipientNumbers = ["09182718639"]; // Replace with recipient numbers

$response = SendWebServiceSmsRequest($otpId, $parameters, $senderNumber, $recipientNumbers);
echo "Response from API: " . $response;
?>
