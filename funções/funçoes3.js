import promptSync from 'prompt-sync';
const prompt = promptSync();


export function listarEstoque(prod, qtde, valor) {
    console.log (' PRODUTOS - PREÇOS - QUANTIDADE')
    for (let i = 0; i < prod.length; i++) {
        console.log(`Produto: ${prod[i]}, Quantidade: ${qtde[i]}, Valor: ${valor[i]}`);
    }
}

// const produto = function(prod,nome){
//     prod.push(nome)
//     return
// }
export function adicionarEstoque(produto, nome, quantidade, qtde, preco, valor) {
    produto.push(nome);
    qtde.push(quantidade);
    valor.push(preco);
}

export const consultarEstoque = (produto, nome) => produto.indexOf(nome);
