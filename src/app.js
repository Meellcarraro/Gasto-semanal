const nombre_gasto = document.getElementById('nombre_gasto'),
    cantidad_gasto = document.getElementById('cantidad_gasto'),
    boton = document.getElementById('btn-registro'),
    boton2 = document.getElementById('btn-inicio'),
    contenedor = document.getElementById('vista_gastos'),
    presupuesto = document.getElementById('presupuesto_monto'), 
    restante = document.getElementById('restante_monto'),
    ingresoLimite = document.getElementById('cantidad-limite');




let nuevoGasto = (n, c)=>{
    // console.log('me estoy ejecutando');
   let item_gasto =  document.createElement('div');
   item_gasto.setAttribute('class', 'gasto_item');


   let item_nombre = document.createElement('p');
    item_nombre.setAttribute('class', 'item_nombre');
    let contenido_n = document.createTextNode(`${n}`);
    item_nombre.appendChild(contenido_n);

    let item_monto = document.createElement('p');
    item_monto.setAttribute( 'class', 'item_monto');
    let contenido_m = document.createTextNode(`$  ${c}`);
    item_monto.appendChild(contenido_m);

    item_gasto.appendChild(item_nombre);
    item_gasto.appendChild(item_monto);
    contenedor.appendChild(item_gasto);

};



let limpiar = ()=>{
    nombre_gasto.value = "";
    cantidad_gasto.value = "";
};

let limite = 36000;
presupuesto.textContent = `Presupuesto : $  ${limite}`;

let disponible = limite;
restante.textContent = `Restante : $ ${disponible}`;
// let gastos = 0;

boton.addEventListener('click', function(){
    let  nombre = nombre_gasto.value ;
    let cantidad = parseFloat(cantidad_gasto.value) ;

    if(nombre!="" &  cantidad!=""){
        nuevoGasto(nombre, cantidad);
         limpiar();

         disponible -= cantidad;
         restante.textContent = `Restante : $ ${disponible}`;

    };
   
   
});




