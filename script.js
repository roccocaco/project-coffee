import { data } from "./dataCoffee.js";

const divResultados = document.getElementById('resultados');
const divValorTotal = document.getElementById('valorTotal');
let total = 0;

data.map((e, i) => divResultados.innerHTML += `
    <div>
        <p>${e.id}</p>
        <p>${e.nome}</p>
        <p>${e.preco}</p>
        <p>${e.tipo}</p>
        <button class="btn-adicionar" data-preco="${e.preco}">adicionar café</button>
    </div>
`);

const btnAdicionar = document.querySelectorAll(".btn-adicionar");

btnAdicionar.forEach((e) => {
    e.addEventListener("click", () => {
        const precoCafe = parseFloat(e.getAttribute("data-preco"));

        total += precoCafe;
        console.log(divValorTotal)
       divValorTotal.innerHTML = `
        ${total.toFixed(2)}
       `
    })
})

console.log(btnAdicionar);