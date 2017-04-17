<?php
 /* Здесь проверяется существование переменных */
if (isset($_POST['name2'])) {$name2 = $_POST['name2'];}
if (isset($_POST['tel2'])) {$tel2 = $_POST['tel2'];}

/* Сюда впишите свою эл. почту */
 $address2 = "info@scrk.ru"; 

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes2 = "Имя: $name2 \nТелефон: $tel2";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub2='Schrack. Заявка на обратный звонок'; //сабж
$send = mail ($address2,$sub2,$mes2,"Content-type:text/plain; charset = utf-8\r\nFrom:$email"); 

 ?>
