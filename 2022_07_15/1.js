// Добро пожаловать. В этой ката вас просят возвести в квадрат каждую цифру числа и соединить их.

// Например, если мы пропустим через функцию 9119, получится 811181, потому что 9 2 равно 81, а 1 2 равно 1.

// Примечание . Функция принимает целое число и возвращает целое число.


function squareDigits(num){
    return +num
    .toString()
    .split('')
    .map( number => number**2)
    .join("");
  }
  squareDigits(9119) 