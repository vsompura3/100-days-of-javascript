// Select the elements from the page
const container = document.getElementById('container');
const hexText = document.querySelector('#hex');
const rgbText = document.querySelector('#rgb');
const button = document.getElementById('generate-color');

// Array for Hex Color [letters and digits]
const hexCodes = [1,'A',2,'B',3,'C',4,'D',5,'E',6,'F']

// Function that generates random Color
function generateColor() {
  // Initial value with '#'
  let colorCode = '#';
  // Running loop 6 times to generate hex color
  for(let i = 0; i < 6; i+=1){
    // Generate random code for hexColor Array
    const randomNumber = Math.floor(Math.random() * hexCodes.length);
    colorCode += hexCodes[randomNumber];
  }
  
  // Set container's background as generated hexcolor
  container.style.backgroundColor = colorCode;
  // Set the text of the span as colorCode
  hex.textContent = colorCode;
  rgbText.textContent = container.style.backgroundColor;
}

// Generate the backgroundColor when button is clicked
button.addEventListener('click', generateColor);