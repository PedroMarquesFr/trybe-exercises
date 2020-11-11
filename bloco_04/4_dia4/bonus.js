const romtonum = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};

function a(roma){
    roma = roma.split('');
    let result;
    if(roma[0] < roma[1]){
        result = romtonum[roma[1]] - romtonum[roma[0]];
    }else{if(roma[0] > roma[1]){
        result = romtonum[roma[1]] + romtonum[roma[0]];
    }else{
        result = romtonum[roma[0]] + romtonum[roma[1]];
    }}
    return result;
}

console.log(a('MC'));