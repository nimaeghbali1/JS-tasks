"use strict";
const contactTitle = document.querySelector("#user-title");
const contactDescription = document.querySelector("#user-description");
const submitButton = document.querySelector("#submitbutton");
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const result = `title : ${contactTitle === null || contactTitle === void 0 ? void 0 : contactTitle.value} 
     description : ${contactDescription === null || contactDescription === void 0 ? void 0 : contactDescription.value}`;
    document.body.innerText = result;
});
