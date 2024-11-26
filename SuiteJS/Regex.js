const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;
const button = document.getElementById("SButton");
let mail = "";
let pw = "";
const dia = document.querySelector("dialog");
const container = document.getElementsByClassName("container")[0];

button.addEventListener("click", () => {
	mail = document.getElementById("fname").value;
	pw = document.getElementById("password").value;
	if (regex.test(mail)) {
		const p1 = document.createElement("p");
		p1.setAttribute("id", "p1");
		p1.textContent = "Le mail est valide ! ";
		document.body.appendChild(p1);
		document.getElementById("fname").style.borderColor = "green";
	} else {
		const p2 = document.createElement("p");
		p2.setAttribute("id", "p2");
		p2.textContent = "Le mail n'est pas valide ! ";
		document.body.appendChild(p2);
		document.getElementById("fname").style.borderColor = "red";
	}
	if (charDecimal.test(pw) == false) {
		const p3 = document.createElement("p");
		p3.setAttribute("id", "p3");
		p3.textContent = "Il faut que le mdp contienne un chiffre ! ";
		document.body.appendChild(p3);
		document.getElementById("password").style.borderColor = "red";
	}
	if (charSpecial.test(pw) == false) {
		const p4 = document.createElement("p");
		p4.setAttribute("id", "p4");
		p4.textContent =
			"Il faut que le mdp contienne un charactère spécial ! ";
		document.body.appendChild(p4);
		document.getElementById("password").style.borderColor = "red";
	} else if (charDecimal.test(pw) && charSpecial.test(pw)) {
		const p5 = document.createElement("p");
		p5.setAttribute("id", "p5");
		p5.textContent = "Le mdp est valide ! ";
		document.body.appendChild(p5);
		document.getElementById("password").style.borderColor = "green";
	}
	if (charDecimal.test(pw) && charSpecial.test(pw) && regex.test(mail)) {
		const p6 = document.createElement("p");
		p6.setAttribute("id", "p6");
		p6.textContent = "Tout est bon ! ";
		document.body.appendChild(p6);
		dia.showModal();
	}
});

document.addEventListener("keyup", () => {
	container.innerHTML = "";
	document.getElementById("password").style.borderColor = "";
	if (document.getElementById("password").value.length < 8) {
		const p7 = document.createElement("p");
		p7.setAttribute("id", "p7");
		p7.textContent = "Le mdp est trop court ! ";
		container.appendChild(p7);
		document.getElementById("password").style.borderColor = "red";
	} else if (document.getElementById("password").value.length > 255) {
		const p8 = document.createElement("p");
		p8.setAttribute("id", "p8");
		p8.textContent = "Le mdp est trop long !  ";
		container.appendChild(p8);
		document.getElementById("password").style.borderColor = "red";
	}
});
