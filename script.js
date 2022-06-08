//Given input, validate telephone numbers.
//Number must include an area code.
//Number can include the +1 country code.

let userInput = document.querySelector('input');

function validateInput(input){
  if (!input){
    return false;
  }

  // let inputRegEx = input.match(/\d/g);
  // if (inputRegEx !== null){
  //   let inputRegExJoin = input.match(/\d/g).join('');
  //   if (inputRegExJoin.length < 10 || inputRegExJoin.length> 11){
  //     return false;
  //   } else {
  //     if (inputRegExJoin.length == 11 && inputRegExJoin[0]!= 1){
  //       return false;
  //     }
  //     return true;
  //   }
  //

  
  return false;
}


module.exports = validateInput;
