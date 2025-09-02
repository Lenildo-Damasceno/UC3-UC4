import promptSync from 'prompt-sync';
const prompt = promptSync();
//variaveis
const turmaa = [];
const turmab = [];
let resultado = [];
//entrada de dados

console.log("===CADASTRO DE ALUNOS DA TURMA A E TURMA B===");
for (let i = 0;  i < 10;i++){
    turmaa.push(prompt("Digite o nome dos 10 Alunos da Turma A , O " + (i + 1) + "° : "));
}
//entrada de dados
for (let j = 0; j < 10; j++)
        {turmab.push(prompt("Digite os nomes dos 10 Alunos da Turma B, O " + (j + 1) + "° : "));}

for (let i = 0; i < 10; i++) {
    resultado.push(turmaa[i]) 
    resultado.push(turmab[i])}
//mostrando resultado
console.log("NOMES DOS 20 ALUNOS DAS DUAS TURMAS :");
console.log("ALUNOS DA TURMA A:", turmaa);
console.log("ALUNOS DA TURMA B:", turmab);
console.log("TODOS OS ALUNOS INTERCALADOS SÃO :", resultado);