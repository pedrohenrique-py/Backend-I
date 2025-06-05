import readline from "readline-sync";

//Exercício 01
let num = readline.questionInt('Informe um número: ');
while (num <= 10) {
    if (num % 2 == 0) {
        continue;
    }
    console.log(num)
}