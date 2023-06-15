function randomBetweenOneAndThree() {
  // Returns a random number between 1 and 3
  return Math.floor(Math.random() * 3) + 1;
}

const a = randomBetweenOneAndThree();
const b = randomBetweenOneAndThree();
const c = randomBetweenOneAndThree();


var img1 = document.createElement('img');
img1.setAttribute('src','../assets/Dessert/'+a+'.jpg');
var div =document.getElementById('image1');
div.appendChild(img1);

var img2 = document.createElement('img');
img2.setAttribute('src','../assets/Entrée/'+b+'.jpg');
var div =document.getElementById('image2');
div.appendChild(img2);

var img3 = document.createElement('img');
img3.setAttribute('src','../assets/Plat/'+c+'.jpg');
var div =document.getElementById('image3');
div.appendChild(img3);

