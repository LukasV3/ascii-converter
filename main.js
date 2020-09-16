// Variables
const inputText = document.getElementById("input"); // textarea
const output = document.querySelector(".output"); // output div
const count = document.querySelector(".count"); // counter div

// Event Listeners
inputText.addEventListener("input", outputAscii);

// Functions
function outputAscii(e) {
  let text = inputText.value;
  let newArr = [];
  for (let i = 0; i < text.length; i++) {
    let x = text[i].charCodeAt();
    newArr.push(x);
  }
  output.textContent = newArr.join(" ");

  if (text.length > 0) {
    count.style.display = "flex";
    count.textContent = `Character Count: ${newArr.length}`;
  } else {
    count.style.display = "none";
  }
}
