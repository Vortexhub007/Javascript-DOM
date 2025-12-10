// Récupération des éléments du DOM
const form = document.querySelector("form");
const quantityInput = document.getElementById("quantity");
const unitPriceInput = document.getElementById("unitPrice");
const taxInput = document.getElementById("tax");
const resultDiv = document.querySelector(".result");

// Fonction de calcul
function calculateCart(e) {
    if (e) e.preventDefault(); // Empêche le rechargement du formulaire

    const quantity = parseInt(quantityInput.value);
    const unitPriceHT = parseFloat(unitPriceInput.value);
    const taxRate = parseFloat(taxInput.value) / 100;

    // Calcul TTC
    const totalHT = quantity * unitPriceHT;
    const totalTTC = totalHT * (1 + taxRate);

    // Affichage
    resultDiv.textContent = `Total TTC : ${totalTTC.toFixed(2)} €`;

    // Ajoute la classe active pour le style
    resultDiv.classList.add("active");
}

// Écouteur sur le formulaire
form.addEventListener("submit", calculateCart);

// Calcul automatique dès que la quantité change
quantityInput