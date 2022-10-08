const calBtnEl = document.getElementById("calculate-button");
const firstNumberEl = document.getElementById("number1");
const operationEl = document.getElementById("operation-inp");
const secondNumberEl = document.getElementById("number2");
const resultEl = document.getElementById("text-field");

const inputValidationArray = [true, true];

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
};

operationEl.onchange = () => {
  modifyResultField();
};

calBtnEl.addEventListener("click", () => {
  modifyResultField();
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    modifyResultField();
  }
});

// todo add a mini-modal if validation failed
const validateInput = (validationArray) => {
  let valid = true;
  validationArray.forEach((item) => {
    if (!item) {
      valid = false;
    }
  });
  calBtnEl.disabled = !valid;
};

document.querySelectorAll(".input-validate").forEach((element) => {
  element.onkeyup = () => {
    isNaN(element.value)
      ? (inputValidationArray[element.getAttribute("id").slice(-1)] = false)
      : (inputValidationArray[element.getAttribute("id").slice(-1)] = true);
    validateInput(inputValidationArray);
  };
});
