<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Добавить свободного игрока в базу</title>
</head>

<body>


<form method="post" action="add.php">

ФИО <br />
<input type="text" name="ФИО" /><br />

Дата рождения <br />
<input type="text" name="Дата_рождения" /><br />

Город <br />
<input type="text" name="Город" /><br />

Страна <br />
<input type="text" name="Страна" /><br />

Позиция на поле <br />
<input type="text" name="Позиция_на_поле" /><br />

Позиция в зале <br />
<input type="text" name="Позиция_в_зале" /><br />

Бывшая команда <br />
<input type="text" name="Бывшая_команда" /><br />

Контакты <br />
<textarea cols="20" rows="3" name="Контакты"></textarea><br />



<input type="submit" name="add" value="Добавить" />

</form>

<?php

$connection = mysql_connect("109.161.62.251", "kosfootb_user", "legacy95");
$db = mysql_select_db("kosfootb_users");
mysql_query(" SET NAMES 'utf8' "); // mysql_set_charset("utf8");

if(!$connection || !$db)
{
    exit(mysql_error());
}


if(isset($_POST['add']))
{
    $ФИО = strip_tags(trim($_POST['ФИО']));
    $Дата_рождения = strip_tags(trim($_POST['Дата_рождения']));
	$Город = strip_tags(trim($_POST['Город']));
	$Страна = strip_tags(trim($_POST['Страна']));
	$Позиция_на_поле = strip_tags(trim($_POST['Позиция_на_поле']));
	$Позиция_в_зале = strip_tags(trim($_POST['Позиция_в_зале']));
    $Бывшая_команда = strip_tags(trim($_POST['Бывшая_команда']));
	$Контакты = strip_tags(trim($_POST['Контакты']));
    
    mysql_query(" 
                    INSERT INTO Игрок(ФИО, Дата_рождения, Город, Страна,Позиция_на_поле, Позиция_в_зале, Бывшая_команда,Контакты)
                    VALUES ('$ФИО', '$Дата_рождения', '$Город', '$Страна', '$Позиция_на_поле', '$Позиция_в_зале', '$Бывшая_команда', '$Контакты') 
    ");
    
    mysql_close();
    
    echo "Ваша заявка оформлена!";
}



?>


</body>
</html>