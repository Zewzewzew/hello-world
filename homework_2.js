var a = 1, b = 1, c, d;  // Объявляем переменные

c = ++a; alert(c); // c = 2 т.к. a увеличилось на 1
d = b++; alert(d); // d = 1 т.к значение b увеличилось на 1 только после присваивания.

c = (2+ ++a); alert(c); // с = 5 т.к 2 + (a+1) 
d = (2+ b++); alert(d); // d = 4 т.к значение b увеличится только после присваивания. 2 + 2.
alert(a); // после всех операций значение равно 3
alert(b); // после всех операций значение равно 3



var a = 2; // значение а = 2

var x = 1 + (a *= 2) // значение x = 5 

//* Забегая немного вперед.
 //Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. 
 //Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – 
 //‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.


var one = 0;
while (one < 101) {
  
  if ( one % 5 === 0 && one % 3 === 0 ) {
    console.log("FizzBuzz");
  }

  else if ( one % 5 === 0 && one % 3 != 0) {
    console.log("Buzz");
    
  }
  
  else if (one % 3 === 0) {
    console.log("Fizz");
    }
one++;
}

