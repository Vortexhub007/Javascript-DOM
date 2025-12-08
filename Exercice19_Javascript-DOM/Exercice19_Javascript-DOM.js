// Sélection des éléments du DOM
const button = document.querySelector("#button");
const compteur = document.querySelector("#compteur");
let count = 0;

// Définition de la fonction addOne
function addOne() {
    count++;
    compteur.innerText = count + (count === 1 ? " like" : " likes"); // Ajout de condition pour le pluriel
}

// Attachement de l'écouteur d'événements
button.addEventListener("click", addOne);
