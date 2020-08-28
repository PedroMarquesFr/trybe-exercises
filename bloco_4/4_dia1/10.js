let custo = 100;
let venda = 130;

if(custo<0 || venda<0){
    console.log(`ERRO: Os valores inseridos estao errados`);
}else{
    const imposto = custo*(1/5);

    let custoTotal = imposto+custo;

    let quantidade = 1000;

    let lucro = (venda*quantidade)-(custoTotal*quantidade);

    console.log(`Lucro: ${lucro}`);
}