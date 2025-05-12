<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // adjust path as needed

// Your Google Apps Script Web App URL
$googleScriptURL = "https://script.google.com/macros/s/AKfycbzurQFXjfEUUWCHjYLiSbwARhs2ZAAubU4a1UPEhbP125mEYHNYjz1UH3pRkorx9U4Zog/exec";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = $_POST['name'] ?? '';
    $email   = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? 'New Contact Form Submission';
    $message = $_POST['message'] ?? '';

    // Send email
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // use your SMTP
        $mail->SMTPAuth   = true;
        $mail->Username   = 'sathishyadav.g@revolynk.com'; // replace
        $mail->Password   = 'gddo rbzo pzhy reyf'; // replace
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('sathishyadav.g@revolynk.com', 'Contact Form');
        $mail->addAddress('releases@revolynk.com'); // receiving email

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = "
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Subject:</strong> {$subject}</p>
            <p><strong>Message:</strong><br />{$message}</p>
        ";

        $mail->send();

        // Send to Google Sheets
        $postData = json_encode([
            'name' => $name,
            'email' => $email,
            'subject' => $subject,
            'message' => $message
        ]);

        $ch = curl_init($googleScriptURL);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        $result = curl_exec($ch);
        curl_close($ch);

        echo "Success";
    } catch (Exception $e) {
        echo "Error: " . $mail->ErrorInfo;
    }
}
?>
