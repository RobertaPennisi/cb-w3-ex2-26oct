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

let operationChoice = prompt("Inserisci operazione.\nScegli tra: \nsomma || + \nsottrazione || - \nmoltiplicazione || * \ndivisione || / \npotenza || ** \nradice");
let numbersChoiche = prompt("Inserisci numeri: ");
const numbers = numbersChoiche.split(",");
const parsedNumbers = [];

for (x of numbers) {
  parsedNumbers.push(parseInt(x));
}




switch (parsedNumbers.length) {
    case 1 :
        switch (operationChoice) {
            case "radice":
                console.log(Math.sqrt(...parsedNumbers))
                break;
        
            default:
                console.log(...parsedNumbers)
                break;
        }
        break;

    default:
         switch (operationChoice) {
      case "somma" :
      case "+" :
        Calculator(sum, parsedNumbers);
          break;
       
      case "moltiplicazione" :
      case "*" :
        Calculator(mult, parsedNumbers);
          break;

      case "sottrazione" :
      case "-" :
        Calculator(subtr, parsedNumbers);
          break;

      case "divisione" :
      case "/" :
        Calculator(divide, parsedNumbers);
          break;

      case "potenza" :
      case "**" :
        Calculator(elevate, parsedNumbers);
          break;

      default:
        alert("valori non validi")
          break;
  }
        break;
}