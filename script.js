const container = document.querySelector("#container");
const button = document.querySelector("button");

let size = 16;

const loadDivs = () => {
	container.innerHTML = "";

	for (let i = 0; i < size * size; i++) {
		const div = document.createElement("div");
		div.style.flex = `1 1 ${100 / size}%`;
		container.appendChild(div);
	}
};

const changeSize = () => {
	const sizeInput = +prompt(
		"Enter number of squares per side of the grid (Max = 100): ",
	);

	if (Number.isInteger(sizeInput)) {
		size = sizeInput;
		loadDivs();
	} else {
		alert("Error");
	}
};

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomRgb = () => {
	const r = getRandomNumber(255);
	const g = getRandomNumber(255);
	const b = getRandomNumber(255);

	return `rgb(${r}, ${g}, ${b})`;
};

loadDivs();

container.addEventListener("mouseover", (e) => {
	const square = e.target;

	if (square.id !== "container") {
		square.classList.add("highlighted");
	}
});

button.addEventListener("click", changeSize);
