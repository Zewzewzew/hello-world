///Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
function min(a, b){
  if (a < b){
    return a;
  }
  else if( b < a){
    return b;
  }
}
console.log(min(10, 15));
console.log(min(-10, 8));
