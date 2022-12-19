let currentNumber = document.querySelector(".calculadora-board-current-number")
let numbers = document.querySelectorAll(".calculadora-grid-item")
let previousNumber = document.querySelector(".calculadora-board-previous-number")
let operationSymbols = document.querySelectorAll(".calculadora-operation-symbol")
let resultBtn = document.querySelector(".result-button")
let deleteAllButton = document.querySelector(".deleteAll-button")
let result;
let current;
let numbersArr = []
let symbolArr = []
let currentBoardSymbol = document.querySelector(".calculadora-board-symbol")
let currentOperationSymbol;
let i = 0;
let a = 0;
let previous;
let counter = 0;
let b = a + 1;
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

//let counter = 0;
let c = 0
let d = 1

operationSymbols.forEach(button => button.addEventListener("click",function(e) {
        counter++
        currentOperationSymbol = button.innerText
        currentBoardSymbol.innerText = currentOperationSymbol
        if(currentNumber.innerText !== "") {
        numbersArr.push(currentNumber.innerText)
        }
        previousNumber.innerText = currentNumber.innerHTML
        currentNumber.innerText = currentNumber.innerText
        symbolArr.push(currentOperationSymbol)
     
if(numbersArr.length > 1) {
if(numbersArr.at(-1) != numbersArr.at(-2)) {
        if(currentNumber.innerText !== "")
               r = operations[symbolArr.at(-2)](parseFloat(numbersArr.at(-2)),parseFloat(numbersArr.at(-1))) 
               previousNumber.innerText = r
               currentNumber.innerText = r
               numbersArr.push(r)    
                      
}
 
if((currentBoardSymbol.innerText == "x²")||(currentBoardSymbol.innerText == "√")) {
        r = operations[symbolArr.at(-1)](parseFloat(numbersArr.at(-1))) 
        previousNumber.innerText = r
        currentNumber.innerText = r 
        currentBoardSymbol.innerText = ""
        numbersArr.push(r)   
}
if((currentNumber.innerText == "%")) {
        console.log(operations[symbolArr.at(-1)])
        console.log(numbersArr.at(-1))
        r = operations[symbolArr.at(-1)](parseFloat(numbersArr.at(-1)))
        previousNumber.innerText = r
        currentNumber.innerText = r
        currentBoardSymbol.innerText = ""
        numbersArr.push(r)  
}
}
currentNumber.innerText = ""
}

))
deleteAllButton.addEventListener("click", () => {
        currentNumber.innerText = "0"
        previousNumber.innerText = "0"
        currentBoardSymbol.innerText = ""
})
resultBtn.addEventListener("click",function(){
        if((currentOperationSymbol !== undefined) || (currentNumber.innerText !== "")) {
        result = operations[currentOperationSymbol](parseFloat(previousNumber.innerText),parseFloat(currentNumber.innerText))
        currentNumber.innerText = result
        previousNumber.innerText = ""

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