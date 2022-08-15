let ladoA = Number(prompt("Digite aqui o primeiro lado do triângulo:"));
let ladoB = Number(prompt("Digite aqui o segundo lado do triângulo:"));
let ladoC = Number(prompt("Digite aqui o terceiro lado do triângulo:"));
const doisLadosIguais = "Isósceles";
const ladosDiferentes = "Escaleno";
const ladosIguais = "Equilátero";

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (
        (ladoA == ladoB && ladoA == ladoC) ||
        (ladoB == ladoC && ladoC == ladoA)
    ) {
        console.log(`O tipo do triângulo é: ${ladosIguais} `);
    } else if (ladoA != ladoB || ladoA != ladoC || ladoB != ladoC) {
        console.log(`O tipo do triângulo é: ${ladosDiferentes} `);
    } else {
        console.log(`O tipo do triângulo é: ${doisLadosIguais} `);
    }
} else {
    console.log("Valores fornecidos não formam um triângulo!");
}

// Crie um algo ritmo que armazene três valores, para cada um dos
// lados de um triângulo:

// A, B e C. Verifique se os lados fornecidos formam realmente um triângulo. Se formar, deve mostrar no console o tipo de triângulo: isósceles, escaleno ou equilátero.

// a. Para verificar se os lados fornecidos formam um triângulo: A < B + C e B < A + C e C < A + B.

// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);

// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);

// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);
