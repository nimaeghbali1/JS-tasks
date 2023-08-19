const celsius = prompt("Enter celsius degree: ")

function celsToFar(cels){
    const fahrenheit = cels * (9/5) + 32
    return fahrenheit
}

console.log(celsToFar(celsius))