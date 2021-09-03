const   ingreso  = document.getElementById('ingreso'),
        btn1 = document.getElementById('btn1'),
        avisoLimite = document.getElementById('aviso-limite'),
        btn2 = document.getElementById('btn2'),
        containerRegistro = document.getElementById('container-registro'),
        containerInicio = document.getElementById('container-inicio'),
        presupuesto = document.getElementById('presupuesto'),
        restante = document.getElementById('restante'),
        vistaGasto = document.getElementById('vista_gastos');

let addlimite= ()=>{
    if(ingreso.value>0 & ingreso.value!=''){
        console.log('monto aceptado');
        return ingreso.value;
    } else{
        console.log('monto no aceptado');
    }
}

let addValues = (x)=>{
    presupuesto.textContent = `Presupuesto : $ ${x}`;
    restante.textContent = `Restante : $ ${x}`;
}

btn1.addEventListener('click', ()=>{
    let limite = addlimite();
    if(limite!=undefined){
        console.log('puedo entrar a la otra parte');
        avisoLimite.classList.remove('error-limite');
        ingreso.classList.remove('error-limite');
        containerInicio.classList.add('active');
        containerRegistro.classList.add('active');
        addValues(limite);
        
    }else{
        avisoLimite.classList.add('error-limite');
        ingreso.classList.add('error-limite')
    }
    console.log(`el valor de limite es ${limite}`);
} )
