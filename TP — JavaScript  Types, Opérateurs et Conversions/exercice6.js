let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

const variables = [
    { nom: "nom", valeur: nom },
    { nom: "age", valeur: age },
    { nom: "ville", valeur: ville },
    { nom: "score", valeur: score },
    { nom: "actif", valeur: actif }
];

const parDefaut = "valeur par défaut";

console.log("--- Partie A : Opérateur ?? ---");
for (let i = 0; i < variables.length; i++) {
    let v = variables[i]; 
    let resultat = v.valeur ?? parDefaut;
    
    let affichage = (resultat === "") ? '""' : resultat;
    console.log(`${v.nom.padEnd(6)} ?? "${parDefaut}"\t -> ${affichage}`);
}

console.log("\n--- Partie B : Opérateur || ---");
let j = 0;
while (j < variables.length) {
    let v = variables[j];
    let resultat = v.valeur || parDefaut;
    
    let affichage = (resultat === "") ? '""' : resultat;
    console.log(`${v.nom.padEnd(6)} || "${parDefaut}"\t -> ${affichage}`);
    j++;
}

console.log("\n--- Partie C : Comparaison ---");
for (let k = 0; k < variables.length; k++) {
    let v = variables[k];
    let resNullish = v.valeur ?? parDefaut;
    let resOr = v.valeur || parDefaut;
    
    let statut = (resNullish === resOr) ? "même résultat" : "résultat différent";
    console.log(`${v.nom.padEnd(6)} : ?? et || -> ${statut}`);
}