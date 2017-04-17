<?php
 /* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['tel'])) {$tel = $_POST['tel'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['mess'])) {$mess = $_POST['mess'];}
if (isset($_POST['url'])) {$url = $_POST['url'];}


/* Сюда впишите свою эл. почту */
 $address = "info@scrk.ru"; 

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "Имя: $name \nТелефон: $tel \nE-mail: $email \nСообщение: $mess \nUTM: h$url";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Schrack. Заявка с сайта на реле'; //сабж
$send = mail ($address,$sub,$mes, "Content-type:text/plain; charset = utf-8\r\nFrom:$email"); 

 ?>
