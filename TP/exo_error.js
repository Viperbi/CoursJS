try {
	prenom;
} catch (err) {
	console.log(err);
	let popup = document.getElementById("myPopup");
	console.log(popup);
	popup.classList.toggle("show");
}
const clicktopop = document.getElementsByClassName("popup");
clicktopop[0].addEventListener("click", () => {
	let popup = document.getElementById("myPopup");
	console.log(popup);
	popup.classList.toggle("show");
});
