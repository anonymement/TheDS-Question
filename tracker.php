<?php
$to = "jatochh12@gmail.com";
$subject = "Nieuwe bezoeker op je website";
$message = "Er is zojuist iemand op je website geweest.";
$headers = "From: notificatie@jouwsite.nl";

mail($to, $subject, $message, $headers);
?>
