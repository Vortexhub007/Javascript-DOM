let conteneur = document.getElementById("displayContainer");
let numeroDuJeu = prompt("Entrez le numéro du jeu (1, 2, 3 ou 4):");

let jeux = ["Space Adventure", "Castle Quest", "Mystery Island", "Robot Wars"];
console.log(jeux);

switch (numeroDuJeu) {
    case "1":
        conteneur.textContent = jeux[0];
        break;
    case "2":
        conteneur.textContent = jeux[1];
        break;
    case "3":
        conteneur.textContent = jeux[2];
        break;
    case "4":
        conteneur.textContent = jeux[3];
        break;
    default:
        conteneur.textContent = "Numéro de jeu non reconnu.";
}