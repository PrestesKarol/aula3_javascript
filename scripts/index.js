let numero = prompt("Olá, Padawan! Digite um número de sua escolha:");
numero = parseFloat(numero);
let soma = 0;

if (isNaN(numero)) {
    alert("Ops, você digitou uma letra em vez de um número!");
  } else 

for (let i = 1; i <= 5; i++) {
  soma += numero;
  console.log("Resultado da soma:", soma);
}


let texto = "";
let entrada;

while (entrada !== "Tchau") {
  entrada = prompt("Digite um texto ou a palavra 'Tchau' para sair:");
  texto += entrada + " ";
  console.log("Texto:", texto);
}

do {
quantidade = prompt("Olá novamente! Agora digite um número positivo até 100 que será a  quantidade de vezes que deseja exibir a mensagem 'Você é luz, é raio estrela e luar. Manhã de sol, meu iaiá, meu ioiô!':");
quantidade = parseInt(quantidade);

if (isNaN(quantidade) || quantidade <= 0 || quantidade > 100) {
alert ("Ops, digite um número válido e positivo até 100.")
}

} while ((isNaN(quantidade) || quantidade <= 0 || quantidade > 100));

let contador = 1;

do {
  console.log("Você é luz, é raio estrela e luar. Manhã de sol, meu iaiá, meu ioiô!");
  contador++;
} while (contador <= quantidade);
