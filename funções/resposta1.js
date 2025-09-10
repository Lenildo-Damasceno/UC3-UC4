import promptSync from 'prompt-sync';
const prompt = promptSync();

function caminhada (tipo,tempo){
    const caloriasPorMinuto = 5 
    return caloriasPorMinuto * tempo;
}
function corrida(tipo,tempo){
    const caloriasPorMinuto = 10 
    return caloriasPorMinuto * tempo;
}
function bicicleta(tipo,tempo){
    const caloriasPorMinuto = 8
    return caloriasPorMinuto * tempo;
}


    