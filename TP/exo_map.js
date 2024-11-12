let lesTxt = document.getElementsByTagName("p");
console.log(lesTxt);

let tab = Array.from(lesTxt);

console.log(tab);

tab.map((p) => {
	p.style.cursor = "pointer";
	p.style.boxShadow = "10px 5px 100px lightblue";
	p.style.color = "purple";
	p.style.border = "thick solid black";
	p.style.padding = "5px";
	p.style.backgroundColor = "black";
	p.style.borderRadius = "100px";
	//p.style.fontSize = "200px";
	p.style.borderColor = "black";
	p.textContent = "Ouai click ouai";
	p.addEventListener("click", () => {
		alert("WARNING");
	});
});
