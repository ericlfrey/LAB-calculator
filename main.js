const calculator = document.querySelector();
const keys = calculator.querySelector('.calculator__keys');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    //do something
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
