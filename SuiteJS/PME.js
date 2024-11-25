class Employee {
	/**
	 *
	 * @param {String} nom
	 * @param {String} prenom
	 * @param {int} age
	 * @param {int} salaire
	 */
	constructor(nom, prenom, age, salaire) {
		this.nom = nom;
		this.prenom = prenom;
		this.age = age;
		this.salaire = salaire;
	}
	getSalaireAnnuel() {
		return this.salaire * 12;
	}
}

class Pme {
	/**
	 *
	 * @param {String} nom
	 * @param {Employee[]} salarie
	 * @param {int} R
	 * @param {int} FF
	 * @param {int} FA
	 */
	constructor(nom, salarie, R, FF, FA) {
		this.nom = nom;
		this.salarie = salarie;
		this.R = R;
		this.FF = FF;
		this.FA = FA;
	}
	getCoutEquipe() {
		let cout = 0;
		for (let i = 0; i < this.salarie.length; i++) {
			cout += this.salarie[i].getSalaireAnnuel() * 1.9;
		}
		return cout;
	}
	getBilan() {
		return this.R - (this.getCoutEquipe() + this.FF + this.FA);
	}
	displayinfo() {
		console.log(
			`${this.nom} : Cout initial : ${this.FF + this.FA}\n
            ${this.nom} : Cout total Equipe : ${this.getCoutEquipe()}\n
            ${this.nom} : Ventes : ${this.R}\n
            ${this.nom} : Bilan ${this.getBilan()}`
		);
	}
}

const pme = new Pme(
	"Ma petite entreprise - ",
	[
		new Employee("Duval", "Paul", 30, 2000),
		new Employee("Durand", "Alain", 40, 3000),
		new Employee("Dois", "Sylvia", 50, 4000),
	],
	300000,
	20000,
	50000
);

pme.displayinfo();
