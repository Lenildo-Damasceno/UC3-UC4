import promptSync from 'prompt-sync';
const prompt = promptSync();

const produtos = [
  { nome: "Camiseta Básica" },
  { nome: "Calça Jeans" },
  { nome: "Tênis Esportivo" },
  { nome: "Relógio Digital" },
  { nome: "Fone de Ouvido Bluetooth" },
  { nome: "Notebook 16GB" },
  { nome: "Smartphone 128GB" },
  { nome: "Mochila Escolar" },
  { nome: "Livro de Ficção" },
  { nome: "Cadeira Gamer" },
  { nome: "Mouse Sem Fio" },
  { nome: "Teclado Mecânico" },
  { nome: "Monitor 24\"" },
  { nome: "Impressora Multifuncional" },
  { nome: "Bicicleta Aro 29" },
  { nome: "Cafeteira Elétrica" },
  { nome: "Ventilador de Mesa" },
  { nome: "Churrasqueira Elétrica" },
  { nome: "Aspirador de Pó" }
]


let TodosProdutos = produtos.map(p => p.nome).toString(); // convertendo array em string
console.log("CATALOGO: " + TodosProdutos, "\n");

console.log("===Bem vindo a loja de produtos===");
console.log(" quantos produtos deseja adicionar ao carrinho? (maximo 5 produtos) ");
let quantidade = parseInt(prompt("Digite a quantidade de produtos que deseja adicionar ao carrinho: "));

// Validação da quantidade
if (isNaN(quantidade) || quantidade < 1 || quantidade > 5) {
  console.log("Quantidade inválida. Por favor, escolha entre 1 e 5 produtos.");
  process.exit(1);
}

// Adicionando produtos ao carrinho
let carrinho = [];
for (let i = 0; i < quantidade; i++) {
  let produtoNome = prompt(`Digite o nome do produto #${i + 1}: `);
  let produtoEncontrado = produtos.find(p => p.nome.toLowerCase() === produtoNome.toLowerCase());
  if (produtoEncontrado) {
    carrinho.push(produtoEncontrado);
  } else {
    console.log(`Produto "${produtoNome}" não encontrado. Tente novamente.`);
    i--; // repete a iteração
  }
}

console.log("Produtos no carrinho:");
carrinho.forEach((p, idx) => console.log(`${idx + 1}. ${p.nome}`));

// Remover produto do carrinho
if (carrinho.length > 0) {
  let remover = prompt("Deseja remover algum produto do carrinho? (s/n): ");
  if (remover.toLowerCase() === 's') {
    carrinho.forEach((p, idx) => console.log(`${idx + 1}. ${p.nome}`));
    let idxRemover = parseInt(prompt("Digite o número do produto que deseja remover: "));
    if (!isNaN(idxRemover) && idxRemover >= 1 && idxRemover <= carrinho.length) {
      let removido = carrinho.splice(idxRemover - 1, 1);
      console.log(`Produto removido: ${removido[0].nome}`);
    } else {
      console.log("Número inválido.");
    }
  }
}

console.log("Carrinho final:");
carrinho.forEach((p, idx) => console.log(`${idx + 1}. ${p.nome}`));

