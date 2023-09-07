function metodoMap(){
    const livros = ["HTML5",  "CSS", "JavaScript"];
    let livro1 = livros.map((livros) => "livro: " + livros);
    let livro2 = livros.map((livros, i) => "livro " + i + ": " + livros);
    console.log(livro1);
    console.log(livro2);
}

function exercicioAulaMap(){

    const produtos = [{
        nome: "Sapato",
        valor: 20.0
    },

    {
        nome: "Havaianas",
        valor: 15.0

    },

    {
        nome: "Meia",
        valor: 5.0
    }
]

let produtos1 = produtos.map((produtos, i) => {return 
"produto: " + i + " " + produtos.nome + "\n" +
"valor: " + (produtos.valor * 1.5)})

console.log(produtos1)

}