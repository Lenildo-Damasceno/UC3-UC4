import PromptSync from "prompt-sync" 
const prompt = PromptSync() 


console.log('JOGO ONLINE DE DADOS');
console.log('------------------');

let jogador1 = prompt('Nome do jogador 1: ');
let jogador2 = prompt('Nome do jogador 2: ');

let jogadas1 = [];
let jogadas2 = [];
let pontosJogador1 = 0;
let pontosJogador2 = 0;

// Cada jogador joga 3 rodadas
for (let rodada = 1; rodada <= 3; rodada++) {
    let jogada1 = Math.floor(Math.random() * 6) + 1;
    let jogada2 = Math.floor(Math.random() * 6) + 1;
    jogadas1.push(jogada1);
    jogadas2.push(jogada2);

    console.log(`\nRodada ${rodada}:`);
    console.log(`${jogador1} jogou: ${jogada1}`);
    console.log(`${jogador2} jogou: ${jogada2}`);

    if (jogada1 > jogada2) {
        pontosJogador1++;
        console.log(`${jogador1} venceu a rodada!`);
    } else if (jogada2 > jogada1) {
        pontosJogador2++;
        console.log(`${jogador2} venceu a rodada!`);
    } else {
        console.log("Empate na rodada!");
    }
}

console.log('\nResumo das jogadas:');
console.log(`${jogador1}: ${jogadas1.join(', ')}`);
console.log(`${jogador2}: ${jogadas2.join(', ')}`);

if (pontosJogador1 > pontosJogador2) {
    console.log(`\n${jogador1} venceu o jogo!`);
    console.log(`${jogador2} perdeu o jogo.`);
} else if (pontosJogador2 > pontosJogador1) {
    console.log(`\n${jogador2} venceu o jogo!`);
    console.log(`${jogador1} perdeu o jogo.`);
} else {
    console.log("\nO jogo terminou empatado!");
}