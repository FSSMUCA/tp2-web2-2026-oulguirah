let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];
for (let i = 0; i < 10; i++) {
    let valeur = valeurs[i];
    let affiche = String(valeur);
    
    let sort = "";
    if (valeur) {
        sort = "truthy";
    } else {
        sort = "falsy";
    }
    console.log(`  ${affiche} --> ${sort}`);
}