//Exercício 01
let apartamento = {
    quartos: 2,
    tipo: 'Apartamento',
    endereco: 'Avenida Principal, 456 - Centro',
    andar: 7
}

console.log(`Apartamento com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}° da ${apartamento.endereco}.`)

//Exercício 02
let produtoEmbalado = {
    nome: 'Laptop HP',
    categoria: 'Eletrônicos',
    peso: 1.5,
    preco: 3500
}

console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso} kg, está à venda por ${produtoEmbalado.preco.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}.`)

//Exercício 03
class Imovel {
    constructor(quartos, tipo, endereco){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereco = endereco;
    }
    exibirInformacoes(){
        return `${this.tipo} com ${this.quartos} quartos, localizado(a) na ${this.endereco}.`;
    }
}

let casa = new Imovel(3, 'Sobrado', 'Rua das dores, bairro programador, n°1010');
console.log(casa.exibirInformacoes());
let ap = new Imovel(2, 'Apartamento', 'Rua da depressão, bairro da solidão, n°666');
console.log(ap.exibirInformacoes())

//Exercício 04
