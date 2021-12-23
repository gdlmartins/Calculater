

const display = document.querySelector('.display');
let calculo=[];
let conta=1;
let entradaClick=[];
display.value=0;

const enteringAKey =(e)=>{ 
  entradaClick = [...entradaClick, display.value = e.target.innerText];
  console.log(" Line10 entering", entradaClick);
  display.value = entradaClick = entradaClick.join('');
  

};


const operator = operador => {

    calculo = [...calculo , entradaClick ];
    entradaClick = [];
    // console.log( [...calculo, operador] );
    // display.value = eval([...calculo].join(''));
    // calculo = eval([...calculo].join(''));
    return calculo = [...calculo, operador] ;
    
    //    return calculo = [...calculo, operador]
    
} ; 


const resultFunction = () => { 
    calculo = [...calculo , entradaClick ];
    entradaClick = [];
    console.log('32', calculo);
    console.log('calculo spread operator',...calculo)
    calculo = [...calculo].join('')
    console.log('36', calculo);
    calculo = [eval(calculo)];
    display.value =calculo;
    console.log(calculo);
    return calculo =[] ;

}


const operatorSpeciais =(operadorSpecial) => { 

  calculo = [...calculo , entradaClick ];
  entradaClick = [];
  console.log('49', [...calculo, operadorSpecial] );
  calculo = [...calculo, operadorSpecial].join('');
  calculo = eval(calculo);
  display.value = calculo;
  return calculo = [calculo] ;

}

const reset = () =>  {
  display.value = calculo =[];
  return calculo  ;
}



// if(entradaClick === '±'){ conta *=-1 }
// if(entradaClick === '÷'){ entradaClick = '/' }
// console.log(" Line13 entering", entradaClick);
// console.log(" Line13 entering", conta);


