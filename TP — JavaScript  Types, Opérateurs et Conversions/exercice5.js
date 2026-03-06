let nombres = [
    0, 
    NaN, 
    Infinity, 
    -Infinity, 
    42, 
    3.14, 
    Number.MAX_SAFE_INTEGER + 1, 
    -0
];

for (let i = 0; i < 8; i++) {
    let v = nombres[i];
    let label = "";

    if (Number.isNaN(v)) {
        label = "INVALIDE";
    } 
    else if (v === Infinity || v === -Infinity) {
        label = "INFINI";
    } 
    else if (v === 0 && (1 / v === -Infinity)) {
        label = "ZERO NEGATIF";
    } 
    else if (Number.isSafeInteger(v)) {
        label = "ENTIER SUR";
    } 
    else if (Number.isInteger(v) && !Number.isSafeInteger(v)) {
        label = "ENTIER HORS LIMITES";
    } 
    else {
        label = "DECIMAL";
    }

    console.log(`${v} -> ${label}`);
}