import PromptSync from "prompt-sync"
const prompt = PromptSync()

let Linhasemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
]
 let colunaCafeAlmocoJanta = ['cafe','almoco', 'jantar']

 let cardapio = [
    [ "Tapioca com queijo coalho e café", "Frango grelhado com arroz, feijão, e salada de folhas verdes", "Sopa de legumes com crôutons"],
    [ "Pão na chapa com requeijão e suco de laranja", "Carne de panela com purê de batata e cenouras cozidas", "Omelete com queijo e tomate, acompanhado de salada"],
    [ "Cuscuz com ovo e manteiga da terra", "Peixe assado com batatas e brócolis ao vapor", "Panquecas de frango desfiado com molho de tomate"],
    [ "Iogurte natural com granola e frutas picadas", "Bife acebolado com arroz, feijão e farofa", "Torta salgada de liquidificador (frango ou legumes)"],
    [ "Vitamina de abacate com aveia", "Lasanha à bolonhesa com salada de rúcula", "Espetinho de carne e legumes (kafta) com vinagrete"],
    [ "Bolo de milho com café com leite", "Feijoada leve com arroz, couve refogada e laranja", "Pizza caseira de diversos sabores"],
    [ "Pão de queijo caseiro e suco de goiaba", "Macarronada de domingo com almôndegas ao sugo", "Sanduíche natural de frango ou atum no pão integral"]
  ]

  let diadebusca = prompt(" DIGITE DIA DE BUSCA")
  let turno = prompt ('DIGA SE É CAFE , ALMOÇO , JANTA')

 let protaencotrado = cardapio[Linhasemana.indexOf(diadebusca)][colunaCafeAlmocoJanta.indexOf (turno)]

  console.log ('o prato é', protaencotrado)


  console.table(cardapio)

  




// let matriz = []

// let linha = Number(prompt('Digite a quantidade de linhas: '))
// let coluna = Number(prompt('Digite a quantidade de coluna: '))

// for(let l = 0; l < linha; l++){//linha -  elementos
//     matriz[l] = []
//     for(let c = 0; c < coluna; c++){ // colunas - os valores de cada elemento/linha
//         matriz[l].push(Number(prompt('Digite um valor: ')))
//         //matriz[l][c]
//     }
// }

// console.log(matriz)
// matriz[1].splice(matriz[1].indexOf(3),1) // matriz[1].splice(0,1) Remove um valor do 2º elemento de acordo com índice específico
// console.log(matriz)
// matriz.pop() // remove o último elemento
// console.log(matriz)
// matriz[0].shift() // remove o 1º valor do 1º elemento
// console.log(matriz)

























