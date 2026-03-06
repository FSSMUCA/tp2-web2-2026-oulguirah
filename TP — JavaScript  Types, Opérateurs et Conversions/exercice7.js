let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = "PROMO10";
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal = prix * quantite;

let montantReduction = (codePromo ?? false) && estMembre 
    ? (sousTotal * reductionPourcentage) / 100 
    : 0;

let totalFinal = sousTotal - montantReduction;

let paiementAccepte = soldeCompte >= totalFinal;
let statut = paiementAccepte ? "Paiement accepté" : "Solde insuffisant";
let soldeFinal = paiementAccepte ? soldeCompte - totalFinal : soldeCompte;

console.log("===== RÉCAPITULATIF =====");
console.log(`Produit   : ${nomProduit}`);
console.log(`Quantité  : ${quantite}`);
console.log(`Prix unit.: ${prix} MAD`);
console.log(`Sous-total: ${sousTotal} MAD`);
console.log(`Réduction : ${montantReduction} MAD`);
console.log(`Total     : ${totalFinal} MAD`);
console.log(`Statut    : ${statut}`);
console.log(`Solde     : ${soldeFinal} MAD`);
console.log("=========================");