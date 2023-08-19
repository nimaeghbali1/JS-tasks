const contactTitle = document.querySelector<HTMLInputElement>("#user-title")
const contactDescription = document.querySelector<HTMLInputElement>("#user-description")
const submitButton = document.querySelector<HTMLButtonElement>("#submitbutton")

submitButton?.addEventListener("click" , (event) => {
    event.preventDefault();
    const result = `title : ${contactTitle?.value} 
     description : ${contactDescription?.value}`
    document.body.innerText = result
})