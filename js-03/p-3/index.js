const numUser1 = +prompt("enter the first number: ")
const numUser2 = +prompt("enter the second number: ")
const numUser3 = +prompt("enter the third number: ")
const numUser4 = +prompt("enter the fourth number: ")
const numUser5 = +prompt("enter the fifth number: ")

function avg(n1 , n2 , n3 , n4 , n5){
    sum = n1 + n2 + n3 + n4 + n5
    average = sum / 5
    if (average >= 12){
        return "your average is " + average
    }
    else{
        return "your average is " + average + " and its under 12"
    }
    
}
console.log(avg(numUser1 , numUser2 , numUser3 , numUser4 , numUser5))