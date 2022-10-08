const calBtnEl = document.getElementById("calculate-button");
const firstNumberEl = document.getElementById("first-number-inp");
const operationEl = document.getElementById("operation-inp");
const secondNumberEl = document.getElementById("second-number-inp");
const resultEl = document.getElementById("text-field");

const calculate = (number1, operation, number2) => {
  number1 = Number(number1);
  number2 = Number(number2);
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
    case "*":
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

firstNumberEl.onkeyup = () => {
  if (isNaN(firstNumberEl.value)) {
    calBtnEl.disabled = true;
    console.log("this is not a number");
  } else {
    calBtnEl.disabled = false;
  }
};
