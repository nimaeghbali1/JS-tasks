const firstNumber = +prompt("Enter the first number:")
const symbol = prompt("enter a symbol like - + * / to caculate:")
const secondNumber = +prompt("Enter the second number:")

if (symbol === "+"){
    console.log(firstNumber + secondNumber)
}
else if (symbol === "-"){
    console.log(firstNumber - secondNumber)
}
else if (symbol === "*"){
    console.log(firstNumber * secondNumber)
}
else if (symbol === "/"){
    console.log(firstNumber / secondNumber)
}
else{
    console.log("please enter the symbol correctly.")
}