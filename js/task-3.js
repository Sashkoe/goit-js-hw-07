const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function eventFrom() {
    const nameInputValue = nameInput.value.trim();

    if(nameInput === "") {
        nameOutput.textContent = "Anonymous";
    }
    else  {
    nameOutput.textContent = nameInputValue;
    } 
}
nameInput.addEventListener("input", eventFrom);