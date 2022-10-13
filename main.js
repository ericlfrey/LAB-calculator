const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    //check to see if button is a number key
    if (!action) {
      if (displayedNum === '0') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    //check to see if a key is an operator
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed');
    }
    //check to see about other specific keys
    if (action === 'decimal') {
      display.textContent = displayedNum + '.';
    }
    if (action === 'clear') {
      console.log('clear key!');
    }
    if (action === 'delete') {
      console.log('delete key!');
    }
    if (action === 'calculate') {
      console.log('equal key!');
    }
    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'));
  }
})



//This was my original code

// const screenDisplay = document.getElementById('display');
// const buttons = document.querySelectorAll('button[id]');
// const clear = document.getElementById('clear');
// const backspace = document.getElementById('back-arrow');
// const add = document.getElementById('add');
// const subtract = document.getElementById('subtract');
// const multiply = document.getElementById('multiply');
// const divide = document.getElementById('divide');
// const equals = document.getElementById('equals');

// let valX = 0;
// let valY = 0;
// let result = 0;

// buttons.forEach(btn => {
//   btn.addEventListener('click', function () {
//     inputNumber(this.id)
//   });
// });

// const inputNumber = number => {
//   const screenNumber = screenDisplay.innerHTML;
//   if (screenNumber.length < 16)
//     screenDisplay.innerHTML = parseInt(screenNumber + number).toString();
// }

// clear.addEventListener('click', function () {
//   screenDisplay.innerHTML = '0';
//   valX = 0;
//   valY = 0;
//   result = 0;
//   console.log(valX)
//   console.log(valY)
//   console.log(result)
// });

// backspace.addEventListener('click', function () {
//   screenDisplay.innerHTML = screenDisplay.innerHTML.slice(0, -1);
//   if (screenDisplay.innerHTML === '') screenDisplay.innerHTML = '0';
// })

// // equals.addEventListener('click', function () {
// //   valY = parseInt(screenDisplay.innerHTML, 10);
// //   result = valX + valY;
// //   screenDisplay.innerHTML = result.toString();
// // });

// add.addEventListener('click', function () {
//   valX = parseInt(screenDisplay.innerHTML, 10);
//   screenDisplay.innerHTML = '0';
// });
