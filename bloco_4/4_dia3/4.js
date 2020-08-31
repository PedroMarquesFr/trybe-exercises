const n = 7;
let n2 = n;
let bases = 1; 

for(let u = 0; u < n; u+=1){
    let amount = '';
    for( let i = 0; i < Math.floor(n2/2); i += 1){
        amount += ' ';
    }
    for(let u = 0; u < bases; u+=1){
        amount += '*';
    }
    for( let i = 0; i < Math.floor(n2/2); i += 1){
        amount += ' ';
    }
    n2-=2;
    bases+=2;
    if(bases > n){
        u = n;
    }
    console.log(amount);
}