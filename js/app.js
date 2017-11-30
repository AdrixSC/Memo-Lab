var  cards = document.getElementsByClassName('card');//trae los elementos correspondientes a la clase "car" HTML
console.log(cards);
for (var i = 0; i < cards.length; i++) {
  var item = cards[i];
//iterando sobre cada elemento del arreglo cards en la posicion i
//console.log([i]);
  item.classList.add('efects') // con add agregamos una classList a cada uno de los div de cards
//console.log([i]);
  item.addEventListener('click', rotation);
}
//Definiendo contadores para las cartas volteadas y los pares
var flipped = 0;
var pairs = 0;

function rotation (){ //validamos que la carta se pueda voltear (caso para ocultar las cartas)
  if (!this.classList.contains ('disabled')) { //si esta clase no contiene la clase disabled (clase imaginaria que nos sirve para hacer referencia de que se lo tenemos que quitar o poner)
    if(this.classList.contains ('rotation-efect'))}
    /*Agreamos el atributo selected para interactuar con los estilos, en caso de que no exista el atributo, se fija en true*/
  this.setAttribute("selected", !(this.getAttribute("selected")==="true"));
  this.classList.remove("rotation-efect");
  flipped--;
}

function hasEqualsClasses(firstElement, secondElement){
  var firstElementClasses = firstElement.classList.value.split(" "); //devuelve un arreglo de strings con todas las clases
  var secondElementClasses = secondElement.classList.value.split(" ");
  if (firstElementClasses.length == secondElementClasses.length)

}
