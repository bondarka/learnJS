// Дано 2 переменные,содержащие целые числа.Необходимо найти их сумму используя только операторы вида m=n,m=число,m=n+1.
var a = 10;
var b = 45;
var sum = b;
for (var i = 0; i < a; i++) {
    sum = sum + 1;
}
console.log(sum);
