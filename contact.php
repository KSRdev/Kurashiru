<?php $email = $_POST['email'];
$subject = $_POST['subject'];
$text = $_POST['text'];
$formcontent="From: $name \n Message: $message";
$recipient = "simoneradaelli@yahoo.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>