class HelloWorld extends HTMLElement {
	constructor() {
		super(); // Appelle le constructeur de la classe parent

		// Ajoute du contenu directement dans l'élément
		this.textContent = "Hello, World!";
		const mot = this.getAttribute("mot") || "World";
		const element = document.createElement("p");
		element.textContent = `Bonjour, ${mot}!`;
		this.appendChild(element);
	}
}

customElements.define("hello-world", HelloWorld);
class Person {
	constructor(nom, age, mail, image) {
		this.nom = nom;
		this.age = age;
		this.mail = mail;
		this.image = image;
	}
}
let tab = [];
const person1 = new Person(
	"Jeff",
	45,
	"Jeff@gmail.com",
	"https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
);
tab.push(person1);
function chosePerson(tab) {
	let chosen = tab[Math.floor(Math.random(0, tab.length))];
	return chosen;
}
class UserBox extends HTMLElement {
	constructor() {
		super();

		// Récupérer la phrase depuis l'attribut
		// le this représente l'instance de classe sur laquelle on travaille ici notre element HTML custom

		const nom = chosePerson(tab).nom || this.getAttribute("nom");
		const age = chosePerson(tab).age || this.getAttribute("age");
		const mail = chosePerson(tab).mail || this.getAttribute("mail");
		const image = chosePerson(tab).image || this.getAttribute("image");

		// Créer un élément texte pour afficher la phrase
		const nomElement = document.createElement("p");
		const ageElement = document.createElement("p");
		const mailElement = document.createElement("p");
		const imgElement = document.createElement("img");
		// un peu de style bootstrap

		imgElement.src = image;
		nomElement.textContent = nom;
		ageElement.textContent = `${age} ans`;
		mailElement.textContent = mail;

		// Ajouter l'élément texte dans le Custom Element
		this.appendChild(imgElement);
		this.appendChild(nomElement);
		this.appendChild(ageElement);
		this.appendChild(mailElement);
	}
}

customElements.define("user-box", UserBox);
