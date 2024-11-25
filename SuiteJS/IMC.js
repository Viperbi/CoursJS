class IMC {
	constructor(nom, poids, taille) {
		this.nom = nom;
		this.poids = poids;
		this.taille = taille;
	}
	//Fonction permettant de calculer l'IMC d'une personne à partir de son poids et de sa taille.
	/**
	 *
	 * @param {*} taille
	 * @param {*} poids
	 * @returns
	 */
	calculIMC(taille, poids) {
		return (poids / (taille * taille)).toFixed(2);
	}
	//Méthode pour afficher les différentes informations de la personne.
	displayinfo() {
		console.log(
			`${this.nom} (${this.poids}kg, ${
				this.taille
			}M) a un IMC de: ${this.calculIMC(this.taille, this.poids)}`
		);
	}
}
//Tableau contenant les données de différentes personnes
const list = [
	new IMC("Sébastien chabal", 135, 1.7),
	new IMC("Escaladeuse", 45, 1.68),
	new IMC("JOJO", 300, 2),
	new IMC("Gontrand", 90, 1.75),
	new IMC("Colonel Clock", 200, 1.75),
	new IMC("J0siane de la Vega", 99, 1.55),
];
//Boucle permettant de parcourir le tableau list et d'afficher les infos de chaque personne.
for (let i = 0; i < list.length; i++) {
	list[i].displayinfo();
}
