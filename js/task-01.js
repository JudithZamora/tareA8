var categories = document.querySelectorAll(".item").length;
var cat1 = document.querySelector(".item").childNodes[1].textContent;
var cat2 = document.getElementsByTagName("h2")[1].textContent;
var cat3 = document.getElementsByTagName("h2")[2].textContent;

let message = `Number of categories: ${categories} 
Category: ${cat1}
Elements: 
Category: ${cat2}
Elements: 
Category: ${cat3}
Elements:
`
console.log(message);



/*  
var el = document.querySelector(".item");
var as = el.getElementsByTagName("li").length;
console.log(as);

var els = document.querySelector(".item");
var li0 = el.getElementsByTagName("li")[0].textContent;
var li1 = el.getElementsByTagName("li")[1].textContent;
var li2 = el.getElementsByTagName("li")[2].textContent;
var li3 = el.getElementsByTagName("li")[3].textContent;

console.log(li0);
console.log(li1);
console.log(li2);
console.log(li3);
*/

