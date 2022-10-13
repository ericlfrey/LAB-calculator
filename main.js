const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType
    //check to see if button is a number key
    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
      calculator.dataset.previousKey = 'number';
    }
    //check to see if a key is an operator
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue && operator) {
        display.textContent = calculate(firstValue, operator, secondValue);
      }

      key.classList.add('is-depressed');
      calculator.dataset.previousKeyType = 'operator';
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }
    //check to see about other specific keys
    if (action === 'decimal') {
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.';
      } else if (previousKeyType === 'operator') {
        display.textContent = '0.';
      }
      calculator.dataset.previousKey = 'decimal';
    }
    if (action === 'clear') {
      calculator.dataset.previousKey = 'clear';
    }
    if (action === 'delete') {
      console.log('delete key!');
    }
    if (action === 'calculate') {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      const calculate = (n1, operator, n2) => {
        let result = '';
        if (operator === 'add') {
          result = parseFloat(n1) + parseFloat(n2)
        } else if (operator === 'subtract') {
          result = parseFloat(n1) - parseFloat(n2)
        } else if (operator === 'multiply') {
          result = parseFloat(n1) * parseFloat(n2)
        } else if (operator === 'divide') {
          result = parseFloat(n1) / parseFloat(n2)
        }
        return result;
      }

      display.textContent = calculate(firstValue, operator, secondValue);
      calculator.dataset.previousKey = 'calculate';
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
