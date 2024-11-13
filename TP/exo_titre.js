let clicked = true;

let titre = document.getElementsByTagName("h1");
titre[0].style.cursor = "pointer";

console.log(titre[0]);
titre[0].addEventListener("click", () => {
	clicked
		? (titre[0].textContent = "Test")
		: (titre[0].textContent = "D.O.M Events");
	clicked = !clicked;
});
