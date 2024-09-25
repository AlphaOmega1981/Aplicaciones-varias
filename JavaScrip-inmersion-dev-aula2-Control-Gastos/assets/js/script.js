let listaNombreGastos =[];
let listaValoresGastos =[];
let listaDescripcionGastos =[];
sessionStorage.setItem("ubicacionList","0");                    //es usado para mantener el valor de estas variables
let valorUbicacion = sessionStorage.getItem("ubicacionList");   //ya que al salir de una rutina su valor se pierde
sessionStorage.setItem("modificar","false");                    
let valorModificar = sessionStorage.getItem("modificar");

/*Función ejecutada al hacer click en el boton Agregar*/
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;     //captura de las cadenas de texto de cada caja
    let valorGasto = document.getElementById('valorGasto').value;
    let valorDescripcionGasto = document.getElementById('descripcionGasto').value;

    /*
    console.log(nombreGasto);
    console.log(valorGasto);
    console.log(valorDescripcionGasto);
    */

    if(nombreGasto == '' || valorGasto == '' || valorDescripcionGasto == ''){   // En caso de tener capturas en blanco
        alert('No puede ingresar datos en blanco');                             // lanza mensaje de alerta y sale de la
        return;                                                                 //función
    }
    if(valorModificar == true){                             // si se está modificando el gasto se entra a reemplazar
        listaNombreGastos[valorUbicacion] = nombreGasto;    // los tres valores capturados en la misma posición en la
        listaValoresGastos[valorUbicacion] = valorGasto;    // que fué ingresado el gasto originalmente
        listaDescripcionGastos[valorUbicacion] = valorDescripcionGasto;
        valorUbicacion = 0;                                 // se resetean las variables usadas para tal fin
        valorModificar = false;
    }else{
        listaNombreGastos.push(nombreGasto);                // se ingresa el nuevo gasto a las listas
        listaValoresGastos.push(valorGasto);
        listaDescripcionGastos.push(valorDescripcionGasto);
    }
    
    mostrarListaGastos();       //se genera la lista con los gastos ingresados y su respectiva sumatoria
    
}
//Rutina para mostrar la lista de datos ingresados 

function mostrarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');    //espacio en donde se va a ubicar nuestra lista
    const totalElementos = document.getElementById('totalGastos');      //sumatoria de los gastos
    let htmlLista = '';         //variable en la que almacenaremos la lista
    let totalGastos = 0;
    listaNombreGastos.forEach((elemento, posicion)=>{           //Se hace el barrido en una lista y se recuperan
        const valorG = Number(listaValoresGastos[posicion]);    //los datos en las otras dos listas para operar valores
        const valorD = listaDescripcionGastos[posicion];        //y generar la lista
        htmlLista += `<li>${elemento} -  ${valorG.toFixed(2)} - ${valorD}
                        <button onclick="editarGasto(${posicion});">Editar</button>     
                        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                        </li>`;             //se generan dos botones uno para eliminar el gasto de la lista 
                                            //y el otro para editar el gasto en caso de ser mal ingresado
        totalGastos += valorG;              
    });
    //console.log(htmlLista);
    listaElementos.innerHTML = htmlLista;               //presentación de los datos en la página
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();                  //se limpian las cajas de texto para nuevos datos
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
}

function eliminarGasto(posicion){
    listaNombreGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    mostrarListaGastos();
}
/*Se ubican los datos en su respectivas cajas de texto y se alistan variables que indican la posición
  de los datos en las listas y se inicializan las variables para indicar que los datos capturados
  deben de ser reemplazados y no ingresados como nuevos a las listas*/
function editarGasto(posicion){
    document.getElementById('nombreGasto').value = listaNombreGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionGastos[posicion];
    valorUbicacion = posicion;
    valorModificar = true;
}