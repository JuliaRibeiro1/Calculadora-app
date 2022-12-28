let currentNumber = document.querySelector(".calculadora-board-current-number")
let numbers = document.querySelectorAll(".calculadora-grid-item")
let previousNumber = document.querySelector(".calculadora-board-previous-number")
let operationSymbols = document.querySelectorAll(".calculadora-operation-symbol")
let resultBtn = document.querySelector(".result-button")
let deleteAllButton = document.querySelector(".deleteAll-button")
let deleteLastNumberBtn = document.querySelector(".delete-last-number-button")
let logButton = document.querySelector(".log-button")
let result;
let current;
let numbersArr = []
let symbolArr = []
let currentBoardSymbol = document.querySelector(".calculadora-board-symbol")
let currentOperationSymbol;
let previous;
let counter = 0;
let r;
let operationsLog;
let resultLog;
var logs = document.querySelector(".calculadora-log")
var logContainer = document.querySelector(".calculadora-log-container")

numbers.forEach(button => button.addEventListener("click", function(e) {
if((currentNumber.innerText == result)) {
        currentNumber.innerText = ""
}     
if(button.innerText == ".") {
        if(currentNumber.innerText == "") {
                currentNumber.innerText = "0"
        }
}
if(currentNumber.innerText > 1000000000000000) {
        currentNumber.innerText = currentNumber.innerText
}
        currentNumber.innerText = currentNumber.innerText + button.innerText
}
));

operationSymbols.forEach(button => button.addEventListener("click",function(e) {
        counter++
        currentOperationSymbol = button.innerText
        currentBoardSymbol.innerText = currentOperationSymbol
           if((currentNumber.innerText == "")&&(previousNumber.innerText == "")) {
                currentNumber.innerText = 0 
           }
           if(currentNumber.innerText !== "") {
                numbersArr.push(currentNumber.innerText)
                }
        previousNumber.innerText = numbersArr.at(-1) 
        symbolArr.push(currentOperationSymbol)


switch(currentBoardSymbol.innerText) {
        case "√":
        case "%":
        case "x²":
                r = operations[symbolArr.at(-1)](parseFloat(numbersArr.at(-1))) 
                previousNumber.innerText = r
                currentNumber.innerText = ""
                currentBoardSymbol.innerText = ""
                numbersArr.push(r)  
}

if(numbersArr.length > 1) {
        if(currentNumber.innerText !== "") {
                r = operations[symbolArr.at(-2)](parseFloat(numbersArr.at(-2)),parseFloat(numbersArr.at(-1))) 
                previousNumber.innerText = r
                numbersArr.push(r)  
                operationsLog = numbersArr.at(-3) + symbolArr.at(-2) + numbersArr.at(-2) + "="
                resultLog = r
                var newArr = operationsLog.split(r)
                var logElement = document.createElement("div");
                let resultLogElement = document.createElement("div");
                logs.appendChild(logElement)
                logs.appendChild(resultLogElement)
                
                logElement.className = "logElement"
                resultLogElement.className = "resultElement"
                logElement.textContent = operationsLog
                resultLogElement.textContent = resultLog
        }
}
currentNumber.innerText = ""

}))

logButton.addEventListener("mouseover",() => {
        logContainer.style.cssText = "display:block"
        alert("OI")
})
deleteLastNumberBtn.addEventListener("click",() => {
       let currentNumberArray = Array.from(currentNumber.innerText)
        let LastNumberPop = currentNumberArray.pop()
        currentNumber.innerText = parseFloat(currentNumberArray.join(""))
        if(currentNumberArray.length < 1) {
                currentNumber.innerText = ""
        }
})
deleteAllButton.addEventListener("click", () => {
        currentNumber.innerText = ""
        clean()
})
resultBtn.addEventListener("click",function(){
        if((currentOperationSymbol !== undefined) && (currentNumber.innerText !== "")) {
        result = operations[currentBoardSymbol.innerText](parseFloat(numbersArr.at(-1)),parseFloat(currentNumber.innerText))
        currentNumber.innerText = result
        clean()
        }
  })
function clean() {
        previousNumber.innerText = ""
        currentBoardSymbol.innerText = ""
        numbersArr = []
        symbolArr = []    
}
function numberWithSpaces(x) {
     /*   var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");*/
        function numberWithSpaces(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }
}
const operations = {
        "+" : (x,y) => x + y,
        "-" : (x,y) => x - y,
        "x" : (x,y) => x * y,
        "%" : (x) => x / 100,
        "÷" : (x,y) => x / y,
        "x²" : (x) => x * x,
        "√" : (x) => Math.sqrt(x),
}