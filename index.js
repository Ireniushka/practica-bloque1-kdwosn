// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png"). 

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: 'white',
    hex: '#ffffff'
  },
  {
    colorName: 'red',
    hex: '#ff0000'
  },
  {
    colorName: 'orange',
    hex: '#ffa500'
  },
  {
    colorName: 'yellow',
    hex: '#ffff00'
  },
  {
    colorName: 'orchid',
    hex: '#da70d6'
  },
  {
    colorName: 'pink',
    hex: '#ffc0cb'
  },
  {
    colorName: 'green',
    hex: '#008000'
  },
  {
    colorName: 'silver',
    hex: '#c0c0c0'
  }
];

let list = document.getElementsByClassName("color-list").item(0);

function addElementsToList(lista){

  for(let i= 0; i<colorList.length; i++){
    let li = document.createElement("li");
    li.classList.add("color-item");

    if(i%2 ==1){
      li.classList.add("color-item--odd");
    }

    let div1 = document.createElement("div");
    div1.classList.add("color-name");
    div1.innerText= "Color: "+colorList[i].colorName;
    div1.addEventListener("click", ()=>clickDiv(colorList[i].colorName, event, true));
    li.append(div1);

    let div2 = document.createElement("div");
    div2.classList.add("color-show");
    div2.innerText="Muestra";
    div2.style.backgroundColor = colorList[i].hex;
    div2.addEventListener("click", ()=>clickDiv(colorList[i].colorName, event, true));
    li.append(div2);

    let button1 = document.createElement("button");
    button1.classList.add("color-set");
    button1.innerText = "Next Item Color";
    button1.addEventListener("click", ()=> clickBtn1(colorList[i].colorName, colorList[i].hex, event), false);
    li.append(button1);

    let button2 = document.createElement("button");
    button2.classList.add("color-set");
    button2.innerText = "Page Color";
    button2.addEventListener("click", ()=> clickBtn2(colorList[i].hex, event), false);
    li.append(button2);

    lista.append(li);
  }

  let clickDiv = (color, event)=> {
    event.stopPropagation();
    alert("Pulsaste en el color: " + color);
  };
  
  let clickBtn1 = (name, color, event) => {
    event.stopPropagation();
    let listChildren = lista.children;
    for(let i =1; i<listChildren.length; i++){
      let child = listChildren.item(i);
      if(child.getElementsByTagName("div").item(0).textContent == "Color: "+ name){
        i == colorList.length? 
          child=listChildren.item(1).style.backgroundColor = color:
          child.nextSibling.style.backgroundColor = color;
      }
    }
  };

  let clickBtn2 = (color, event) => {
    event.stopPropagation();
    document.getElementsByTagName("body").item(0).style.backgroundColor = color;

  }

  let clickBody = () => alert("body");

  document.getElementsByTagName("body").item(0).addEventListener("click", clickBody, false);

}

addElementsToList(list);
