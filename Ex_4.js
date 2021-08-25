// Réaliser les tables de multiplications jusqu’à 10 //
// et l'afficher dans un tableau HTML //

let tab = new Array();

// construction du tableau de référence//
for (let i=0; i<10; i++) {
    tab[i] = i+1;
}

// Création d'un tableau avec document write et table, tr et td //
document.write("<table border=2 cellpadding=10>");

// création des lignes : il y a 10 lignes à créer //
let lgn = 1, col = 1, n=0;
let contenu = ""; // stockage temporaire du contenu d'une ligne
do {
    // création des colonnes : il y a 10 colonnes à créer //
    col = 1;
    contenu = "";
    do {
        n = col * tab[lgn-1];
        contenu = contenu + "<td>" + n +"</td>";
        col = col + 1;
    } while (col < 11);
    document.write("<tr >" + contenu + "</tr>");
    lgn = lgn + 1;
} while (lgn < 11);
document.write("</table>");