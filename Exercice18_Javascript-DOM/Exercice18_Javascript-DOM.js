const games = [
    { month: "Janvier", game: "Cyber Race", description: "Jeu de course futuriste" },
    { month: "Février", game: "Pixel Quest", description: "RPG rétro-classique" },
    { month: "Mars", game: "Block Master", description: "Puzzle addictif" },
    { month: "Avril", game: "Sky Pilot", description: "Simulateur de vol" },
    { month: "Mai", game: "Dungeon Crawl", description: "Action-aventure" },
    { month: "Juin", game: "Mystic Lands", description: "Jeu d'exploration" },
    { month: "Juillet", game: "Battle Arena", description: "Combat en 1v1" },
    { month: "Août", game: "Escape Room", description: "Jeu de réflexion" },
    { month: "Septembre", game: "Neural Rush", description: "Jeu d'arcade" },
    { month: "Octobre", game: "Horror House", description: "Jeu d'horreur" },
    { month: "Novembre", game: "Festival Games", description: "Mini-jeux variés" },
    { month: "Décembre", game: "Winter Sports", description: "Jeux d'hiver" }
];

const calendar = document.getElementById("calendar");

// Parcourir le tableau et créer un élément pour chaque mois
for (let i = 0; i < games.length; i++) {
    // Créer les éléments
    const monthDiv = document.createElement("div");
    monthDiv.classList.add("month");
    
    const h3 = document.createElement("h3");
    h3.innerText = games[i].month;
    
    const gameTitle = document.createElement("p");
    gameTitle.innerText = "🎮 " + games[i].game;
    gameTitle.style.fontWeight = "bold";
    
    const description = document.createElement("p");
    description.innerText = games[i].description;
    
    // Ajouter au DOM
    monthDiv.appendChild(h3);
    monthDiv.appendChild(gameTitle);
    monthDiv.appendChild(description);
    
    calendar.appendChild(monthDiv);
}
