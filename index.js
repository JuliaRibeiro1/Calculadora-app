let currentNumber = document.querySelector(".calculadora-board-current-number")
let numbers = document.querySelectorAll(".calculadora-grid-item")
let previousNumber = document.querySelector(".calculadora-board-previous-number")
let operationSymbols = document.querySelectorAll(".calculadora-operation-symbol")
let resultBtn = document.querySelector(".result-button")
let result;
let current;
let numbersArr = []
let symbolArr = []
let currentBoardSymbol = document.querySelector(".calculadora-board-symbol")
let currentOperationSymbol;
let i = 0;
let a = 0;
let previous;
let b = a + 1;
let r;
numbers.forEach(button => button.addEventListener("click", function(e) {      
if(currentNumber.innerText == previousNumber.innerText) {
       result = ""
      // alert("OI")
       currentNumber.innerText = ""
     ///  currentNumber.innerText = "" + button.innerText
      
      // // currentNumber.innerText = button.innerText
        
       // currentNumber.innerText = currentNumber.innerText + button.innerText
    }

//else {
        currentNumber.innerText = currentNumber.innerText + button.innerText
 // }
}  
));

let counter = 0;
let c = 0
let d = 1

operationSymbols.forEach(button => button.addEventListener("click",function(e) {
        counter++
        currentOperationSymbol = button.innerText
        currentBoardSymbol.innerText = currentOperationSymbol
      // if(currentNumber.innerText != "") {
       // 
        numbersArr.push(currentNumber.innerText)
       //}
        previousNumber.innerText = currentNumber.innerHTML
        currentNumber.innerText = currentNumber.innerText
        symbolArr.push(currentOperationSymbol)
       // currentNumber.innerText = ""
        a ++
if(numbersArr.length > 1) {
if(numbersArr.at(-1) != numbersArr.at(-2)) {
//if(numbersArr.innerText !== "") {      
        //if(currentNumber.innerText !== "") {
               r = operations[symbolArr.at(-2)](parseFloat(numbersArr.at(-2)),parseFloat(numbersArr.at(-1))) 
               previousNumber.innerText = r
              // currentNumber.innerText = ""
               currentNumber.innerText = r
               numbersArr.push(r)
               a++
                
//}
}
//}
}
c++
}

))
resultBtn.addEventListener("click",function(){
        if((currentOperationSymbol === undefined) || (currentNumber.innerText === "")) {
                currentNumber.innerText = currentNumber.innerText
                previousNumber.innerText = previousNumber.innerText
        }
        else {
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
        "√" : (x) => Math.sqrt(x)
}