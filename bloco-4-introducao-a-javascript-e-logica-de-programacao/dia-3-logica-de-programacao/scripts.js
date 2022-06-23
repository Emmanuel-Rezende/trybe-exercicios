
//exercicio 1
/*let num = 10;
let soma = 1;
while (num > 0) {
    soma = soma * num;
    console.log(num);
    num --  
}
 console.log(soma); */   //ex1

 
//exercicio 2
let palavra = 'trybe';
let invertida = '';
for (let index = palavra.length - 1; index >= 0; index--) {
    invertida += palavra[index];
}
console.log(invertida);