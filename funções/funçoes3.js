import promptSync from 'prompt-sync';
const prompt = promptSync();

export function adicionarProduto(produto) {
    estoque.push(produto);
}
export function listarEstoque() {
    return estoque;
}
 