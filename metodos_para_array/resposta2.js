import promptSync from 'prompt-sync';
const prompt = promptSync();

let catalogoInicial = [ "camisa", "calça", "vestido", "saia", "blusa", 
    "shorts",  "jaqueta", "moletom", "regata", "camiseta"];


console.log("CATÁLOGO INICIAL:", catalogoInicial.join(", "),
"\n ==============================\n");

console.log("FOI ENCONTRADO PEÇAS COM DEFEITO, E FORAM REMOVIDAS DO CATÁLOGO:", //removidos.join(", "),
    "\n ==============================\n");
let removidos  = catalogoInicial.splice(3, 3); //removendo 3 itens a partir do indice 3

let novaColecao = [ "camisa estampada", "calça cargo", "vestido longo", "saia plissada", "blusa de tricô", 
    "shorts jeans",  "jaqueta jeans", "moletom verde", "regata preta", "camiseta listrada"];
console.log("NOVA COLEÇÃO:", novaColecao.join(", "));

let catalogoGeral = catalogoInicial.concat(novaColecao); //juntando os dois catálogos
console.log("\nCATÁLOGO ATUALIZADO:", catalogoGeral.join(", "),
"\n ==============================\n");

let busca = prompt("Digite o nome do produto para buscar: ").toLowerCase();
for ( i = 0; i < catalogoGeral.length; i++) {
    catalogoGeral[i] = catalogoGeral[i].toLowerCase();
}
let posicao = catalogoGeral.findIndex(item => item === busca);
//if (posicao !== -1) { nãoo quero assim
    console.log("Produto encontrado na posição:", posicao);
} else {
    console.log("Produto não encontrado.");
}
