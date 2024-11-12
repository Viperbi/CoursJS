//Exo pizza : 
let id = "33032"; //Numéro de commande
let nombre = "1"; //Nombre d'article dans la commande
let taille = "medium"; //Taille de la pizza
let pizza = "reine"; //Pizza commandé
let nom = "Gontrant"; //Nom du client
let prix = "10,50€"; //Prix de la commande
let time = "20h30"; //heure et date de livraison
let adresse = "3 rue des fleurs"; //Adresse de livraison
let blague = 'Qu\'est ce qu\'une pizza dit à une autre pizza qui lui demandait\ndes conseil ? "Suis ta pâte et tout ira bien.' //Blague à rajouter à la fin du message de la commande
let SumUpOrderPhrase = 'Bonjour ' + nom + ' tu as commandé ' + nombre + ' ' + pizza + ' de taille ' + taille + ' pour ' + time + ' au ' + adresse + ' pour un total de ' + prix + '. Ton numéro de commande est le ' + id + '.\n' + blague;
console.log(SumUpOrderPhrase);