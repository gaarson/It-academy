//Работа с функциями
var x = 14;
var y = 15;

var name1 = "Vasya";
var name2 = "Vitya";

function Funk(x, y) {
	if(y == undefined && x == undefined) {
		document.write("Вы не указали один из аргументов");
	} else {
		document.write(x + y);
	}
	//document.write(x + y);
}

Funk(1, null);

/*
Логические операторы
! = НЕ
&& = И
|| = ИЛИ

= - присваивание 

операторы сравнения
== - сравнение 
!= 
< 
>
<=
>= 
*/

