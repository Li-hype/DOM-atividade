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