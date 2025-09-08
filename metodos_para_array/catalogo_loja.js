import promptSync from 'prompt-sync';
const prompt = promptSync();

// Catálogo atual da loja
let catalogo = [
  'Camiseta Branca',
  'Calça Jeans',
  'Vestido Floral',
  'Jaqueta Preta',
  'Saia Jeans',
  'Blusa Listrada',
  'Shorts Vermelho',
  'Camisa Social',
  'Moletom Cinza',
  'Regata Azul'
];

console.log('Catálogo inicial:', catalogo);

// Remover 3 itens a partir da posição 4 (índice 3)
catalogo.splice(3, 3);
console.log('Catálogo após remoção de lote com defeito:', catalogo);

// Nova coleção de roupas
let novaColecao = [
  'Camiseta Estampada',
  'Calça Cargo',
  'Vestido Longo',
  'Jaqueta Jeans',
  'Saia Plissada',
  'Blusa de Tricô',
  'Shorts Jeans',
  'Camisa Polo',
  'Moletom Verde',
  'Regata Preta'
];
console.log('Nova coleção:', novaColecao);

// Juntar nova coleção ao catálogo existente
catalogo = catalogo.concat(novaColecao);
console.log('Catálogo atualizado:', catalogo);

// Busca de produto
let busca = prompt('Digite o nome do produto para buscar: ');
let posicao = catalogo.findIndex(item => item.toLowerCase() === busca.toLowerCase());
if (posicao !== -1) {
  console.log(`Produto encontrado: ${catalogo[posicao]} na posição ${posicao}`);
} else {
  console.log('Produto não encontrado no catálogo.');
}
