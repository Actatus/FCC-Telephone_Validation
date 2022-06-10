//Given input, validate telephone numbers.
//Number must include an area code.
//Number can include the +1 country code.

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
  let inputRegEx = input.match(/\d/g).join('');

  if (dashCheck.length > 2){
    return false;
  }
  if (paranthesesCheck !== 0 && paranthesesCheck.length !== 2){
    return false;
  }
  if (paranthesesCheck.length == 2){
    if (inputRegEx.length == 10){
      if (input[0] == "(" && input[4] == ")"){
        return true;
      } else {
        return false;
      }
    } else if (inputRegEx.length == 11){
      let inputMinusWhitespace = input.match(/\S/g);
      if (inputMinusWhitespace[1] == "(" && inputMinusWhitespace[5] == ")"){
        return true;
      } else {
        return false;
      }
    } else {
      return "Error, incorrect value";
    }
  }
  return true;
}
module.exports = validateInput;
