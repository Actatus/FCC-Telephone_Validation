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
    } else if (inputRegExJoin.length == 10){
      return syntaxCheck(input);
    }
    return false;
  }
}

function hasCountryCode(input){
 if (input[0] != "1"){
   return false;
 }
 return syntaxCheck(input);
}

function noCountryCode(input){
  return syntaxCheck(input);
}

function syntaxCheck(input){
  /*Check sytax, if there's a ( match with ), no more than 2 "-"*/
  let dashCheck = input.match(/-/g) ?? 0;
  let paranthesesCheck = input.match(/[()]/g) ?? 0;
  if (dashCheck.length > 2){
    console.log("dashCheck " + input);
    return false;
  }
  if (paranthesesCheck !== 0 && paranthesesCheck.length !== 2){
    console.log("paranthesesCheck " + input + " " + paranthesesCheck);
    console.log(input + " " + paranthesesCheck.length);
    return false;
  }
  return true;
}
module.exports = validateInput;
