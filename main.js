const screenDisplay = document.getElementById('display');
const buttons = document.querySelectorAll('button[id]');
const clear = document.getElementById('clear');

buttons.forEach(btn => {
  btn.addEventListener('click', function () {
    inputNumber(this.id)
  });
});

const inputNumber = number => {
  let screenNumber = screenDisplay.innerHTML;
  if (screenNumber.length < 16)
    screenDisplay.innerHTML = parseInt(screenNumber + number).toString();
}

clear.addEventListener('click', function () {
  screenDisplay.innerHTML = '0';
});
