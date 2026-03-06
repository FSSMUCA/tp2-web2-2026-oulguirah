let a = [
    [0, ""], [0, "0"],
    [0, false], ["", false],
    [null, undefined], [null, false],
    [NaN, NaN], [1, "1"],
    [" \t\n ", 0]
];

let defrent = 0; 

for (let t = 0; t < a.length; t++) {
    
    let x = a[t][0]; 
    let y = a[t][1];

    let oui = (x == y);
    let non = (x === y);

    let affichX = typeof x === "string" ? `"${x}"` : x;
    let affichY = typeof y === "string" ? `"${y}"` : y;
    console.log(`${affichX} == ${affichY}\t -> ${oui}    |   ${affichX} === ${affichY}\t -> ${non}`);

    if (oui !== non) {
        defrent++;
    }
}

console.log("---");
console.log(`${defrent} paire(s) où == et === donnent des résultats différents`);