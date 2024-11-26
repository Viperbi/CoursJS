class Livre {
	constructor(titre, auteur, dispo) {
		this.titre = titre;
		this.auteur = auteur;
		this.dispo = dispo;
	}

	emprunter() {
		try {
			if (this.dispo == true) {
				this.dispo = false;
			} else {
				throw new Error("Le livre n'est pas disponible");
			}
		} catch (error) {
			console.log(error);
		}
	}

	retourner() {
		this.dispo = true;
	}
}

class Biblio {
	constructor(nom) {
		this.nom = nom;
		this.livres = [];
	}

	ajouterLivre(livre) {
		this.livres.push(livre);
	}

	emprunterLivre(titre) {
		try {
			const truc = this.livres.find((livre) => {
				return livre.titre == titre;
			});
			if (!truc) {
				throw new Error("Le livre n'existe pas");
			} else {
				truc.emprunter();
			}
		} catch (error) {
			console.log(error);
		}
	}
	retournerLivre(titre) {
		try {
			const truc = this.livres.find((livre) => {
				return livre.titre == titre;
			});
			if (!truc) {
				throw new Error("Le livre n'existe pas");
			}
			truc.retourner();
		} catch (error) {
			console.log(error);
		}
	}
}

const biblio = new Biblio("Librairie");
const livre1 = new Livre("1984", "GeorgeOrwell", true);
const livre2 = new Livre("Le Petit Prince", "Steven Seagal");

biblio.ajouterLivre(livre1);
biblio.ajouterLivre(livre2);

biblio.emprunterLivre("1984");
biblio.emprunterLivre("1984");
biblio.retournerLivre("1984");
biblio.retournerLivre("Batisla Bios");
biblio.emprunterLivre("1999999");
