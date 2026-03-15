function add (n1, n2) {
    return n1 + n2;
}

function subtract (n1, n2){
    return n1 - n2;
}


function multiply (n1, n2) {
    return n1 * n2;
}

function divide (n1, n2) {
    return n1 / n2;
}

let operator = "";
let num1 = 0;
let num2 = 0;

function operate(oper, n1, n2) {
    switch (oper){
        case "+":
            return add(n1,n2);
        case "-":
            return subtract(n1, n2);       
        case "x":
            return multiply(n1, n2); 
        case "/":
            return divide(n1, n2); 
    }
}

const buttonsNums = document.querySelectorAll(".btn-nums");
const buttonsOperators = document.querySelectorAll(".operator");
const screen = document.getElementById("screen");
const btnProcces = document.getElementById("process");
const btnClear = document.getElementById("clear");

buttonsNums.forEach(btn => {
    btn.addEventListener("click", function(e) {
        const value = e.target.textContent;
        screen.textContent += value;
    })
})

buttonsOperators.forEach(btn => {
    btn.addEventListener("click", function(e) {
        const value = e.target.textContent;
        if(operator !== ""){
            num2 = Number(screen.textContent);
            let result = operate(operator,num1,num2);
            num1 = result;
        }else{    
            num1 = Number(screen.textContent);
        }
        operator = value;
        screen.textContent = "";
    })
})

btnProcces.addEventListener("click", function(){
    num2 = Number(screen.textContent);
    let result = operate(operator,num1,num2);
    screen.textContent = result;
    num1 = result;
    operator = "";
})

btnClear.addEventListener("click", function(){
    screen.textContent = "";
    num1 = 0;
    num2 = 0;
    operator = "";
})
