// Дано 2 переменные,содержащие целые числа.Необходимо поменять значение переменных местами,используя  дополнительных переменных.
var a = 10;
var b = 45;

a = a+b;
b = a-b;
a = a-b;

console.log('a=', a, 'b=', b);
