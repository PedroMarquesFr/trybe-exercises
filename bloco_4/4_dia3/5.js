const n = 7;
let n2 = n;
let bases = 1;
let spaceInside = 0; 

for(let u = 0; u < n; u+=1){
    let amount = '';
    for( let i = 0; i < Math.floor(n2/2); i += 1){
        amount += ' ';
    }

    amount += '*';

    bases+=2;

    for(let a = 0; a < spaceInside*2-1; a+=1){
        if(bases <= n){
            amount += ' ';
        }else{
            amount += '*';
        }        
    }
    if(spaceInside!==0){
        amount += '*';
    }
    spaceInside+=1;
    n2-=2;
    if(bases > n){
        u = n;
    }
    console.log(amount);
}