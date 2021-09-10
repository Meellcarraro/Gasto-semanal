const   ingreso  = document.getElementById('ingreso'),
        btn1 = document.getElementById('btn1'),
        avisoLimite = document.getElementById('aviso-limite'),
        btn2 = document.getElementById('btn2'),
        containerRegistro = document.getElementById('container-registro'),
        containerInicio = document.getElementById('container-inicio'),
        presupuesto = document.getElementById('presupuesto'),
        restante = document.getElementById('restante');
        


//INGRESO DE MONTO DE PRESUPUESTO //


let addlimite= ()=>{ //VERIFICO EL MONTO INGRESADO
    if(ingreso.value>0 & ingreso.value!=''){
        console.log('monto aceptado');
        //elimino los mensajes de error
        avisoLimite.classList.remove('error-limite'); 
        ingreso.classList.remove('error-limite');

        containerInicio.classList.add('active');  //se oculta el inicio
        containerRegistro.classList.add('active'); //muestra el sistema de ingreso de gastos
        return ingreso.value;  //si cumple retorna el valor y lo establece como limite
    } else{
        console.log('monto no aceptado');
        avisoLimite.classList.add('error-limite');
        ingreso.classList.add('error-limite');
    }
}

//ESTABLECIENDO LOS VALORES DEL ESTADO//

let addValues = (x)=>{
    presupuesto.textContent = `Presupuesto : $ ${x}`;
    restante.textContent = `Restante : $ ${x}`;
}

let valor  = 0; //VARIABLE QUE REFLEJA EL DINERO RESTANTE


btn1.addEventListener('click', ()=>{
    let limite = addlimite();   //VARIABLE QUE REFLEJA EL PRESUPUESTO
    addValues(limite);

    valor = limite ; //establezco el limite como el valor inicial de restante
    console.log(`valor ingresado ${valor} `);
    // console.log(`el valor de limite es ${limite}`);
} )

//INGRESO DE GASTOS//

let limpiar = ()=>{
    //limpio los valores de los inputs

    nombre_gasto.value = '';
    cantidad_gasto.value = '';
}

//creo el item gasto
let nuevoGasto = (n,c)=>{
    const vistaGasto = document.getElementById('vista_gastos');

    let item = document.createElement('div');
    item.setAttribute('class', 'gasto_item');

    let item_nombre = document.createElement('p');
    item_nombre.setAttribute('class', 'item_nombre');
    let contenido_n = document.createTextNode(n);
    item_nombre.appendChild(contenido_n);

    let item_monto = document.createElement('p');
    item_monto.setAttribute('class', 'item_monto');
    let contenido_m = document.createTextNode(`$ ${c}`);
    item_monto.appendChild(contenido_m);

    item.appendChild(item_nombre);
    item.appendChild(item_monto);
    vistaGasto.appendChild(item);

    console.log('creando nodo');
}



btn2.addEventListener('click', ()=>{
    const nombre_gasto = document.getElementById('nombre_gasto'),
        cantidad_gasto = document.getElementById('cantidad_gasto');
    
    let nombre = nombre_gasto.value;
    let cantidad = cantidad_gasto.value;

    if(nombre!='' & cantidad!= ''){ //verifico se ingreso algo en los inputs
        nuevoGasto(nombre, cantidad);

        valor -= cantidad; //a medida de que se generen gastos va decreciendo el restante
        restante.textContent = `Restante : $ ${valor}`; //actualizo el valor de restante
        nombre_gasto.classList.remove('error-gasto');
        cantidad_gasto.classList.remove('error-gasto');
        

    }else{

        nombre_gasto.classList.add('error-gasto');
        cantidad_gasto.classList.add('error-gasto');
    }
    limpiar();

    

})
