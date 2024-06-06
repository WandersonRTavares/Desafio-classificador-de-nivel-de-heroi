const prompt = require('prompt-sync')();
//O prompt-sync é uma biblioteca do Node.js que permite interagir com o usuário através do terminal 
//é um ambiente em tempo de execução open-source (código aberto) e multiplataforma que permite aos desenvolvedores criarem todo tipo de aplicativos e ferramentas do lado servidor (backend) em JavaScript.

let nomePersonagem = prompt("Infome o nome do Avatar! ");
let expPersonagem = parseInt(prompt("Informe a Experiencia do personagem! "));

let posicaoPersonagem;

if (expPersonagem <= 1000) {
    posicaoPersonagem = "Ferro";

} else if (expPersonagem >= 1001 && expPersonagem < 2000) {
    posicaoPersonagem = "Bronze";

} else if (expPersonagem >= 2001 && expPersonagem < 5000) {
    posicaoPersonagem = "Prata";

} else if (expPersonagem >= 5001 && expPersonagem < 7000) {
    posicaoPersonagem = "Ouro";

} else if (expPersonagem >= 7001 && expPersonagem < 8000) {
    posicaoPersonagem = "Platina";

} else if (expPersonagem >= 8001 && expPersonagem < 9000) {
    posicaoPersonagem = "Ascendente";

} else if (expPersonagem >= 9001 && expPersonagem < 10000) {
    posicaoPersonagem = "Imortal";

} else if (expPersonagem > 10000) {
    posicaoPersonagem = "Radiante";
}

console.log(`O heroi de nome ${nomePersonagem} esta no nivel de ${posicaoPersonagem} `);