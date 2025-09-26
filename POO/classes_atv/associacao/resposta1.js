import promptSync from "prompt-sync";
const prompt = promptSync();


class Memoria {
    #tipo
    #frequencia
    #capacidade

    constructor(tipo, frequencia, capacidade) {
        this.#tipo = tipo;
        this.#frequencia = frequencia;
        this.#capacidade = capacidade;
    }
    set tipo(novoTipo) {
        this.#tipo = novoTipo;
    }

    get tipo() {
        return this.#tipo;
    }

    set frequencia(novaFrequencia) {
        this.#frequencia = novaFrequencia;
    }
    get frequencia (){
        return this.#frequencia
    }
    
    set capacidade(novaCapacidade) {
        this.#capacidade = novaCapacidade;
    }
    get capacidade (){
        return this.#capacidade
    } 
    
    imprimir() {
        let memoria1 = new Memoria();

        this.tipo = prompt("DIGITE TIPO DA SUA MEMORIA : EX. DD3 : ");
        this.#frequencia = prompt("DIGITE A FREQUENCIA DA MEMORIA QUE VOCÊ QUER: EX.1066 MHz. : ");
        this.#capacidade = prompt("DIGITE A CAPACIDADE QUE VOCÊ QUER: EX.16GB: ");
        console.log(`TIPO DA SUA MEMORIA: ${this.tipo}, COM UMA FREQUÊNCIA DE : ${this.#frequencia}, E A CAPACIDADE DE: ${this.#capacidade}`);
    }

    usarMemoria() {
            let memoriaemUso = Number(prompt(`DIGITE A QUANTIDADE DE MEMORIA DESEJA USAR `));
            if (capacidade > 0 && memoriaemUso <= this.#capacidade) {           
                this.#capacidade -= memoriaemUso;
                console.log(`A quantidade de memória usada é ${memoriaemUso}. Você ainda tem disponível ${this.#capacidade}.`);
            } else {
                console.log(`MEMORIA INFUFIENTE `);}


     liberarMemoria(capacidade)

        }} //FIMDACLASSE

        console.log("CADASTRO DE MEMORIA ");
        let memoria1 = new Memoria();
        memoria1.imprimir();
        let capacidadeUsada = memoria1.usarMemoria();
        console.log(`Memória utilizada: ${capacidadeUsada}.`);
    

