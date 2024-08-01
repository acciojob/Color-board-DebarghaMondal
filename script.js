let container = document.querySelector('.container');

for (let i = 0; i < 800; i++) {
  let square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}

const squares = document.querySelectorAll('.square');

// Add a 'mouseover' event listener to each square
squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Set the background color of the square to the random color
    square.style.backgroundColor = randomColor;
  });

  // Add a 'mouseout' event listener to change the color back to initial after 1 second
  square.addEventListener('mouseout', () => {
  setTimeout(() => {
    square.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }, 1000);
});
});