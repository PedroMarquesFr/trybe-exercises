const num = 37;

for(let u = 1; u < num-1; u+=1){
    if(num%u !== 0){
        console.log("Nao Primo");
        break;
    }
    console.log("Primo");
}


