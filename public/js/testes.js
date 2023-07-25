const nome = "Adrian";
let nome2 = "";
let pessoaDefault = {
    nome: "Adrian da Cruz",
    idade: "17",
    profissao: "Programador"
}

let nomes = ["Marcelo Eltz","Maria Silva","Pedro Silva"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Adrian da Cruz",
        idade: "17",
        profissao: "Programador"
    },
    {
        nome: "Andrei William",
        idade: "28",
        profissao: "Consultor"
    }
];

function alteraNome() {
    nome2 = "Adrian Leonardo";
    console.log("Valor alterado na função:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado na função recebendo um valor:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Profissão:");
    console.log(pessoa.profissao);
}

function addPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("----------------Imprimir Pessoas---------------");
    pessoas.forEach((item => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Profissão:");
        console.log(item.profissao);
    }))
}

imprimirPessoas();

addPessoa({
    nome: "Sonia Emiliana",
    idade: "48",
    profissao: "Confeiteira"
});

imprimirPessoas();

//imprimirPessoa(pessoaDefault);

/*imprimirPessoa({
    nome: "Andrei William da Cruz",
    idade: "28",
    profissao: "Consultor"
})*/

//alterarNome();
//recebeEalteraNome("Andrei William");
//recebeEalteraNome('Sonia Emiliana');