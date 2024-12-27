const container = document.querySelector("#container");

let size = 16;

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
