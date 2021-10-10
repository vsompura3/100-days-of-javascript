'use strict';
// Select elements from page
const digit = document.querySelector('.digit');
const btns = document.querySelectorAll('.btn');

// Set initial count
let count = 0;

// Set digit's text content as initial count
digit.textContent = count;

// Loop over each button and add event listener
btns.forEach(btn => {
  btn.addEventListener('click', changeCount)
});

// Function that checks whick btn was pressed and change count
function changeCount(e) {
  // Access classlists of currentTarget btn
  const styles = e.currentTarget.classList;
  if (styles.contains('increase')) {
    count++;
  } else if (styles.contains('decrease')) {
    count--;
  } else{
    count = 0;
  }
  // Set textcontent as calculated count
  digit.textContent = count;

  // Change digit color according to the condition [Red,Green,Black]
  if (count > 0) {
    digit.style.color = 'green';
  } else if (count < 0) {
    digit.style.color = 'red'
  } else{
    digit.style.color = 'black';
  }
}