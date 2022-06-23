const a = 10;
const b = 60;
const c = 60;
/*let adicao = a + b;         //exercicio 1
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;*/

/*if(a > b){                      //exercicio 2
    console.log(a);
} else{
    console.log(b);
} */


/*if (a > b && a > c){           //exercicio 3
    console.log(a);
} else if (b > a && b > c){
    console.log(b);
} else {
    console.log(c);
} */


/*if (a >= 1){                       //exercicio 4 
    console.log('Positive');
} else if (a <= -1){
    console.log('Negative');
} else {
    console.log('ZERO');
} */


/*let somaLadosDoTriangulo = a + b + c;             //exercicio 5
if (somaLadosDoTriangulo === 180){
    console.log(true);
} else if (a <= 0 || b <= 0 || c <= 0 ){
    console.log('Erro de angulo!');
} else {
    console.log(false);
}  */


let nomeDaPeca = 'rei';                             //exercicio 6                        
switch (nomeDaPeca) {
    case 'dama':
        console.log('Pode mover-se em qualquer direção, porém quantas casas quiser, desde que estejam livres.');
        break;
    case 'rei':
        console.log('Pode mover - se em qualquer direção, porém apenas uma casa por vez.');
        break;
    case 'torre':
        console.log('Move - se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
        break;

    default: console.log('Peça não encontrada');
        break;
}
