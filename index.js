let currentNumber = document.querySelector(".calculadora-board-current-number")
let numbers = document.querySelectorAll(".calculadora-grid-item")
let previousNumber = document.querySelector(".calculadora-board-previous-number")
let operationSymbols = document.querySelectorAll(".calculadora-operation-symbol")
let resultBtn = document.querySelector(".result-button")
let result;
let currentOperationSymbol;
numbers.forEach(button => button.addEventListener("click", function(e) {
   if(result !== "") {
        currentNumber.innerHTML = ""
    }
    currentNumber.innerHTML = currentNumber.innerHTML + button.innerHTML
}
))
operationSymbols.forEach(button => button.addEventListener("click",function(e) {
        currentOperationSymbol = button.innerHTML
        currentNumber.innerHTML = currentNumber.innerHTML + button.innerHTML
        previousNumber.innerHTML = currentNumber.innerHTML
        currentNumber.innerHTML = ""
}  
));
resultBtn.addEventListener("click",function(){
        if((currentOperationSymbol === undefined) || (currentNumber.innerHTML === "")) {
                currentNumber.innerHTML = currentNumber.innerHTML
                previousNumber.innerHTML = previousNumber.innerHTML
        }
        else {
        result = operations[currentOperationSymbol](parseFloat(previousNumber.innerHTML),parseFloat(currentNumber.innerHTML))
        currentNumber.innerHTML = result
        previousNumber.innerHTML = ""
        }
  })
const operations = {
        "+" : (x,y) => x + y,
        "-" : (x,y) => x - y,
        "x" : (x,y) => x * y,
        "%" : (x) => x / 100,
        "÷" : (x,y) => x / y,
        "x²" : (x) => x * x,
        "√" : (x) => Math.sqrt(x)
}
