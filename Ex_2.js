// Afficher les entiers de 1 à 10 à l'aide d'une boucle while.//
let i = 1; // index d'incrémentation
let p = "", z = ""; //reçoit les nom à afficher
while (i<11) {
    p = p +"(" + i +") ";
    i = i +1;
}
console.log("Boucle While. Les nombres entiers sont : " + p);
// Afficher les entiers de 1 à 10 à l'aide d'une boucle for.//
for (let j=1; j<11; j++) {
    z = z +"(" + j +") ";
}
console.log("Boucle for. Les nombres entiers sont : " + z);