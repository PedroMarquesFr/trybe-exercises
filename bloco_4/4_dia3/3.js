const n = 5;
let amount = '';
let n2 = n;
for( let u = 0; u < n-1; u+=1){
    for( let i = 0; i < n2-1; i+=1){
        amount += ' ';
    }
    amount += '*';
    n2 -= 1;
    console.log(amount);
}