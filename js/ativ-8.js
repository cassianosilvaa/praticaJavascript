let valorTabela = Number(prompt("Digite o preço de tabela:"));
let parcela = Number(
    prompt(
        "Em quantas vezes deseja parcelar? \n As opções de parcela são;\n À vista - Digite 1 (Desconto de 2,5%)\n 2 até 5 vezes (Sem juros)\n 6 até 10 vezes (Juros de 6%)\n 11 até 15 vezes (Juros de 13%)"
    )
);

let option1 = (valorTabela - valorTabela * 0.025).toFixed(2);
let option2 = valorTabela;
let option3 = (valorTabela + valorTabela * 0.06).toFixed(2);
let option4 = (valorTabela + valorTabela * 0.13).toFixed(2);

if (parcela <= 0 && parcela > 15) {
    console.log("Desculpe, não temos essa opção!");
} else if (parcela == 1) {
    console.log(`Sua compra ficou com o total de: R$${option1} reais.`);
} else if (parcela >= 2 && parcela <= 5) {
    console.log(
        `Sua compra será parcelada em ${parcela} vezes de ${valorTabela}`
    );
    console.log(`Sua compra ficou com o total de: R$${option2} reais.`);
} else if (parcela >= 6 && parcela <= 10) {
    console.log(
        `Sua compra será parcelada em ${parcela} vezes de ${
            valorTabela / parcela
        }`
    );
    console.log(`Sua compra ficou com o total de: R$${option3} reais.`);
} else {
    console.log(
        `Sua compra será parcelada em ${parcela} vezes de ${
            valorTabela / parcela
        }`
    );
    console.log(`Sua compra ficou com o total de: R$ ${option4} reais.`);
}

// else if()

// Escreva um algoritmo que armazene o preço de tabela e o número de
// vezes em que o pagamento será feito. Calcule o valor de cada parcela e o
// preço total da compra e imprima no console.

// Exemplo: 5% de 700.
// 5% de 700 = 5/100 X 700.
// = 5 X 7.
// = 35.
// Exemplo: 10% de 500.
// 10% de 500 = 10/100 X 500.
// = 10 X 5.
// = 50.
