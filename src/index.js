import validator from './validator.js';

//console.log(validator);
//codigo creado por laboratoria para validación//

export {validate};

function validate() {
  const cardnumber = document.getElementById("cardnumber");
  const result = document.getElementById("result");
  let message="";
  
  if (validator.isValid (cardnumber.value)) {
    cardnumber.value=validator.maskify(cardnumber.value); 
    message= "Tu número de tarjeta de credito es válido";
  }
  // Show success in div#result
  else {
    message="Tu número de tarjeta de credito no es válido"; 
  }
  // Show error message in div#result
  result.textContent=message;
}
document.getElementById("validar").addEventListener("click",validate);
