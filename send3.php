<?php
 /* Здесь проверяется существование переменных */
if (isset($_POST['name3'])) {$name3 = $_POST['name3'];}
if (isset($_POST['tel3'])) {$tel3 = $_POST['tel3'];}

/* Сюда впишите свою эл. почту */
 $address3 = "info@scrk.ru"; 

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes3 = "Имя: $name3 \nТелефон: $tel3";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub3='Schrack. Заявка на бесплатную консультацию'; //сабж
$send = mail ($address3,$sub3,$mes3,"Content-type:text/plain; charset = utf-8\r\nFrom:$email"); 

 ?>
