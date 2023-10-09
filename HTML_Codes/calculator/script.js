let display = document.getElementById("display");
let currentValue = "";

function appendToDisplay(value) {
  currentValue += value;
  display.textContent = currentValue;
}

function clearDisplay() {
  currentValue = "";
  display.textContent = "0";
}

function calculate() {
  try {
    currentValue = eval(currentValue);
    display.textContent = currentValue;
  } catch (error) {
    display.textContent = "Error";
  }
}
