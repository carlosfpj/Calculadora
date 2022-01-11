let valueDisplay = []
let firstValue
let secondValue
let operador = ""
let result = 0
let waitSecondValue = false
let firstStringValue = ""
let secondStringValue = ""

export default function init() {
  let $buttons = []
  $buttons = document.querySelectorAll("button")
  for (let i = 0; i < $buttons.length; i++) {
    $buttons[i].addEventListener('click', handleButtonClick)
  }
}

function handleButtonClick(event) {
  if(event.currentTarget.className === "number" || event.currentTarget.className === "decimal") {
    if(!waitSecondValue) {
      saveFirstValue(event)
    } else {
      saveSecondValue(event)
    }
  } else if (event.currentTarget.className === "operator") {
    waitSecondValue = true
    operador = event.currentTarget.value
    secondStringValue = ""
    showOnDisplay(operador)
  } else if (event.currentTarget.className === "equal") {
      const result = performOperation()
      showOnDisplay(result)
  } else if (event.currentTarget.className === "all-clear") {
      allClear()
  }
}

function allClear() {
  waitSecondValue = false
  firstStringValue = ""
  secondStringValue = ""
  operador = ""
  firstValue = 0
  secondValue = 0
  showOnDisplay(0)
}

function saveFirstValue(event) {
  firstStringValue = firstStringValue + event.target.value
  firstValue = Number(firstStringValue)
  console.log("el primer número es: " + firstValue + " de tipo " + typeof(firstValue))
  showOnDisplay(firstValue)
  return firstValue
}

function saveSecondValue(numberClicked) {
  secondStringValue = secondStringValue + numberClicked.target.value
  secondValue = Number(secondStringValue)
  showOnDisplay(secondValue)
  console.log("el segundo número es: " + secondValue + " de tipo " + typeof(secondValue))
  return secondValue
}

function showOnDisplay(value) {
  const $display = document.querySelector(".display")
  $display.textContent = value
}

function performOperation() {
  switch (operador) {
    case "+":
      result = firstValue + secondValue
      firstValue = result
      return result
    case "-":
      result = firstValue - secondValue
      firstValue = result
      return result
    case "*":
      result = firstValue * secondValue
      firstValue = result
      return result
    case "/":
      result = firstValue / secondValue
      firstValue = result
      return result
  }
}
