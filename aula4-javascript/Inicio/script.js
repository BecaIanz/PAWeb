// C# - int i = 5;
// Python i = 5
// JavaScript :
//É como no python que não é necessário dar o tipo da variável como string, int e float
let i1 = 5; //Escopo local - Escopo de Função - variavel local
var i2 = 5; //Escopo global - variavel global
const i3 = 15; // do C++ -> #define i3 15


//array

// let frutas = ["banana", "maca", "pera"];
// console.log(frutas[2])

// //objetoconst 
//     nome = "Rebeca";
//     const idade = "Em breve 18";
//     console.log("O nome é " + nome + " " + idade + " anos");

const nome = "Rebeca";
        const idade = "Em breve 18";
        console.log("O nome é " + nome + " " + idade + " anos");

        //array
        let frutas = ["banana", "maca", "pera", "amora"];
        let frutas2 = ["banana", 23, true];

        for(let i = 0; i < frutas.length; i++)
        {
            console.log("Eu gosto de " + frutas[i]);
        }

        //objeto

        const obj = {
            nome: "Helo",
            idade: 17,
            trabalho: "Bosch",
            familia: {
                pai: "Jorge",
                mae: "Vanessa"
            }
        }
        console.log(obj.familia.pai );

        //função tradicional

        function soma(x, y) {
            return x+y;
        }
        console.log(soma(5,8));

        //funcao anonima atribuida

        const somar = function (x, y) {
            return x+y;
        }
        console.log(somar(5,8));

        //arrow funcition

        const sub = (a,b) => a - b;
        console.log(sub(10,7))

