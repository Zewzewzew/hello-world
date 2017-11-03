//Написать функцию, преобразующую число в объект.
 //Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
 //в котором в соответствующих свойствах описаны единицы, десятки и сотни.
var number = prompt("Enter number.");
String(number);
var object = {};
if (number.length  == 3){
	var firstNumber = number.charAt(0);
	var secondNumber = number.charAt(1);
	var thirdNumber = number.charAt(2);
	object.firstNumber = firstNumber;
	object.secondNumber = secondNumber;
	object.thirdNumber = secondNumber;

}
else if(number.length == 2){
	var firstNumber = number.charAt(0);
	var secondNumber = number.charAt(1);
	object.firstNumber = firstNumber;
	object.secondNumber = secondNumber;

}
else if(number.length == 1){
	var firstNumber = number.charAt(0);
	object.firstNumber = firstNumber;

}

console.log(object);
