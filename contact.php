<?php $email = $_POST['email'];
$subjects = $_POST['subject'];
$text = $_POST['text'];
$formcontent="From: $subject \n Message: $text";
$recipient = "simoneradaelli@yahoo.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>