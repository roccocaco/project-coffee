// Importa o array de dados de café do arquivo "dataCoffee.js"
import { data } from "./dataCoffee.js";

// Obtém o elemento com o ID 'resultados' onde os itens de café serão exibidos
const divResultados = document.getElementById('resultados');

// Obtém o elemento com o ID 'valorTotal' onde o valor total será exibido
const divValorTotal = document.getElementById('valorTotal');

// Inicializa a variável 'total' para armazenar o valor total dos cafés adicionados
let total = 0;

// Mapeia os dados de café e adiciona um bloco HTML para cada item na div 'resultados'
data.map((e, i) => divResultados.innerHTML += 
    `<div>
        <p>${e.id}</p>
        <p>${e.nome}</p>
        <p>${e.tipo}</p>
        <p>${e.preco}</p>
        <button class="btn-adicionar" data-preco="${e.preco}">buy it</button>
    </div>`
);

/* Seleciona todos os botões com a classe 'btn-adicionar' */
const btnAdicionar = document.querySelectorAll(".btn-adicionar");

/* Adiciona um ouvinte de evento para cada botão */
btnAdicionar.forEach((e) => {
    e.addEventListener("click", () => {
        /* Obtém o preço do café a partir do atributo data-preco do botão clicado */
        const precoCafe = parseFloat(e.getAttribute("data-preco"));

        /* Adiciona o preço do café ao total */
        total += precoCafe;

        /* Atualiza o conteúdo da div 'valorTotal' com o valor total formatado com duas casas decimais */
        divValorTotal.innerHTML = `${total.toFixed(2)}`;
    });
});

/* Exibe a lista de botões no console para depuração */
console.log(btnAdicionar);
