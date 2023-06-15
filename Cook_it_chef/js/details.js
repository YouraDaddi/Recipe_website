const params = new URLSearchParams(window.location.search);
const id = params.get("recette");
console.log(id);
// fonction note generalle
function note(i) {
    nsomme = 0;
    for (j = 0; j < recettesDB[i].comments.length; j++) {
        nsomme = nsomme + recettesDB[i].comments[j].rating;
    }
    return (nsomme / recettesDB[i].comments.length);
}

//description de la recette
var Pnom = "☙ ";
nom = document.getElementById("titre");
nom.innerHTML = Pnom + recettesDB[id - 1].name;

var Pcategorie = " ☆ Categorie : ";
categorie = document.getElementById("cat");
categorie.innerHTML = Pcategorie+recettesDB[id - 1].category;

var Ppays = "☆ Pays : ";
pays = document.getElementById("pay");
pays.innerHTML = Ppays+recettesDB[id - 1].country;

var Pnote = "☆ Note Globale : ";
notee = document.getElementById("note");
var n = " / 5";
notee.innerHTML = Pnote+note(id - 1) + n;

var Pdurée = "☆ Durée : ";
duree = document.getElementById("dur");
duree.innerHTML = Pdurée+recettesDB[id - 1].duration;

// *********** les ingrediants en une liste
det1 = document.getElementById("ingre");
ingredient = document.createElement("ul");
for (j = 0; j < recettesDB[id - 1].ingredients.length; j++) {
    ing = document.createElement("li");
    ing.innerHTML = recettesDB[id - 1].ingredients[j];
    ingredient.appendChild(ing);
}
det1.appendChild(ingredient);


// *********** les etapes en une liste
det2 = document.getElementById("etapes");
instruction = document.createElement("ol");
for (j = 0; j < recettesDB[id - 1].instructions.length; j++) {
    ins = document.createElement("li");
    ins.innerHTML = recettesDB[id - 1].instructions[j];
    instruction.appendChild(ins);
}
det2.appendChild(instruction);


// ********* fonction affiche image
var img = document.createElement('img');
img.setAttribute('src','../assets/image/'+id+'.png');
var div =document.getElementById('image');
div.appendChild(img);


// *********** les commentaire dans un div

for (j = 0; j < recettesDB[id - 1].comments.length; j++) {
    var comment = document.createElement("div");
    comment.classList.add("comment");
  
    var user = document.createElement("h4");
    user.classList.add("user");
    user.textContent = recettesDB[id - 1].comments[j].user;
  
    var rating = document.createElement("p");
    rating.classList.add("rating");
    rating.textContent = "Note : " + recettesDB[id - 1].comments[j].rating;
  
    var content = document.createElement("p");
    content.classList.add("content");
    content.textContent = recettesDB[id - 1].comments[j].content;
  
    comment.appendChild(user);
    comment.appendChild(rating);
    comment.appendChild(content);
  
    commentaire.appendChild(comment);
  }
  

