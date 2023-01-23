// const animais = document.getElementById('animais');
// console.log(animais);

// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection[1]);

// const primeiraLi = document.querySelector('li');
// console.log(primeiraLi);

const imagemAni = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagemAni);

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

const animaisDesc = document.querySelector('.descricaoAnimais h2');
console.log(animaisDesc);

const ultimoP = document.getElementsByTagName('p');
console.log(ultimoP[23]);

// FroeEach e arrow function
let i = 0;
const imagens = document.querySelectorAll('img');
imagens.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// mostre no console cada parágrafo do site

const paragrafo = document.querySelectorAll('p');

paragrafo.forEach((item) => {
  console.log(item);
});
// mostre o texto dos parágrafos
paragrafo.forEach((item) => {
  console.log(item.innerText);
});


