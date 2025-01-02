<?php
function SendWebServiceSmsRequest($senderNumber, $messageBodies, $recipientNumbers) {
    $url = "https://smsapi.pishgamrayan.com/Messages/Send";
    $data = array(
        'messageBodies' => $messageBodies,
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
$senderNumber = "5000309180607211"; // Replace with your sender number
$messageBodies=[" سلام به پیشگام خوش آمدید "];
$recipientNumbers = ["09181738255"]; // Replace with recipient numbers

$response = SendWebServiceSmsRequest($senderNumber, $messageBodies, $recipientNumbers);
echo "Response from API: " . $response;
?>
