let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */

let ex = [
    tableauUn.map((valeur) => valeur**valeur), tableauUn.map((valeur) => valeur*10),
    tableauUn.map((valeur) => (valeur+2)/20), tableauUn.filter((valeur) => valeur >2),
    tableauUn.filter((valeur) => valeur % 2 === 0), tableauUn.filter((valeur) => valeur * 3 > 10),
    tableauDeux.map((valeur) => valeur.length), tableauDeux.map((valeur) => "l'element "+valeur + " a une longueur de "+valeur.length),
    tableauDeux.map((valeur) => valeur+valeur), tableauDeux.filter((valeur) => valeur.length > 2+2),
    tableauDeux.filter((valeur) => valeur.length % 2 === 0), tableauDeux.filter((valeur) => valeur.length - 3 > 10)
];
(() => {
    for (let i of ex){
        let affiche = document.createElement("p");
        affiche.innerHTML = i;
        document.body.append(affiche);
    }
})()