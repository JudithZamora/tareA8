
const nombre = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

nombre.addEventListener("input", (event) => {
    if (nombre) {
        output.textContent = event.currentTarget.value;
    }
  });

 

