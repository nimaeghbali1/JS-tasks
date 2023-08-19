
const laptop1 = {
    Brand : "Razer",
    Size : "15 inch",
    Cpu : "core i 9",
    GraphicCard : "RTX-3080",
    Memmory: "64-GB",
    Display: "4K",
    price : "1600$"
}
let list = []
//here we have to inputs which the first one user choose the item and the second one user choose to add or remove the item

const userChoiceAdd = prompt("Enter the name of the product which you want to purches or remove!")
const addUser = prompt("Enter 'add' to add to the cart or 'remove' to remove from the cart!")
function buy(product , addRemove){
    console.log(list)
    if(product ==="laptop" && (product)){
        if (addRemove === "add" && (product)){
            list.push(laptop1)
            return "item has been added to the cart"
        }
        else if(addRemove === "remove" && (product)){
            list.pop()
            return "item has been removed from the cart"
        }
        else{
            return "enter 'add' or 'remove' correctly"
        }
    }
    else{
        return "Enter the product name correctly"
    }
}

console.log(buy(userChoiceAdd,addUser))
console.log(list)
