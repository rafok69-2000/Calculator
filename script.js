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
            break;
        case "-":
            return subtract(n1, n2);
            break;
        case "x":
            return multiply(n1, n2);
            break;
        case "/":
            return divide(n1, n2);
            break;
    }
}

const buttonsNums = document.querySelectorAll(".btn-nums");
const buttonsOperators = document.querySelectorAll(".operator");
const screen = document.getElementById("screen");
const btnProcces = document.getElementById("process")

buttonsNums.forEach(btn => {
    btn.addEventListener("click", function(e) {
        const value = e.target.textContent;
        screen.textContent += value;
    })
})

buttonsOperators.forEach(btn => {
    btn.addEventListener("click", function(e) {
        const value = e.target.textContent;
        operator = value;
        num1 = Number(screen.textContent);
        screen.textContent = "";

    })
})

btnProcces.addEventListener("click", function(){
    num2 = Number(screen.textContent);
    screen.textContent = "";
    console.log(operator);
    console.log(num1);
    console.log(num2);
    let result = operate(operator,num1,num2);
    screen.textContent = result;
})

