const validator = {
  isValid: function (credidCardNumber) {
    let credidCardNumberReverse = credidCardNumber.reverse()
    return credidCardNumberReverse
  },


  maskify: function (credidCardNumber) {
    return 'String'
  }

};

export default validator;
