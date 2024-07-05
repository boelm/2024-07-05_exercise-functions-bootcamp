/** Övning 1 */
console.log(`%cÖvning 1`, "font-weight:bold");
let string = "hej";
// length = lengthOfString1(string) => {
//     return string.length;
//   };
//   () => {
//     statements
//   }
// console.log(length);

console.log(`${string} har längden ${lengthOfString(string)}`);

function lengthOfString(string) {
  return string.length;
}
/** Övning 2 */
console.log(`%cÖvning 2`, "font-weight:bold");
// console.log(year('2019-10-14'));
string = "2019-10-14";
console.log(`${string} har året ${returnYear(string)}`);
function returnYear(string) {
  return string.substring(0, 4);
}

/** Övning 3 */
console.log(`%cÖvning 3 - Miniräknare`, "font-weight:bold");
/**
 * Skriv en funktion som tar tre parametrar.
 * De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '*'.
 * Utför beräkningen och returnera summan och skriv ut.
 * Det ska enbart gå att skicka med siffror (förutom operanden som är en sträng då)
 * och varje operation ska vara sin egen funktion.
 * Tips! Här kan typeof vara bra att använda
 * */

/**
 * 1. Ta in två tal och en sträng som säger vad vi ska göra med dessa tal
 * 2. Kolla att de två första talen är siffror
 * 3. Kolla vilken operations som ska göras (addition, subtraktion etc)
 * 4. Anropa rätt funktion beroende på vad som ska göras
 * 4. I den funktionen ska vi utföra operationen och returnera svaret
 * 5. Skriv ut summan
 */

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
function notAvalidOperator() {
  return "Räknesättet finns inte";
}

function calculate(firstNumber, secondNumber, operation) {
  switch (operation) {
    case "+":
      return add(firstNumber, secondNumber);
      break;
    case "-":
      return subtract(firstNumber, secondNumber);
      break;
    case "*":
      return multiply(firstNumber, secondNumber);
      break;
    case "/":
      return divide(firstNumber, secondNumber);
      break;
    default:
      return notAvalidOperator();
  }
}

//Test of code. Kanske lite nördigt...inte så generellt eller användarvänlgt.
let outputString = "60.5Räknesättet finns inteRäknesättet finns inte";
let testString = (
calculate(5, 10, "+")+
calculate(5, 10, "-")+
calculate(5, 10, "/")+
calculate(5, 10, "*")+
calculate("hej", 10)+
calculate(10, "Hej")
);
if (testString === outputString){
    console.log("Test OK");
}else{
    console.log("Test failed :-(");
    console.log(`${testString} NOT ${outputString}`);
}

let doCalulations = true;
getInput(doCalulations);
function getInput() {
  let one = parseInt(window.prompt("Ange ett tal"));
  let two = parseInt(window.prompt("Ange ett tal till"));
  let operation = window.prompt("Ange ett räknesätt");

  console.log(one);
  console.log(two);
  console.log(operation);
  calculate(one, two, operation);
  console.log(
    `${one} and ${two} with operator ${operation} gives ${calculate(
      one,
      two,
      operation
    )}`
  );
  doCalulations = confirm("One more calculation?");
}
