import validator from './validator.js';



//alert('Bienvenida al valrificador de tarjetas de crédito, utilizaremos el algoritmo de Lunh para realizar la validación');

//const card = document.getElementById ('card');
const cardNumber = document.getElementById('card-number');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
//const validCard = document.getElementById('valid-card');
//const invalidCard = document.getElementById('invalid-card');



//Funciones que interactuan con el DOM
function Valid() {
  const enteros = []
  //divide string en caracteres individuales
  const cardCharacter = cardNumber.value.split('');
  //console.log(cardCharacter);
  // convierte los string a enteros 
  for (let i = 0; i < cardCharacter.length; i++) {
    const numero = parseInt(cardCharacter[i])
    // el imput solo se recibe numeros
    if (isNaN(numero)) {
      result.innerHTML = 'Error al digitar el número de tarjeta';
    } else {
      enteros.push(numero)
    }

  }
  console.log(validator.isValid(enteros));
}

//console.log(validator.isValid(123))


//eventos del DOM
btn.addEventListener('click', Valid);




