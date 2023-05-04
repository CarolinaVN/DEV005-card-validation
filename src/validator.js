
const validator = {
  isValid: function (credidCardNumber) {
    //invertir los digitos de tarjeta de credito  
    const cardNumberReverse = credidCardNumber.reverse()
    let suma = 0;
    // multiplicar los digitos en posicion par por 2
    for (let i = 1; i < cardNumberReverse.length; i = i + 2) {
      // console.log(cardNumberReverse[i])
      cardNumberReverse[i] = cardNumberReverse[i] * 2;
      // restar 9 a numeros mayores a 9
      if (cardNumberReverse[i] >= 10) {
        cardNumberReverse[i] = cardNumberReverse[i] - 9;
      }
    }
    // sumar todos los digitos de la tarjeta 
    for (let k = 0; k < cardNumberReverse.length; k++) {
      suma = cardNumberReverse[k] + suma;
    }
    // condicional para evitar campos vacios 
    if (cardNumberReverse.length === 0) {
      alert('Por favor digite el número de tarjeta')
      return false
    }
    // a la suma de los digitos dividirlos por 10 
    if ((suma % 10) === 0) {
      return true
    } else {
      return false
    }

  },
  //enmascarar los digitos de la tarjeta excepto los ultimos 
  //SLICE metodo que devuelve una copia del array sin afectar el original (inicio, fin)
  //REMPLACE metodo que reemplaza los digitos de la array 
  maskify: function (cardNumber) {
    let maskifyCard = cardNumber;
    maskifyCard = cardNumber.slice(0, -4).replace(/[a-z, 0-9]/g, '#').concat(cardNumber.slice(-4, cardNumber.length));
    return maskifyCard
  }
}
export default validator;
