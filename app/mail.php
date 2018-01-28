<?php

$recepient = "info@b2b-sales.biz";
$sitename = "http://b2b-sales.biz";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$text = trim($_POST["comment"]);
$message = "Имя: $name \nТелефон: $phone \nE-mail: $email \nТекст: $comment";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");