console.log("Hello World");

// Basic 2:
// core types:
// number, string, boolean

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  let result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

let number1: number = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is ";
const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
