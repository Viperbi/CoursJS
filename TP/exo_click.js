document.addEventListener("click", (e) => {
	console.log(e);
	const img = document.createElement("img");
	img.style.position = "absolute";
	img.style.top = e.y + "px";
	img.style.left = e.x + "px";
	img.style.transform = "translate(-50%,-50%)";
	img.style.width = "100px";
	img.style.height = "50px";
	img.src = "https://i.imgflip.com/2pzj16.jpg?a480936";
	document.body.append(img);
});
