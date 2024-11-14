const txt = document.querySelector("textarea");
const button = document.querySelector("#submitButton");
const storagetxt = localStorage.getItem("text");
if (storagetxt != null) {
	txt.value = storagetxt;
}

txt.addEventListener("keyup", (keyEvent) => {
	console.log("keyEvent :", keyEvent);
	localStorage.setItem("text", txt.value);
});

txt.addEventListener("keyup", (event) => {
	button.disabled = txt.value.length >= 5 ? true : false;
});
