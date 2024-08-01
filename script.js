//your JS code here. If required.
let container = document.getElementById('container');

for(let i = 0;i < 800; i++){
	let square = document.createElement('div');
	square.classList.add('square');
	container.appendChild(square)
}

let squares = document.querySelectorAll('.square');

squares.forEach((square) => {
square.addEventListener('mouseover',() =>{
	square.style.backgroundColor = getRandomColor();
	setTimeout(()=>{
		square.style.backgroundColor= '';
	},1000);
})

})

function getRandomColor()