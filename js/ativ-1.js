let valor1 = Number(prompt("Armazene aqui o primeiro valor."));
let valor2 = Number(prompt("Armazene aqui o segundo valor."));
let valor3 = Number(prompt("E também o terceiro valor."));
const soma = valor1 + valor2 + valor3;
const media = (valor1 + valor2 + valor3) / 3;
const produto = valor1 * valor2 * valor3;

if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3) {
    alert("Você repetiu algum número na digitação");
} else {
    console.log("A soma dos valores é: " + soma);
    console.log("A média dos produtos é: " + media);
    console.log("O produto é: " + produto);

    let maior = Math.max(valor1, valor2, valor3);
    let menor = Math.min(valor1, valor2, valor3);

    console.log("O número maior é: " + maior);
    console.log("O menor número é: " + menor);
}

// Escreva um algoritmo que armazene três valores numéricos
// diferentes e, em seguida, mostre no console a soma, a média, o
// produto, o menor e o maior desses números. O algoritmo deve
// validar e parar a execução ao mostrar um alerta com a mensagem
// “Você repetiu algum número na digitação" se caso duas variáveis
// estiverem armazenando o mesmo valor. Utilize o console.log() para
// mostrar o resultado esperado.
