import promptSync from 'prompt-sync';
const prompt = promptSync();

// Lista com 20 nomes de alunos
let alunos = [
    "Ana", "Bruno", "Carlos", "Daniela", "Eduardo",
    "Fernanda", "Gabriel", "Helena", "Igor", "Juliana",
    "Karla", "Lucas", "Marina", "Nicolas", "Olivia",
    "Paulo", "Quésia", "Rafael", "Sofia", "Tiago"
];


let encontrado = false;
let nomeBusca = "";
while (!encontrado) {
    nomeBusca = prompt("Digite o nome do aluno para buscar: ");
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].toLowerCase() === nomeBusca.toLowerCase()) {
            encontrado = true;
            console.log(`O aluno(a) ${alunos[i]} está na sala de aula (posição ${i}).`);
            break;
        }
    }
    if (!encontrado) {
        console.log(`O aluno(a) ${nomeBusca} não está na sala de aula. Tente novamente.`);
    }
}
