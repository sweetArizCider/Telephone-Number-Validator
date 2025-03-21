const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const phoneRegex = /^(1\s?)?(\(\d{3}\)[\s\-]?\d{3}[\s\-]?\d{4}|\d{3}[\s\-]?\d{3}[\s\-]?\d{4})$/




const checkHandler = () => {
  const input = userInput.value
  if(input === ""){return alert("Please provide a phone number")}
  if(!phoneRegex.test(input)){
    return resultsDiv.innerHTML += `<p><span class="bold">Invalid US number:</span> <span class="blue">${input}</span></p>`
  }
  return resultsDiv.innerHTML += `<p><span class="bold">Valid US number:</span> <span class="blue">${input}</span></p>`

}

const clearHandler = () => {
  resultsDiv.innerHTML = ''
}

checkButton.addEventListener("click", checkHandler);
clearButton.addEventListener("click", clearHandler);