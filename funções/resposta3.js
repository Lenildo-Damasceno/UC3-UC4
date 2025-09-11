import promptSync from 'prompt-sync';
const prompt = promptSync();
import { adicionarProduto } from './funçoes3.js';
import { listarEstoque } from './funçoes3.js';




let estoque = [];

console.log('=======PADARIA ALVORADA===========');
console.log('0 - para SAIR')
console.log('1 - Adicionar Produto');
console.log('2 - Listar Estoque');
console.log('3 - Consultar Produto');
console.log('4 - Remover Produto')
console.log('5 - Registar Venda')
console.log('6 - Relatorio Final')

let operacao = -1;
while (operacao !== 0) {
    operacao = parseInt(prompt('Escolha uma opção: '));
    switch (operacao) {
        case 1:
            const nome = prompt('Nome do produto: ');
            const quantidade = Number(prompt('Quantidade: '));
            const preco = Number(prompt('Preço: '));
            estoque = adicionarProduto( nome, quantidade, preco);
            console.log('Produto adicionado!');
            break;
        case 2:
            console.log('Estoque:', listarEstoque());
            break;
        case 0:
            console.log("OBRIGADO PELA VISITA");
            break;
        default:
            console.log('Opção inválida!');
    }
}

console.log(`seu estoque é ${(estoque)}`)



