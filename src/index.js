import validator from './validator.js';

const cardNumber = document.getElementById('card-number');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
//const cardType = document.getElementById('card-type');
//const boxtwo = document.getElementById('two');
const boxthree = document.getElementById('three');

//Funciones que interactuan con el DOM
function Valid() {
  const enteros = []
  //divide string en caracteres individuales
  const cardCharacter = cardNumber.value.split('');
  //console.log(cardCharacter);
  // convierte los string a enteros 
  for (let i = 0; i < cardCharacter.length; i++) {
    // paseInt devuelve numeros enteros 
    const numero = parseInt(cardCharacter[i])
    // el imput solo se recibe numeros y envia mensaje de error 

    if (isNaN(numero)) {
      result.innerHTML = 'Error al digitar el número de tarjeta'
    } else {
      enteros.push(numero)
    }
  }

  
  const resultadoFinal = validator.isValid(enteros);
  const maskifyFinal = validator.maskify(cardNumber.value);
  const card = document.getElementById('card');
  
  if (resultadoFinal  === true) {
    // console.log(('debería caer con true'));
    card.innerHTML = ('Su tarjeta de crédito número ' + (maskifyFinal) + ' es valida')
  } else {
    card.innerHTML = ('Su tarjeta de credito número ' + (maskifyFinal) + ' es invalida')
  }

  /*if (enteros[0] === 4) {
    cardType.innerHTML = 'Visa';
  } else if (enteros[0] === 5) {
    cardType.innerHTML = 'MasterCard';
  } else {
    cardType.innerHTML = 'Desconocida';
  }*/

  //console.log(validator.maskify(cardNumber.value));

  // despliegue de boxthree
  boxthree.style.display = 'block'
}

//eventos del DOM
btn.addEventListener('click', Valid)










