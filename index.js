

const display = document.querySelector('.display');
let calculo=[];
let conta=1;
let entradaClick=[];
display.value=0;

const enteringAKey =(e)=>{ 
  entradaClick = [...entradaClick, display.value = e.target.innerText];
  display.value = entradaClick =entradaClick.join('');
};

const operator = operador => {
  entradaClick = [...entradaClick, operador ]
  display.value = entradaClick =entradaClick.join('');
} ; 

const resultFunction = () => { 
  entradaClick =  [eval(entradaClick)]
 display.value = entradaClick;
}

const operatorSpeciais =operadorSpecial => { 
  if(entradaClick.length >0  && entradaClick){ 
    console.log("entrou click")
    entradaClick = [...entradaClick, operadorSpecial ].join('')
    entradaClick= [eval(entradaClick)]
    console.log(operadorSpecial)
    console.log(entradaClick)
    display.value =entradaClick
  }else {
    console.log("nao entrou click")
    display.value= "Error NAN"
  }

}

const reset = () =>  {
  entradaClick = [];
  display.value=0; 
}


    // calculo = [...calculo , entradaClick ];
    // entradaClick = [];
    // // console.log( [...calculo, operador] );
    // // display.value = eval([...calculo].join(''));
    // // calculo = eval([...calculo].join(''));
    // return calculo = [...calculo, operador] ;
    
    // //    return calculo = [...calculo, operador]


//     calculo = [...calculo , entradaClick ];
//     entradaClick = [];
//     console.log('32', calculo);
//     console.log('calculo spread operator',...calculo)
//     calculo = [...calculo].join('')
//     console.log('36', calculo);
//     calculo = [eval(calculo)];
//     display.value =calculo;
    // console.log(calculo);
//     return calculo =[] ;




//   calculo = [...calculo , entradaClick ];
//   entradaClick = [];
//   console.log('49', [...calculo, operadorSpecial] );
//   calculo = [...calculo, operadorSpecial].join('');
//   calculo = eval(calculo);
//   display.value = calculo;
//   return calculo = [calculo] ;







//   display.value = calculo =[];



// if(entradaClick === '±'){ conta *=-1 }
// if(entradaClick === '÷'){ entradaClick = '/' }
// console.log(" Line13 entering", entradaClick);
// console.log(" Line13 entering", conta);


