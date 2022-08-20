let totalEleitores = prompt(
    "Digite aqui o número total de eleitores de um município:"
);
let vBranco = Number(prompt("Quantos votos em branco teve?"));
let vNulo = Number(prompt("Quantos votos foram nulos?"));
let vValidos = Number(prompt("E quantos votos foram válidos?"));

let pBranco = (vBranco / totalEleitores) * 100;
let pNulo = (vNulo / totalEleitores) * 100;
let pValido = (vValidos / totalEleitores) * 100;
let totalP = pBranco + pNulo + pValido;

if (totalEleitores < totalP) {
    alert("Desculpe, mas os números não fecham.");
} else {
    alert(
        `Desses ${totalEleitores} eleitores;\n ${pBranco.toFixed(
            2
        )}% de votos foram em braco! \n ${pNulo.toFixed(
            2
        )}% de votos foram nulo! \n ${pValido.toFixed(
            2
        )}% de votos foram válidos! \n A porcentagem total de votos é: ${totalP.toFixed(
            2
        )}%`
    );
}

/*
Escreva um algoritmo que armazene o número total de eleitores de
um município, o número de votos brancos, nulos e válidos.

Calcular e escrever o percentual que cada um representa em relação ao
total de eleitores.

O algoritmo deve fazer uma validação para que as
porcentagens dos votos armazenados (brancos, nulos e válidos)
respeitem o limite do número total de eleitores, ou seja, garantir que
a soma dos votos brancos, nulos e válidos não seja maior que o
número total de eleitores.
*/
