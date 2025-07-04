// console.log("hola");
// Es buena práctica definir los elementos que no cambian fuera de la función
const buttonStart = document.querySelector("#start");
buttonStart.addEventListener("click", crearTabla);

const inputConcentracion = document.querySelector("#concentracion");
const inputHrs = document.querySelector("#horasT");

//section para señalar error
let section = document.querySelectorAll("section");

function crearTabla(e){
    
    //se define el evento pasandole el argumento
    e.preventDefault();
    // alert('ajajaja');

    //se convierte a decimal desde el inicio
    const concentracion = parseFloat(inputConcentracion.value);
    
    //se convierte a decimal
    const Hrs = parseInt(inputHrs.value, 10);
    
    //actualizar la ui al intentar crear tabla con datos ingresados
    //deshabilitar escribir en input
    inputConcentracion.disabled = true;
    
    //se esconde el btn para crear
    buttonStart.style.display = "none";

    //deshabilitar escribir en input
    inputHrs.disabled = true;

    //Validaciones en los inputs
    //no se ha podido convertir a numero
    if(isNaN(concentracion) || isNaN(Hrs)){
        //llamada a funcion del mensaje
        //se pasa texto para h6 y que es un error(true)
        mensaje("La tabla no puede ser generada, ingrese datos numéricos válidos y mayores a cero...", true);
        //no se generan graficas en este caso entonces se muestran bordes rojos
        //section es una lista, no un único elemento.
        section.forEach(function(seccionIndividual){
            seccionIndividual.style.border = "2px solid red";
        });
            
    }
   
    // !Hrs verifica si Hrs es falsy (vacío, null, undefined, 0, NaN o false), no solo si es ""
    if((!concentracion ||  !Hrs)){
        // console.log("try again");
        // console.log("la concentracion es " + concentracion);
        
        //mostrar leyenda con datos ingresados, e un error se pasa true
        mostrarMensaje("La tabla no puede ser generada, ingrese datos...", true);
        //no se generan graficas en este caso entonces se muestran bordes rojos
        //section es una lista, no un único elemento.
        section.forEach(function(seccionIndividual){
            seccionIndividual.style.border = "2px solid red";
        });
    }
    
    // console.log("no esta vacio");
    // console.log("la concentracion es " + concentracion);

    //mostrar leyenda con datos ingresados
    //llamada a funcion del mensaje
    //se pasa texto para h6 y que NO es un error(false)
    mensaje(`La tabla generada muestra una concentracion inicial: ${concentracion} y vida media inicial: ${Hrs}`, false);

    section.forEach(function(seccionIndividual){
            seccionIndividual.style.border = "2px solid #000";
        });

    //NOTA: en este programa se toma un umbral para parar las divisiones
    let row = 0;
    for(let i = concentracion; i>=0.001; i = i/2){
        // console.log(i) //numero ingresado 
        row++;
        // console.log(row) //numero de filas q se deben crear
        
    }
    console.log("Filas a crear: "+ row);
    let tabla = document.querySelector("table");
    let rowi = [];//creo que debe ser un arreglo
    let celda = [];
    for(let i = 0;i<row;i++){
        //crear filas
        rowi[i] = document.createElement("tr");

        //con 3 columnas
        for(let j = 0; j <= 2; j++){
            //osea 3 celdas
            celda[j] = document.createElement("td");
            

            //posicion 0  del arreglo(fila 0), muestra la concentracion
            if(i == 0 && j == 2){
                //agregando texto por default(concentracion)
                celda[j].innerHTML = concentracion;
                // celda[0].innerHTML = concentracion;
                // console.log("0,0")
            }else if(i == 0 && j == 0){
                celda[j].innerHTML = 0;
                //agregando texto por default(0)
            }else if(i == 0 && j == 1){
                //agregando texto por default(0)
                celda[j].innerHTML = 0;
            }

            //---------------------------------
            //resultados para columna 0 y 1
            //estamos en el for de la j osea columnas
            //i=fila              j=columna 
            let vm = [];
            if(i >= 1 && j == 0){
                for(let k= 0 ; k <= row;k++){
                    vm.push(k);
                    // celda[j].innerHTML = calcC;
                    // console.log(calcC)
                }
                //recorrer el arreglo
                for(let hr of vm){
                    //se pasan a string para crear el elemento
                    hr.toString();
                    console.log(hr) //cada hora
                }

                celda[j].innerHTML = vm[i];
            }
            

            //resultados columna 1, a partir de la fila 0 en adelante
            let h = [];
            let sumatoria = 0;
            if(i == 1 && j == 1){
                celda[j].innerHTML = Hrs;
            }else if(i >= 2 && j == 1){
                for(let k= 1 ; k <= row;k++){
                    h.push(sumatoria);
                    sumatoria = sumatoria + parseInt(Hrs);
                    
                }

                //recorrer horas
                for(let hora of h){
                    hora.toString();
                    console.log(hora) //arreglo columna 1 = H
                }
                celda[j].innerHTML = h[i];
            }


            //resultados columna 2, a partir de la fila 0 
            let C = [];
            let calcC = parseFloat(concentracion);
            if(i >= 1 && j == 2){
                //escribiendo el calculo de la concentracion a la mitad
                
                //calcular mitades y guardar
                for(let k= 1 ; k <= row;k++){
                    
                    C.push(calcC);
                    calcC = calcC/2;
                    // celda[j].innerHTML = calcC;
                    // console.log(calcC)
                }
                
                //recorrer el arreglo
                for(let cNum of C){
                    cNum.toString();
                    // celda[j].innerHTML = cNum.toString();
                    // console.log(cNum)
                }
                celda[j].innerHTML = C[i];
                // console.log(concentracion)
                console.log(C) //arreglo columna 2 
                
                }
            // añadiendo la celda a la fila
            rowi[i].appendChild(celda[j]);
            
        }
        tabla.appendChild(rowi[i]);
    }
}

//crear la grafica
function crearCanvas(){

}

//toma el parametro de texto que va en h6 y el tipo de dato(true o false, indicando el error o texto crear)para el boton de recarga
function mensaje(texto, esError){
    let div = document.createElement("div");
    let h6 = document.createElement("h6");
    let buttonRedirect = document.createElement("button");
    let aRedirect = document.createElement("a");
    let section = document.querySelector("main");
    h6.textContent = texto;
    div.appendChild(h6);
    aRedirect.href = "index.html";
    //if(){true : false}
    aRedirect.textContent = esError ? "Intentar de nuevo" : "Crear nueva tabla";
    buttonRedirect.appendChild(aRedirect);

    div.appendChild(buttonRedirect);
    section.insertAdjacentElement("beforebegin", div);
}