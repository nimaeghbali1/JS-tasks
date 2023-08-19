const firstNum = +prompt("Enter the first number: ")
const operation = prompt("Enter the operation symbol: ")
const secNum = +prompt("Enter the second number: ")

function calc(num1 , operation1 , num2){
    if (!isNaN(num1 + num2)){
        switch(operation1){
            case "+":
                return num1 + num2  
            case "-":
                return num1 - num2
            case "*":
                return num1 * num2
            case "/":
                return num1 / num2
            default:
                return "please enter the operation correctly"
        }
    }
    else{
        return "Enter the numbers correctly"
    }
}

console.log(calc(firstNum , operation , secNum))