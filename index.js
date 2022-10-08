const calBtnEl = document.getElementById("calculate-button");
const firstNumberEl = document.getElementById("first-number-inp");
const operationEl = document.getElementById("operation-inp");
const secondNumberEl = document.getElementById("second-number-inp");
const resultEl = document.getElementById("text-field");

const calculate = (number1, operation, number2) => {
  let result;
  switch (operation) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    case "x":
      result = number1 * number2;
      break;
    default:
      break;
  }
  return result;
};

const modifyResultField = () => {
  resultEl.textContent = calculate(
    firstNumberEl.value,
    operationEl.value,
    secondNumberEl.value
  );
  console.log("hello");
};

// ! Add event listener to button click
calBtnEl.addEventListener("click", () => {
  modifyResultField();
});

// ! Adds event listener for pressing enter key
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    modifyResultField();
  }
});
