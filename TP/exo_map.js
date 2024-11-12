let lesTxt = document.getElementsByTagName("p");
console.log(lesTxt);

let tab = Array.from(lesTxt);

console.log(tab);

tab.map((p) => {
	p.style.cursor = "pointer";
	p.style.boxShadow = "10px 5px 100px lightblue";
	p.style.color = "grey";
	p.textContent = "Ouai salut ouai";
	p.addEventListener("click", () => {
		alert("WARNING");
	});
});
