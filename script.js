//Selecionar os elementos
let inputElement = document.querySelector("#input");
let fromElement = document.querySelector("#from");
let toElement = document.querySelector("#to");
let convertButton = document.querySelector("#converter-btn");
let outputElement = document.querySelector("#output");
let messageElement = document.querySelector("#message");

function convert() {
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.textContent = "";
    return;
  }

  let meters;

  switch (fromValue) {
    case "m":
      meters = inputElement.value;
      break;
    case "km":
      meters = inputElement.value * 100;
      break;
    case "cm":
      meters = inputElement.value / 100;
      break;
    case "mm":
      meters = inputElement.value / 1000;
      break;
  }

  let result;
  switch (toValue) {
    case "m":
      result = meters;
      break;
    case "km":
      result = meters / 1000;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "mm":
      result = meters * 1000;
      break;
  }

  outputElement.value = result;

  let fromLabel = fromElement.options[fromElement.selectedIndex].text;
  let toLabel = toElement.options[toElement.selectedIndex].text;

  const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;

  messageElement.textContent = message;
  return;
}

convertButton.addEventListener("click", convert);
