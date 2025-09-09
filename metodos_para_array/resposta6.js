const promptSync = require('prompt-sync');
const prompt = promptSync();

const senhas = 
[
    "senha123",
    "Hscgcwa65Z!UM#",
    "12345678",
    "visitante",
    "SX%W0DU5Me%ga",
    "afQMjmZO",
    "lmshbpuwbt",
    "xzoydkbnhv",
    "!BM67ARzQhq",
    "OcpYWAqQ",
    "zRGho8#wf2U1",
    "pDUbegaO",
    "jQaPNmC5",
    "migooafhxx",
    "0l2g@bT5PNgv"
  ]

  // Exemplo de caracteres especiais
  const caractererespecial = "!@#$%";
  console.log(senhas);
  for (let i = 0; i < senhas.length; i++) {
    let teste = senhas[i].split('');
    let temespecial = false;
    let temmaiuscula = false;
    let temnumero = false;
    for (let j = 0; j < teste.length; j++) {
      if (caractererespecial.includes(teste[j])) {
        temespecial = true;
      }
      if (teste[j] >= 'A' && teste[j] <= 'Z') {
        temmaiuscula = true;
      }
      if (teste[j] >= '0' && teste[j] <= '9') {
        temnumero = true;
      }
    }

    console.log(`Senha: ${senhas[i]}, Especial: ${temespecial}, Maiúscula: ${temmaiuscula}, Número: ${temnumero}`);
  }