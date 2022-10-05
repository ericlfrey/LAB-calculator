const screenDisplay = document.getElementById('display');
const buttons = document.querySelectorAll('button[id]');
const clear = document.getElementById('clear');
const backspace = document.getElementById('back-arrow');

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

backspace.addEventListener('click', function () {
  screenDisplay.innerHTML = screenDisplay.innerHTML.slice(0, -1);
  if (screenDisplay.innerHTML === '') screenDisplay.innerHTML = '0';

})
