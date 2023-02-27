let valor = document.querySelector("#value");
let menos = document.querySelector(".menos");
let mas = document.querySelector(".mas");

let counterValue = 0;

mas.addEventListener("click", ()=>{
    counterValue++;
    valor.innerHTML= counterValue;
});

menos.addEventListener("click", ()=>{
    counterValue--;
    valor.innerHTML= counterValue;
});