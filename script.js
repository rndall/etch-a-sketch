const container = document.querySelector("#container");

let size = 16;

for (let i = 0; i < size * size; i++) {
	const div = document.createElement("div");
	div.style.flex = `1 1 ${100 / size}%`;
	container.appendChild(div);
}
