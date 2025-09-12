import promptSync from 'prompt-sync';
const prompt = promptSync();

import { listarEstoque,consultarEstoque,adicionarProduto } from './funçoes3.js';


let produto = []
let qtdade = []
let preco = []

listarEstoque(produto, qtdade, preco);

do {
let opcao = Number(prompt('DIgite a opção Desejada'))



}while(opcao!==0)




