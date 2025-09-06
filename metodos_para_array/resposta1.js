import promptSync from 'prompt-sync';
const prompt = promptSync();

let listadePalavroes = ["drogra", "merda", "porcaria", "cacete"];
let contadordeOfencivas = 0

console.log("======= VIA CERTA NATAL ==========");
let textoOriginal = prompt("POR FAVOR JORNALISTA MANDE SEU TEXTO PARA CORREÇÃO : ");
let palavras = textoOriginal.split(" "); // transformando texto em array
let novoArrayDePalavras = [];

for (let i = 0; i < palavras.length; i++) {
  let palavra = palavras[i];
  const palavraLimpa = palavra.toLowerCase();

  if (listadePalavroes.includes(palavraLimpa)) {
    novoArrayDePalavras.push('***');
    contadordeOfencivas = contadordeOfencivas +1
  } else {
    novoArrayDePalavras.push(palavra);
  }
}



// console.log("seu texto é:", novoArrayDePalavras.join(" "));
// console.log("quantidade de ofensas:", contadordeOfencivas);




