import promptSync from "prompt-sync";
const prompt = promptSync();

const PrecoDosProdutos = 6.99;
const number = total

console.log("=========================================")
console.log (`LOJÃO BARATÃO DE SEU MANOEL TUDO A ${PrecoDosProdutos}R$, Tabela para Uso dos Caixas`)
console.log("=========================================")


for (let i = 1; i <= 50; i++) {
     total = (i * PrecoDosProdutos).toFixed(2);
    console.log(`${i} produtos - R$ ${total}`);
}