console.log('teste')
let frutas = [ 
    { titulo: "morango", classificacao: "vermelho" },
     {titulo: "melancia", classificacao: "vermelho"},
     {titulo: "kiwi", classificacao: "verde" },
     {titulo: "banana", classificacao: "amarelo" },
     {titulo: "laranja", classificacao: "laranja"},
     {titulo: "mexirica", classificacao: "laranja"},
     {titulo: "carambola", classificacao: "amarelo"},
]
let i = 0;

function cor(cor) {
    for (let i of frutas) {
        if ( cor == i.classificacao ){
        console.log("A sua fruta é " + i.titulo )
        }
    }
}

cor();