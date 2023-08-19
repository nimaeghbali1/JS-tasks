const userSentence = prompt("Enter a sentence: ")
const userWord = prompt("Enter a word to see if is that word in the sentence or not: ")
const styles = "color:green;"

function wordFinder(sentence , word){

    if (!isNaN(sentence) || !isNaN(word) || (!sentence) || (!word)) return "Enter the sentence correctly"

    else{
        if(sentence.includes(word)) return "the same word was found in the sentence!"
        
        else throw Error("that word that you looking for , is not in the sentece")
    }
}

console.log(wordFinder(userSentence , userWord))