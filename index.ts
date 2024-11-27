// let mensagem = "Boa noite!"
// mensagem = 123 // erro de compilação

// // union types
// let id: string | number;
// id = "1";
// id = 1;

// arrays
// let frutas: string[] = ["Maça", "Laranja", "Abacaxi"]
// let nomes: Array<string> = ["Bruno", "Tiago", "Monica"]
// let misto: (string | number)[] = ["Bruno", 2, "Clamed"]
// let misto2: Array<string | number> = ["Bruno", 2, "Clamed"]

// // tuplas
// let aluno: [string, number] = ["Ana", 25];

// console.log(aluno)
// aluno[0] = "Carla";
// console.log(aluno)

// objetos simples
const usuario: {
    nome: string,
    idade: number,
    senha: string,
    email: string,
    ativo: boolean
} = {
    nome: "Bruno",
    idade: 25,
    senha: "123465",
    email: "email@email.com",
    ativo: true
}