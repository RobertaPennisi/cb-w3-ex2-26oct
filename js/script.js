// Calculator ex.

const sum = (numOne, numTwo) => numOne + numTwo;
const mult = (numOne, numTwo) => numOne * numTwo;
const subtr = (numOne, numTwo) => numOne - numTwo;
const divide = (numOne, numTwo) => numOne / numTwo;
const elevate = (numOne, numTwo) => numOne ** numTwo;


function Calculator(operation, numbers) {
    let totOperation = 0;
    totOperation = operation(...numbers);
    console.log(totOperation)

    return totOperation;
}

let operationChoice = prompt("Inserisci operazione: ");
let numbersChoiche = prompt("Inserisci numeri: ");
const numbers = numbersChoiche.split(",");
const parsedNumbers = [];

for (x of numbers) {
  parsedNumbers.push(parseInt(x));
}

/*if (operationChoice === "somma") {
  Calculator(sum, parsedNumbers);
}
if (operationChoiche === "moltiplicazione") {
  Calculator(mult, parsedNumbers);  
}
if (operationChoice === "sottrazione" || operationChoice === "-") {
    Calculator(subtr, parsedNumbers);
}
if (operationChoiche === "divisione" || operationChoice === "/") {
    Calculator(divide, parsedNumbers)  
}
if (operationChoiche === "potenza" || operationChoice === "**") {
    Calculator(elevate, parsedNumbers);  
  }*/

 switch (operationChoice) {
      case "somma" || "+" :
        Calculator(sum, parsedNumbers);
          break;
      case "moltiplicazione" || "*" :
        Calculator(mult, parsedNumbers);
          break;
      case "sottrazione" || "-" :
        Calculator(subtr, parsedNumbers);
          break;
      case "divisione" || "/" :
        Calculator(divide, parsedNumbers);
          break;
      case "potenza" || "**" :
        Calculator(elevate, parsedNumbers);
          break;
      default:
        alert("valori non validi")
          break;
  }
  
