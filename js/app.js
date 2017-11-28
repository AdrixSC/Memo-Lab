var  cards = document.getElementsByClassName('card');//trae los elementos correspondientes a la clase "car" HTML
console.log(cards);
for (var i = 0; i < cards.length; i++) {
  var item = cards[i];
//iterando sobre cada elemento del arreglo cards en la posicion i
//console.log([i]);
  item.classList.add('efects') // con add agregamos una classList a cada uno de los div de cards
//console.log([i]);
  item.addEventListener('mouseover', rotation);
}

function rotation (){ // 
  if (this.classList.contains ('rotation-efect')) {
    this.classList.remove ('rotation-efect');
  }
  else {
    this.classList.add('rotation-efect');
  }
}
