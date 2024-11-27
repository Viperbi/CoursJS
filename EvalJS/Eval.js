const regex = /stupide|fcked/;

class Utilisateur {
	/**
	 *
	 * @param {String} nom
	 */
	constructor(nom) {
		this.nom = nom;
		this.publication = [];
		this.groupe = [];
	}
	/**
	 *
	 * @param {String} contenu
	 * @returns Retourne la publication créée par l'utilisateur
	 */
	publier(contenu) {
		try {
			if (regex.test(contenu)) {
				throw Error("Contenue inaproprié");
			}
			this.publication.push(new Publication(this.nom, contenu));
			console.log(`Vous avez bien publié ${contenu}`);
			return new Publication(this.nom, contenu);
		} catch (error) {
			console.log(error);
		}
	}
	/**
	 *
	 * @param {Groupe} groupe
	 */
	rejoindreGroupe(groupe) {
		groupe.ajouterMembre(this);
	}
}

class Publication {
	/**
	 *
	 * @param {Utilisateur} auteur
	 * @param {String} contenu
	 */
	constructor(auteur, contenu) {
		this.auteur = auteur;
		this.contenu = contenu;
		this.commentaires = [];
	}
	/**
	 *
	 * @param {Commentaire} commentaire
	 */
	ajouterCommentaire(commentaire) {
		try {
			if (regex.test(commentaire.contenu)) {
				throw Error("Contenue inaproprié");
			}
			this.commentaires.push(
				new Commentaire(this.auteur, commentaire.contenu)
			);
		} catch (error) {
			console.log(error);
		}
	}
}

class Commentaire {
	/**
	 *
	 * @param {Utilisateur} auteur
	 * @param {String} contenu
	 */
	constructor(auteur, contenu) {
		this.auteur = auteur;
		this.contenu = contenu;
	}
}

class Groupe {
	/**
	 *
	 * @param {String} nom
	 * @param {Boolean} estPrivé
	 */
	constructor(nom, estPrivé) {
		this.nom = nom;
		this.estPrivé = estPrivé;
		this.membres = [];
	}
	/**
	 *
	 * @param {Utilisateur} utilisateur
	 */
	ajouterMembre(utilisateur) {
		try {
			if (this.membres.includes(utilisateur)) {
				throw Error(
					`${utilisateur.nom} fait déjà parti du groupe ${this.nom}`
				);
			} else {
				this.membres.push(utilisateur);
				console.log(
					`L'utilisateur ${utilisateur.nom} fait maintenant parti du groupe ${this.nom}`
				);
			}
		} catch (error) {
			console.log(error);
		}
	}
	/**
	 *
	 * @param {Utilisateur} utilisateur
	 */
	afficherContenu(utilisateur) {
		if (this.estPrivé) {
			try {
				if (!this.membres.includes(utilisateur.nom)) {
					throw Error("Vous n'avez pas accés à ce groupe");
				}
				console.log("Vous accédez au groupe");
			} catch (error) {
				console.log(error);
			}
		} else {
			console.log("Vous accédez au groupe");
		}
	}
}

// Tests
try {
	const utilisateur1 = new Utilisateur("Alice");
	const utilisateur2 = new Utilisateur("Bob");

	const groupePublic = new Groupe("Voyageurs", false);
	const groupePrivé = new Groupe("Investisseurs", true);

	utilisateur1.rejoindreGroupe(groupePublic);
	utilisateur2.rejoindreGroupe(groupePrivé);

	const publication = utilisateur1.publier(
		"Bienvenue  dans mon réseau social !"
	);
	const publicationInvalide = utilisateur2.publier(
		"Bienvenue  dans mon réseau social fcked!"
	);
	if (publication) {
		console.log(`${utilisateur1.nom} a publié : "${publication.contenu}"`);
	}
	if (publicationInvalide) {
		console.log(`${utilisateur1.nom} a publié : "${publication.contenu}"`);
	}

	const commentaireValide = new Commentaire(
		utilisateur2,
		"Super publication !"
	);
	if (publication) {
		publication.ajouterCommentaire(commentaireValide);
		console.log(
			`${commentaireValide.auteur.nom} à commenté ${commentaireValide.contenu}`
		);
	}
	const commentaireInsultant = new Commentaire(
		utilisateur2,
		"C'est stupide !"
	);
	const amandine38 = new Utilisateur("Amandine du 38");
	groupePrivé.ajouterMembre(amandine38);
	amandine38.rejoindreGroupe(groupePrivé);
	if (publication) publication.ajouterCommentaire(commentaireInsultant);
	const justiceLeague = new Groupe("La Justice League", true);
	const charlie = new Utilisateur("Charlie");
	groupePrivé.afficherContenu(charlie); // Cela devrait déclencher l'erreur on affiche pas le contenu privé à charlie
} catch (error) {
	console.error(`Erreur globale : ${error.message}`);
}
