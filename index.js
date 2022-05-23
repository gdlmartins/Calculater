const display = document.querySelector(".display");
let calculo = [];
let conta = 1;
let entradaClick = [];
display.value = 0;

const enteringAKey = (e) => {
  const input = e.target.innerText;
  
  if (input === ".") {
    entradaClick = entradaClick.split("")
    if (entradaClick.find((item) => item === ".")) {
      console.log(".", entradaClick)
      input = "";
    }
    entradaClick = entradaClick.join("");
  }
  entradaClick = [...entradaClick,  input];
  console.log("16", entradaClick)
  display.value = entradaClick = entradaClick.join("");
};
const operator = (operador) => {
  entradaClick = [...entradaClick, operador];
  console.log("19", entradaClick)
  display.value = entradaClick = entradaClick.join("");
};
const resultFunction = () => {
  entradaClick = [eval(entradaClick)];
  display.value = entradaClick;
};
const operatorSpeciais = (operadorSpecial) => {
  if (entradaClick.length > 0) {
    entradaClick = [...entradaClick, operadorSpecial].join("");
    entradaClick = [eval(entradaClick)];
    display.value = entradaClick;
  } else {
    display.value = "Error NAN";
  }
};
const reset = () => {
  entradaClick = [];
  display.value = 0;
};
