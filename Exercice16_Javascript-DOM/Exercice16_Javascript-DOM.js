const CAPACITE_DE_LETAGERE = 10;
      let jeuxEnStock = Number(
        prompt("Combien de jeux vidéo avez-vous reçus en stock aujourd'hui ?")
      );

      if (jeuxEnStock > 0) {
        let etageresRemplies = Math.floor(jeuxEnStock / CAPACITE_DE_LETAGERE);
        let jeuxRestants = jeuxEnStock % CAPACITE_DE_LETAGERE;

        console.log(`Étagères remplies : ${etageresRemplies}`);
        console.log(`Jeux restants : ${jeuxRestants}`);
      } else {
        console.log("Aucun jeu n'est à stocker aujourd'hui.");
      }