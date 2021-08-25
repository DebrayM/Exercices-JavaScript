// tableau des notes des éléves //
var tab_notes = [12, 14, 18, 6, 9, 10, 15, 16, 17, 17, 14, 8, 7, 18, 12, 3, 12, 7, 19];
var s_note = 0; // permet de stocker la somme des notes
var aff_note = ""; //permet de stocker les notes supérieures à 10
var m_note = 0.00;
// -- calcul de la moyenne des notes -- //
// boucle de permettant de faire la somme des notes
for (let i=0; i<tab_notes.length; i++) {
    s_note = s_note + tab_notes[i];
    if (tab_notes[i] > 10) {
        aff_note = aff_note + "(" + tab_notes[i] + ") "
    }
}
m_note = s_note /  (tab_notes.length + 1);

console.log("La moyenne des notes est : " + m_note +
'\nLes notes supérieures à 10 sont : ' + aff_note);


