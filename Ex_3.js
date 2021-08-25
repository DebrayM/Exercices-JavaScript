// Afficher tous les nombres pairs qui sont inférieurs à 20 //
// en commençant par 2 à l’aide de la boucle while. //

let i = 2; // index d'incrémentation //
let p = "", z = "", t = "", u = ""; //reçoit les nombres à afficher //
while (i<21) { 
    p = p +"(" + i +") ";
    i = i +2;
}
console.log("Boucle While. Les nombres paires < 20 sont : " + p);

// Afficher les 10 premiers entiers et leurs carrés avec la boucle de votre choix. //
for (let j=1; j<11; j+=1) {
    z = z +"(" + j + " - " + (j*j) + ") ";
}
console.log("Boucle for. Les nombres paires < 20 sont : " + z);

// Afficher 5 fois un numéro aléatoire. //
//fonction de calcul d'un nombre aléatoire //
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let x=1; x<6; x++) {
    t = t + "(" + entierAleatoire(1, 100) + ") ";
}
console.log('Voici 5 nombres aléatoires : ' + t);

// Afficher les entiers de 2 à 20 hormis le nombre 13. //
for (let v=2; v<21; v++) {
    if (v != 13) {
        u = u + "(" + v + ") ";
    }
}
console.log('Voici les entiers de 2 à 20 sauf 13 : ' + u);