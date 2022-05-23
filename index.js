const display = document.querySelector(".display");
let calculo = [];
let conta = 1;
let entradaClick = [];
display.value = 0;

const enteringAKey = (e) => {
  const input = e.target.innerText;
  if (input === ".") {
    if (entradaClick.find((item) => item === ".")) {
      input = "";
    }
  }

  entradaClick = [...entradaClick, (display.value = input)];
  display.value = entradaClick = entradaClick.join("");
};
const operator = (operador) => {
  entradaClick = [...entradaClick, operador];
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
