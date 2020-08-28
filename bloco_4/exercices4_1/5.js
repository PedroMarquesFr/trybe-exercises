const a = 60;
const b = 60;
const c = 'a';

const sun = a+b+c;

if(sun === 180){
    console.log(true)
}else{
    if ( typeof sun === 'number') {
        console.log(false)
    } else {
        console.log("ERRO: valores passados sao invalidos")
    }
}
