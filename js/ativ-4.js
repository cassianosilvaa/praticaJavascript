const anoAtual = 2022;
let anoQueNasceu = Number(prompt("Digite aqui o ano em que você nasceu:"));
let idade = anoAtual - anoQueNasceu;

if (idade >= 16) {
    console.log(`Você tem: ${idade} anos, então, poderá votar esse ano!`);
} else {
    console.log(`Você tem: ${idade} anos, então, não poderá votar esse ano!`);
}

// Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa.
//Escrever uma mensagem no console que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).
