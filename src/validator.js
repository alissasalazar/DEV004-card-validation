const validator = {
  maskify,
  isValid,
};
//funcion que valida,si el numero de tarjeta es correcto o no//
function isValid(cardnumber) {
  cardnumber = cardnumber.split(" ").join("");
  if (parseInt(cardnumber) <= 0 || cardnumber.length > 16) {
    return false;
  }
  //los string se convierten en arrays//
  const carray = new Array();
  for (let i = 0; i < cardnumber.length; i++) {
    carray[carray.length] = cardnumber.charCodeAt(i) - 48;
  }
  //revierte los elementos del array//
  carray.reverse();
  let count = 0;
  //no encuentro algun cambio aqui//
  for (let x = 0; x < carray.length; x++) {
    let actualCount = carray[x];
    if ((x + 1) % 2 === 0) {
      if ((actualCount *= 2) > 9) {
        actualCount -= 9;
      }
    }
    count += actualCount;
  }
  return count % 10 === 0;
}

//funcion para que solo se visualicen los ultimos digitos//
function maskify(cardnumber) {
  const size2 = cardnumber.toString(); //sirve para devolver el input como texto//
  let newcardarnumber = "";
  for (let i = 0; i < size2.length; i++) {
    if (i > size2.length - 5) {
      newcardarnumber = newcardarnumber + cardnumber[i];
    } else {
      newcardarnumber = newcardarnumber + "#";
    }
  }
  return newcardarnumber;
}

export default validator;
