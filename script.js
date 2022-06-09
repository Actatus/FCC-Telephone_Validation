//Given input, validate telephone numbers.
//Number must include an area code.
//Number can include the +1 country code.

let userInput = document.querySelector('input');

function validateInput(input){
  if (!input){
    return false;
  }

  return checkLength(input);
}

function checkLength(input){
  let inputRegEx = input.match(/\d/g);
  if (inputRegEx !== null){
    let inputRegExJoin = inputRegEx.join('');
    if (inputRegExJoin.length == 11){
      return hasCountryCode(input);
      return false;
    } else if (inputRegExJoin.length == 10){
      noCountryCode(input);
      return false;
    }
    return false;
  }
}

function hasCountryCode(input){
 console.log("Has Country Code");
 if (input[0] != "1"){
   return false;
 }
 return syntaxCheck(input);
}

function noCountryCode(input){
  console.log("No Country Code");
  return syntaxCheck();
}

function syntaxCheck(input){
  /*Check sytax, if there's a ( match with ), no more than 2 "-"*/
  let dashCheck = input.match(/-/g) ?? 0;
  console.log(input + " ----- " + dashCheck);
  if (dashCheck.length > 2){
    console.log("too many dash " + input);
    return false;
  }
  return true;
}
module.exports = validateInput;
