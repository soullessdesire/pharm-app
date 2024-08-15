function luhnCheck(cardNumber) {
  let sum = 0;
  let shouldDouble = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i));

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

function validateCardNumber(cardNumber) {
  const isNumeric = /^\d{16}$/.test(cardNumber);
  if (!isNumeric) {
    return false;
  }
  return luhnCheck(cardNumber);
}
export default validateCardNumber;
