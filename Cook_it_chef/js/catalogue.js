/* ***************************************************** */
/* ********* FONCTION QUI LOOP POUR CHAQUE RECETTE ***** */
/* ***************************************************** */

//initialistion
//  le i represente le numero de la recette de 0 à 9 
i = 0;
// fonction note
function note(i) {
  nsomme = 0;
  for (j = 0; j < recettesDB[i].comments.length; j++) {
    nsomme = nsomme + recettesDB[i].comments[j].rating;
  }
  return (nsomme / recettesDB[i].comments.length);
}

for (let i = 0; i < 10; i++) {

  // declaration des chaines de caractaires
  var Pnote = "☙ Note Globale : ";
  var Pnom = "☙ Nom : ";
  var Pcategorie = "☙ Categorie : ";
  var Ppays = "☙ Pays : ";
  var Pdurée = "☙ Durée : ";


  // récupérer la description de la recette
  var nom = recettesDB[i].name;
  Pnom += nom;
  var cat = recettesDB[i].category;
  Pcategorie += cat;
  var pays = recettesDB[i].country;
  Ppays += pays;
  var duree = recettesDB[i].duration;
  Pdurée += duree;
  var notee = note(i);
  var n = " / 5";
  Pnote += notee + n;


  // sélectionner les éléments HTML où on souhaite afficher les résultats 
  //  le i represente le numero de la recette de 0 à 9 
  var afficherN = document.getElementById("nom-recette" + i);
  var afficherC = document.getElementById("categorie-recette" + i);
  var afficherpays = document.getElementById("pays-recette" + i);
  var afficherduree = document.getElementById("duree-recette" + i);
  var affichernote = document.getElementById("note-recette" + i);


  // insérer les données dans les éléments HTML correspondants
  afficherN.innerHTML = Pnom;
  afficherC.innerHTML = Pcategorie;
  afficherpays.innerHTML = Ppays;
  afficherduree.innerHTML = Pdurée;
  affichernote.innerHTML = Pnote;

  //incrementation 

  const r = document.getElementById("r" + (i + 1));

  r.addEventListener("click", function () {
    window.location.href = "details.html?recette=" + recettesDB[i].id;
  });


  //on boucle de 0 à 9
}

/* ***************************************************** */
/* **************** recherche : par nom   ************** */
/* ***************************************************** */


function filterRecipes() {
  let recherche = document.getElementById("search-input").value.trim().toUpperCase();
  let container = document.getElementById("wrapper-div2");
  container.innerHTML = "";

  for (let i = 0; i < recettesDB.length; i++) {
    let larecette = recettesDB[i].name.toUpperCase();

    if (larecette.includes(recherche)) {
      let Pnote = "☙ Note Globale : " + note(i) + " / 5";
      let Pnom = "☙ Nom : " + recettesDB[i].name;
      let Pcategorie = "☙ Catégorie : " + recettesDB[i].category;
      let Ppays = "☙ Pays : " + recettesDB[i].country;
      let Pdurée = "☙ Durée : " + recettesDB[i].duration;

      let recipeContainer = document.createElement("div");
      recipeContainer.classList.add("row", "clearfix");

      let recipeButton = document.createElement("button");
      recipeButton.classList.add("col");
      recipeButton.addEventListener("click", function() {
        window.location.href = "details.html?recette=" + recettesDB[i].id;
      });

      let recipeImage = document.createElement("img");
      recipeImage.setAttribute("src", "../assets/image/" + recettesDB[i].id + ".png");

      let recipeDescription = document.createElement("div");
      recipeDescription.classList.add("description");

      let recipeName = document.createElement("p");
      recipeName.textContent = Pnom;

      let recipeCategory = document.createElement("p");
      recipeCategory.textContent = Pcategorie;

      let recipeCountry = document.createElement("p");
      recipeCountry.textContent = Ppays;

      let recipeDuration = document.createElement("p");
      recipeDuration.textContent = Pdurée;

      let recipeRating = document.createElement("p");
      recipeRating.textContent = Pnote;

      recipeDescription.appendChild(recipeName);
      recipeDescription.appendChild(recipeCategory);
      recipeDescription.appendChild(recipeCountry);
      recipeDescription.appendChild(recipeDuration);
      recipeDescription.appendChild(recipeRating);

      recipeButton.appendChild(recipeImage);
      recipeButton.appendChild(recipeDescription);

      recipeContainer.appendChild(recipeButton);
      container.appendChild(recipeContainer);
    }
  }
}
//  click
function handleSearch(event) {
  if (event.key === "Enter") {
    filterRecipes();
    event.preventDefault();
  }
}
