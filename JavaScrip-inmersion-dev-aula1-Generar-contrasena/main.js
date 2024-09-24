let cantidadCaracteres = document.getElementById('cantidad')
let boton = document.getElementById('generar');
const cadena = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*,.;:?!<>()=+-';
let contrasena = document.getElementById('contrasena');
let nivel = document.getElementById('nivel');

/* función principal donde se evalúa y se genera la contraseña y su nivel de seguridad*/
function generar(){
    let cantidadNum = parseInt(cantidadCaracteres.value);    //Se convierte de cadena de caracteres a número 
    let cantTrue = 0;                                        //se usa para evaluar tipos de caracteres en la contraseña

    //console.log(cantidadNum);

    if(cantidadNum < 6 || Number.isNaN(cantidadNum)){    //Se evalúa si es menor a un mínimo o si está en blanco                   
        alert("Introduzca mínima cantidad 6 caracteres");
        limpiar();
    }else{
            let password = '';
            let mayuscula = false;
            let minuscula = false;
            let numero = false;
            let simbolo = false;
            
            for(let i = 0; i < cantidadNum; i++){
                
                let ubicacion = Math.floor(Math.random()*cadena.length)
                let caracter = cadena[ubicacion];
                //console.log(caracter);
                //console.log(ubicacion);
                password += caracter;
                if(ubicacion <=25){                         //se da valor dependiendo de la ubicación
                    mayuscula = true;                       //en la cadena, nos va a servir para determinar
                }else if(ubicacion>25 && ubicacion<=51){    //el nivel de seguridad de la contraseña
                    minuscula = true;
                }else if(ubicacion>51 && ubicacion<=61){
                    numero = true;
                }else{
                    simbolo = true;
                }
            }
            
            if(mayuscula){
                cantTrue +=1;
            }
            if(minuscula){
                cantTrue +=1;
            }
            if(numero){
                cantTrue +=1;
            }
            if(simbolo){
                cantTrue +=1;
            }
            
            contrasena.value = password;
            
    }

    if(cantidadNum<=6){                         //dependiendo del largo de la cadena solicitada y de la
        nivel.value = 'Nivel Bajo';             //cantidad de true obtenidos en la generación se puede 
    }else if(cantTrue == 1 && cantidadNum<=11){ //hacer una ponderación aproximada al nivel de seguridad
        nivel.value = 'Nivel Bajo';             //que puede llegar a ofrecer la contraseña generada
    }else if(cantTrue == 1 && cantidadNum >11){
        nivel.value = 'Nivel Medio-Bajo';
    }else if(cantTrue == 2 && cantidadNum >= 7 && cantidadNum <=11){
        nivel.value = 'Nivel Medio-Bajo';
    }else if(cantTrue == 2 && cantidadNum > 11 && cantidadNum <=14){
        nivel.value = 'Nivel Medio';
    }else if(cantTrue == 2 && cantidadNum > 14 && cantidadNum <=17){
        nivel.value = 'Nivel Medio-Alto';
    }else if(cantTrue == 2 && cantidadNum > 17){
        nivel.value = 'Nivel Alto';
    }else if(cantTrue == 3 && cantidadNum >= 7 && cantidadNum <=10){
        nivel.value = 'Nivel Medio-Bajo';
    }else if(cantTrue == 3 && cantidadNum > 10 && cantidadNum <=13){
        nivel.value = 'Nivel Medio';
    }else if(cantTrue == 3 && cantidadNum > 13 && cantidadNum <=16){
        nivel.value = 'Nivel Medio-Alto';
    }else if(cantTrue == 3 && cantidadNum > 16){
        nivel.value = 'Nivel Alto';
    }else if(cantTrue == 4 && cantidadNum >= 7 && cantidadNum <=11){
        nivel.value = 'Nivel Medio-Bajo';
    }else if(cantTrue == 4 && cantidadNum > 11 && cantidadNum <=12){
        nivel.value = 'Nivel Medio';
    }else if(cantTrue == 4 && cantidadNum > 12 && cantidadNum <=15){
        nivel.value = 'Nivel Medio-Alto';
    }else if(cantTrue == 4 && cantidadNum > 15){
        nivel.value = 'Nivel Alto';
    } 
    cantTrue = 0;
}

function limpiar(){
    contrasena.value = '';
    cantidadCaracteres.value = '6';
    nivel.value = '';
}






