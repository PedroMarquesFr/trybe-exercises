var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Escolha a sua questao: \n(1)\n(2-3)\n(4)\n(5)\n(6)\n(7)\nDigite o numero da questao que deseja ver: ", function(answer) {
    switch (answer) {
        case '1':
            function verificaPalindrome(palavra){
                if(palavra === palavra.split('').reverse().join('')){
                    return true;
                }else{
                    return false;
                }               
            }
            console.log(verificaPalindrome("arara"));
        break;
        case '2-3':
            function menorValor(array, bool){
                let menornum = array[0];
                for (const key in array) {
                    if(bool){
                        if(array[key] < menornum){
                            menornum = array[key];
                        }
                    }else{
                        if(array[key] > menornum){
                            menornum = array[key];
                        }
                    }
                }
                return menornum;
            }
            console.log(menorValor([1,4,10,-7,-10,8,-100,9], true))
            console.log(menorValor([1,4,10,-7,-10,8,-100,9], false))
        break;
        case '4':
            function biggestName(names){
                let biggest = 0;
                let result;
                names.map(name => {
                    if(name.split('').length > biggest){
                        result = name;
                        biggest = name.split('').length;
                    }    
                });
                return result;
            }
            console.log('maior valor: ' + biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
        break;
        case '5':
            function majorPattern (array) {
                let values = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}; //quis fzr com objeto por conta do topico do dia mas com array eh mais elegante
                let biggest = 0;
                for (const key in array) {
                    values[array[key]]+=1;
                }
                for (const key in values) {
                    if(values[key] > biggest){
                        biggest = key;
                    }
                }
                return biggest;
            }
            console.log(majorPattern([2, 3, 2, 5, 8, 8, 8, 8, 8, 8, 2, 3]));
        break;
        case '6':
            function sun (number) {
                var somador = 0;
                for (let aux = 0; aux <= number; aux+=1) {
                    somador += aux;
                }
                return somador;
            }
            console.log(sun(3));
        break;
        case '7':
            function a (completa, incompleta) {
                completa = completa.split('').reverse();
                incompleta = incompleta.split('').reverse();
                for (const key in incompleta) {
                    if(completa[key] != incompleta[key]){
                        return false;
                        
                    }
                }
                return true;
            }
            console.log(a("trybe", "rybe")); 
            console.log('trybe'.includes('rybe'));
        break;
        
    }
    leitor.close();      
});    