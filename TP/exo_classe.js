const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");

const titre = document.getElementsByTagName("h1");

console.log(titre[0]);

a1.addEventListener("click", () => {
	titre[0].classList.add("toggle");
});

a2.addEventListener("click", () => {
	titre[0].classList.remove("toggle");
});

a3.addEventListener("click", () => {
	titre[0].classList.toggle("toggle");
});
