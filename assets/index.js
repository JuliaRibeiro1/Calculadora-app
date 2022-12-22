let currentNumber = document.querySelector(".calculadora-board-current-number")
let numbers = document.querySelectorAll(".calculadora-grid-item")
let previousNumber = document.querySelector(".calculadora-board-previous-number")
let operationSymbols = document.querySelectorAll(".calculadora-operation-symbol")
let resultBtn = document.querySelector(".result-button")
let deleteAllButton = document.querySelector(".deleteAll-button")
let deleteLastNumberBtn = document.querySelector(".delete-last-number-button")
let result;
let current;
let numbersArr = []
let symbolArr = []
let currentBoardSymbol = document.querySelector(".calculadora-board-symbol")
let currentOperationSymbol;
let previous;
let counter = 0;
let r;

numbers.forEach(button => button.addEventListener("click", function(e) {
        
if(button.innerText == ".") {
        if(currentNumber.innerText == "") {
                currentNumber.innerText = "0"
        }
}
if(button.innerText == "%") {

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

if((currentBoardSymbol.innerText == "x²")||(currentBoardSymbol.innerText == "√")) {
        r = operations[symbolArr.at(-1)](parseFloat(numbersArr.at(-1))) 
        previousNumber.innerText = r
        currentNumber.innerText = ""
        numbersArr.push(r)   
}
if((currentNumber.innerText == "%")) {
        r = operations[symbolArr.at(-1)](parseFloat(numbersArr.at(-1)))
        previousNumber.innerText = r
        currentBoardSymbol.innerText = ""
        numbersArr.push(r)  
}
if(numbersArr.length > 1) {
                if(currentNumber.innerText !== "") {
                       r = operations[symbolArr.at(-2)](parseFloat(numbersArr.at(-2)),parseFloat(numbersArr.at(-1))) 
                       previousNumber.innerText = r
                       numbersArr.push(r)                 
        }
        }
currentNumber.innerText = ""
}
))
deleteLastNumberBtn.addEventListener("click",() => {
        let deleteLastNumberArray = Array.from(currentNumber.innerText).shift()
        currentNumber.innerText = deleteLastNumberArray
})
deleteAllButton.addEventListener("click", () => {
        currentNumber.innerText = ""
        previousNumber.innerText = ""
        currentBoardSymbol.innerText = ""
        numbersArr = []
        symbolArr = []
})
resultBtn.addEventListener("click",function(){
        if((currentOperationSymbol !== undefined) || (currentNumber.innerText !== "")) {
        result = operations[currentBoardSymbol.innerText](parseFloat(numbersArr.at(-1)),parseFloat(currentNumber.innerText))
        currentNumber.innerText = result
        previousNumber.innerText = ""
        currentBoardSymbol.innerText = ""
        }
  })
const operations = {
        "+" : (x,y) => x + y,
        "-" : (x,y) => x - y,
        "x" : (x,y) => x * y,
        "%" : (x) => x / 100,
        "÷" : (x,y) => x / y,
        "x²" : (x) => x * x,
        "√" : (x) => Math.sqrt(x),
}