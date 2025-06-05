import readline from "readline-sync";

//Exercício 01
let dia = Number(readline.question("Informe o dia da semana: "))
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-Feira");
        break;
    case 3:
        console.log("Terça-Feira");
        break;
    case 4:
        console.log("Quarta-Feira");
        break;
    case 5:
        console.log("Quinta-Feira");
        break;
    case 6:
        console.log("Sexta-Feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Valor inválido!")
}

// Exercício 02
let mes = Number(readline.question("Informe o número do mês: "))
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Valor inválido!")
}

//Exercício 03
let x = readline.questionInt("Informe o primeiro valor: ")
let y = readline.questionInt("Informe o segundo valor: ")
let op = readline.questionInt("Escolha a opção: \n[1] Soma \n[2] Subtração \n[3] Multiplicação \n[4] Divisão\nInforme a opção desejada: ")
switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x + y}`);
        break;
    case 1:
        console.log(`${x} - ${y} = ${x - y}`);
        break;
    case 1:
        console.log(`${x} * ${y} = ${x * y}`);
        break;
    case 1:
        console.log(`${x} / ${y} = ${x / y}`);
        break;
    default:
        console.log('Opção inválida!')
        break;
}

// Exercício 04
let salario = readline.questionInt("Digite seu salário atual: ")
let categoria = readline.question("Selecione a categoria: ").toUpperCase();
switch (categoria) {
    case "A":
        console.log(`${salario} + 5% = ${(salario * 1.05).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
        break;
    case "B":
        console.log(`${salario} + 10% = ${(salario * 1.10).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
        break;
    case "C":
        console.log(`${salario} + 15% = ${(salario * 1.15).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
        break;
    case "D":
        console.log(`${salario} + 20% = ${(salario * 1.20).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
        break;
    default:
        console.log('Opção inválida!')
        break;
}