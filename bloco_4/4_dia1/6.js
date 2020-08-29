const peca = 'bispo';
let pecaLowerCase = peca.toLowerCase();

switch (pecaLowerCase) {
    case 'bispo':
            console.log("diagonal");
        break;

    case 'torre':
            console.log('reto seila');
        break;
    default:
        console.log('preguica de fzr as outras');
        break;
}