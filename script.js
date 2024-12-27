const container = document.querySelector("#container");
const button = document.querySelector("button");

let size = 16;

const changeSize = () => {
	const sizeInput = +prompt(
		"Enter number of squares per side of the grid (Max = 100): ",
	);

	if (Number.isInteger(sizeInput)) {
		size = sizeInput;
	} else {
		alert("Error");
	}
};

for (let i = 0; i < size * size; i++) {
	const div = document.createElement("div");
	div.style.flex = `1 1 ${100 / size}%`;
	container.appendChild(div);
}

container.addEventListener("mouseover", (e) => {
	const square = e.target;

	if (square.id !== "container") {
		square.classList.add("highlighted");
	}
});

button.addEventListener("click", changeSize);
