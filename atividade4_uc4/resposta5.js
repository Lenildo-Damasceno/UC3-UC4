import promptSync from "prompt-sync"; 
const prompt = promptSync(); 

let SalarioInicial = 510;
let SalarioAtual = SalarioInicial;
let percentual = 1.5;

console.log('Histórico Salarial do Funcionário');
console.log(`Salário inicial: R$ ${SalarioInicial.toFixed(2)}`);

for (let ano = 2010; ano <= 2025; ano++) {
    if (ano > 2010) {
        SalarioAtual += SalarioAtual * (percentual / 100); // Aplica o aumento do ano
        percentual += 1.5; // Aumenta o percentual em 1.5 para o próximo ano
    }
    // Calcula o percentual de aumento aplicado no ano atual.
    let percentualExibido = percentual - (ano > 2010 ? 1.5 : 0);
    console.log('-----------------------------');
    console.log(`Ano: ${ano}`);
    console.log(`Salário: R$ ${SalarioAtual.toFixed(2)}`);
    console.log(`Percentual de aumento: ${percentualExibido.toFixed(2)}%`);
}
console.log('-----------------------------');