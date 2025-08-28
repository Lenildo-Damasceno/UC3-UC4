import promptSync from "prompt-sync"; 
const prompt = promptSync(); 

let total = 0
let quantidade = 0
let troco = 0
let valorPago = 0

console.log("===================CAIXA REGISTRADORA===========================")
console.log(" ===============================================================")

let preco = Number(prompt("Informe o preço da mercadoria (0 para finalizare mostra Valor da compra e seu troco): "));
while (preco != 0) {
    total += preco
    quantidade++
    preco = Number(prompt("Informe o preço da mercadoria (0 para finalizare mostra Valor da compra e seu troco): "));
}  
if (quantidade === 0) {
    console.log("Nenhum produto comprado.");
} else {


    valorPago = Number(prompt("Informe o valor pago pelo cliente: "));
    troco = valorPago - total;
    console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
    console.log(`Quantidade de produtos: ${quantidade}`);
    console.log(`Troco: R$ ${troco.toFixed(2)}`);
}


