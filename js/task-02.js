const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let listas = document.createElement('li');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
let li5 = document.createElement('li');

listas.classList.add('item');

let t1 = document.createTextNode('Potatoes');
let t2 = document.createTextNode('Mushrooms');
let t3 = document.createTextNode('Garlic');
let t4 = document.createTextNode('Tomatos');
let t5 = document.createTextNode('Herbs');
let t6 = document.createTextNode('Condiments');

listas.appendChild(t1);
li1.appendChild(t2);
li2.appendChild(t3);
li3.appendChild(t4);
li4.appendChild(t5);
li5.appendChild(t6);

document.body.appendChild(listas)
document.body.appendChild(li1)
document.body.appendChild(li2)
document.body.appendChild(li3)
document.body.appendChild(li4)
document.body.appendChild(li5)