let titulo = document.getElementById("titulo")
console.log(titulo);

let esporte = document.getElementsByClassName("esp")
console.log(esporte[0].textContent);

let esporte1 = document.getElementsByClassName("esp")
console.log(esporte[1].textContent);

let esporte2 = document.getElementsByClassName("esp")
console.log(esporte[2].textContent);

let esporte3 = document.getElementsByClassName("esp")
console.log(esporte[3].textContent);

let tituloQS = document.querySelector("#titulo");
console.log("Exibindo com Query Selector" + tituloQS.textContent);

let esportesQS = document.querySelector(".esp");
console.log("Exibindo com Query Selector" + esportesQS[0]);


let esportesQS1 = document.querySelector(".esp");
console.log("Exibindo com Query Selector" + esportesQS[1]);

let esportesQS2 = document.querySelector(".esp");
console.log("Exibindo com Query Selector" + esportesQS[2]);

let esportesQS3 = document.querySelector(".esp");
console.log("Exibindo com Query Selector" + esportesQS[3]);

titulo.innerText = "Novo Título para o nosso H1";
titulo.innerHTML = "<span style='color:rgb(37, 37, 189)'> MEUS ESPORTES FAVORITOS </span>";

/* Pegamos a nossa UL*/
let lista = document.getElementById("lista-esporte");


let novoLi = document.createElement("li"); 
novoLi.innerText = "Natação";
novoLi.style.color = "rgb(37, 37, 189)";
novoLi.style.fontWeight = "bold";

let novoLi1 = document.createElement("li");
novoLi1.innerText = "Hipismo";
novoLi1.style.color = "rgb(37, 37, 189)";
novoLi1.style.fontWeight = "bold";


//Adicionando o novo parágrafo ao body
lista.appendChild(novoLi);
lista.appendChild(novoLi1);


