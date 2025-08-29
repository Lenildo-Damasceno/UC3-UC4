// Exemplo: Calculando a média dos valores do vetor
let numeros = [10, 20, 30, 40, 50, 100, 200];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
let media = soma / numeros.length;
console.log("Média dos valores do vetor:", media.toFixed(2));
