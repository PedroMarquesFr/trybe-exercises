var readline = require('readline');

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function somar(array) {
    var soma = 0;
    for(let i = 0; i < array.length; i++){
        soma = soma + array[i];
    }
    return soma;
}

leitor.question("Escolha a sua questao: \n(1)\n(2)\n(3)\n(4)\n(5)\n(6)\n(7)\n(8-9)\n ~ ", function(answer) {

    switch (answer) {
        case '1':
            for(let i = 0; i<numbers.length; i++){
                console.log(numbers[i]);
            }
            break;
        case '2':
            console.log(`Soma: ${somar(numbers)}`);
            break;
        case '3':
            console.log(`Media aritmetica: ${somar(numbers)/numbers.length}`);
            break;
        case '4':
            if(somar(numbers)/numbers.length >= 20){
                console.log('Valor maior que 20');
            }else{
                console.log('Valor menor que 20');
            }            
            break;
        case '5':
            let maior = -99999999;
            for(let aux = 0; aux < numbers.length; aux++){
                if(numbers[aux] >= maior){
                    maior = numbers[aux];
                }
            }
            console.log(`Maior valor no array: ${maior}`);
            break;
        case '6':
            let contador = 0;
            for(let aux = 0; aux < numbers.length; aux++){
                if(numbers[aux]%2 !== 0){
                    contador += 1;
                }
            }
            if(contador === 0){
                console.log('Nao ah numeros impares');
            }else{
                console.log(`Numero de impares: ${contador}`);
            }
            break;
        case '7':
            //vou ja mecher nesse, quero fzr uma funcao global pra isso
            break; 
        case '8':
            let array25 = [];
            for(let j = 1; j<25; j+=1){
                array25.push(j);
            }
            console.log(array25);
            console.log(array25.map((num) => {
                return num / 2;
            }))
            break;                     
        default:
            console.log('Digite um numero valido, para o (8-9) digite apenas 8')
            break;
    }

    leitor.close();
});