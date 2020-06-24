/*********************************************
 * YOUR CODE HERE!                           *
 ********************************************/
const calculate = require('./calculate-back-end.js')
//grab userInput
const userInput = getInput(0) + getInput(1) + getInput(2) + getInput(3);

let number1 = getInput(0)
let number2 = getInput(2)
let operand = getInput(1)
//const result = calculate(number1, number2, operand)
//console.log (result);

//***### Stretch Goals
if(getInput(3)!== undefined){
const number1 = getInput(0)
const number2 = getInput(3)
const operand = getInput(1)+ ' ' + getInput(2)  
const result = calculate(number1, number2, operand)
console.log (result);
} else {
  const number1 = getInput(0)
  const number2 = getInput(2)
  const operand = getInput(1)
  const result = calculate(number1, number2, operand)
  console.log (result);
}




// // /pass in calculate Linh made
// function ( num1, num2, operation)
//   if(operation === isAddition){return num1 + num2}
//   if(operation === isSubtraction){return num1 - num2}
//   else {return `Sorry, that's not a mathematical operation!`
// }



// let result = match('5',' 5', '+')
// console.log(result) 

/******************************************
 * OUR CODE BELOW--DON'T TOUCH!           *
 *****************************************/

function getInput(i) {
  return process.argv[i + 2];
}
