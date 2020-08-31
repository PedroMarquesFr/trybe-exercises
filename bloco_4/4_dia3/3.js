const n = 5;
let n2 = n;
for( let u = 0; u <= n; u += 1){
    let amount = '';
    for( let i = 0; i < n2; i += 1){
        amount += ' ';
    }
    for(let a = 0; a < (n-n2); a += 1){
    amount += '*';
    }
    n2 -= 1;
    console.log(amount);
}