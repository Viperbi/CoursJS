let laBar = document.getElementsByClassName("bar");
document.addEventListener("scroll", () => {
	console.log(document.body.scrollHeight, window.innerHeight, window.scrollY);
	let scrollMax = document.body.scrollHeight - window.innerHeight;
	let onEstOu = (window.scrollY / scrollMax) * 100;
	console.log(onEstOu);
	laBar[0].style.width = onEstOu + "%";
});
