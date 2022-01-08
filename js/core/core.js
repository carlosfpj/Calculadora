let valueDisplay = []

export default function init() {
  let $buttons = []
  $buttons = document.querySelectorAll("button")
  for (let i = 0; i < $buttons.length; i++) {
    $buttons[i].addEventListener('click', handleButtonClick)
  }
}

function handleButtonClick(event) {
  let valueClicked = 0
  valueClicked = event.target.value
  valueDisplay.push(valueClicked)
  valueClicked = 0
  //fix the array in order to display it, commas appearing
  showOnDisplay(valueDisplay);
}

function showOnDisplay(value) {
  const $display = document.querySelector(".display")
  console.log($display);
  $display.textContent = value
}