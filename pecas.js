let pesoPeca = 150;
let numeroPecas = 8;
let nomePeca = "disco";

if (pesoPeca > 100) {
    console.log("Peso maior que 100g. Peça pode ser cadastrada!");
    NumeroPecas();
} else {
    console.log("Peso insuficiente. Peça NÃO pode ser cadastrada!");
}


function NumeroPecas() {
    if (numeroPecas < 10){
        console.log("Há espaço disponível. Pode cadastrar!");
        NomePeca();
    } else {
        console.log("Não há espaço disponível. NÃO pode cadastrar!");
    }
}

function NomePeca() {
    if (nomePeca.length < 3) {
        console.log("Nome menor que 3 carateres. NÃO pode cadastrar!")
    } else {
        console.log("Nome com 3 ou mais caracteres. Pode cadastrar!")
    }
}