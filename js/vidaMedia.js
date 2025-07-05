// console.log("hola");
// Es buena práctica definir los elementos que no cambian fuera de la función
const buttonStart = document.querySelector("#start");
buttonStart.addEventListener("click", crearTabla);

const inputConcentracion = document.querySelector("#concentracion");
const inputHrs = document.querySelector("#horasT");

//section para señalar error
let section = document.querySelectorAll("section");

//arreglos
const vm = [];
const h = [];
const C = [];

function crearTabla(e){
    
    //se define el evento pasandole el argumento
    e.preventDefault();
    // alert('ajajaja');

    //se convierte a decimal desde el inicio
    const concentracion = parseFloat(inputConcentracion.value);
    
    //se convierte a decimal
    const Hrs = parseFloat(inputHrs.value);
    
    //actualizar la ui al intentar crear tabla con datos ingresados
    //deshabilitar escribir en input
    inputConcentracion.disabled = true;
    
    //se esconde el btn para crear
    buttonStart.style.display = "none";

    //deshabilitar escribir en input
    inputHrs.disabled = true;

    //Validaciones en los inputs
    let concentracionOk = !isNaN(concentracion) && concentracion > 0;
    let hrsOK = !isNaN(Hrs) && Hrs > 0
    if(concentracionOk){
        //llamada a funcion del mensaje
        //se pasa texto para h6 y que es un error(true)
        mensaje("La columna vida media(H) de la tabla no puede ser generada, ingrese datos numéricos válidos y mayores a cero... La gráfica muestra concentración x VM", true);
        //no se generan graficas en este caso entonces se muestran bordes rojos
        //section es una lista, no un único elemento.
        section.forEach(function(seccionIndividual){
            seccionIndividual.style.border = "2px solid red";
        });
        
    }else if(hrsOK || (!concentracionOk && !hrsOK)){
        //llamada a funcion del mensaje
        //se pasa texto para h6 y que es un error(true)
        mensaje("La tabla no puede ser generada, ingrese datos numéricos válidos y mayores a cero...", true);
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
    if(concentracionOk && hrsOK){
        mensaje(`La tabla y gráficas generadas muestran una concentración inicial: ${concentracion} y vida media inicial: ${Hrs}`, false);

    section.forEach(function(seccionIndividual){
            seccionIndividual.style.border = "2px solid #000";
        });
    }

    //NOTA: en este programa se toma un umbral para parar las divisiones
    let row = 0;
    for(let i = concentracion; i >= 0.001; i = i/2){
        // console.log(i) //numero ingresado 
        row++;
        // console.log(row) //numero de filas q se deben crear
        
    }

    console.log("Filas a crear: "+ row);
    const tabla = document.querySelector("table");
    // let rowi = [];//creo que debe ser un arreglo
    // let celda = [];
    for(let i = 0;i<row;i++){

        //crear filas
        const fila = tabla.insertRow();
        // rowi[i] = document.createElement("tr");

        const celdaVM = fila.insertCell();
        const celdaH = fila.insertCell();
        const celdaC = fila.insertCell();

        celdaVM.textContent = i;
        celdaH.textContent = i * Hrs;
        celdaC.textContent = (concentracion / (2 ** i));
        

        vm[i] = i;
        h[i] = i * Hrs;
        C[i] = (concentracion / (2 ** i));
        //con 3 columnas
        // for(let j = 0; j <= 2; j++){
        //     //osea 3 celdas
        //     celda[j] = document.createElement("td");
            

            // //posicion 0  del arreglo(fila 0), muestra la concentracion
            // if(i == 0 && j == 2){
            //     //agregando texto por default(concentracion)
            //     celda[j].innerHTML = concentracion;
            //     // celda[0].innerHTML = concentracion;
            //     // console.log("0,0")
            // }else if(i == 0 && j == 0){
            //     celda[j].innerHTML = 0;
            //     //agregando texto por default(0)
            // }else if(i == 0 && j == 1){
            //     //agregando texto por default(0)
            //     celda[j].innerHTML = 0;
            // }

            //---------------------------------
            //resultados para columna 0 y 1
            //estamos en el for de la j osea columnas
            //i=fila              j=columna 
            // let vm = [];
    //         if(i >= 1 && j == 0){
    //             for(let k= 0 ; k <= row;k++){
    //                 vm.push(k);
    //                 // celda[j].innerHTML = calcC;
    //                 // console.log(calcC)
    //             }
    //             //recorrer el arreglo
    //             for(let hr of vm){
    //                 //se pasan a string para crear el elemento
    //                 hr.toString();
    //                 console.log(hr) //cada hora
    //             }

    //             celda[j].innerHTML = vm[i];
    //         }
            

    //         //resultados columna 1, a partir de la fila 0 en adelante
    //         let h = [];
    //         let sumatoria = 0;
    //         if(i == 1 && j == 1){
    //             celda[j].innerHTML = Hrs;
    //         }else if(i >= 2 && j == 1){
    //             for(let k= 1 ; k <= row;k++){
    //                 h.push(sumatoria);
    //                 sumatoria = sumatoria + parseInt(Hrs);
                    
    //             }

    //             //recorrer horas
    //             for(let hora of h){
    //                 hora.toString();
    //                 console.log(hora) //arreglo columna 1 = H
    //             }
    //             celda[j].innerHTML = h[i];
    //         }


    //         //resultados columna 2, a partir de la fila 0 
    //         let C = [];
    //         let calcC = parseFloat(concentracion);
    //         if(i >= 1 && j == 2){
    //             //escribiendo el calculo de la concentracion a la mitad
                
    //             //calcular mitades y guardar
    //             for(let k= 1 ; k <= row;k++){
                    
    //                 C.push(calcC);
    //                 calcC = calcC/2;
    //                 // celda[j].innerHTML = calcC;
    //                 // console.log(calcC)
    //             }
                
    //             //recorrer el arreglo
    //             for(let cNum of C){
    //                 cNum.toString();
    //                 // celda[j].innerHTML = cNum.toString();
    //                 // console.log(cNum)
    //             }
    //             celda[j].innerHTML = C[i];
    //             // console.log(concentracion)
    //             console.log(C) //arreglo columna 2 
                
    //             }
    //         // añadiendo la celda a la fila
    //         rowi[i].appendChild(celda[j]);
            
    //     }
    //     tabla.appendChild(rowi[i]);
    }
    console.log(h, vm, C);

    //Arreglos de la tabla //crear la grafica
    GraficoCxH.data.labels = h; // Eje X: horas
    //nota: En Chart.js, el objeto data de un gráfico puede contener uno o más conjuntos de datos (datasets).
    //osea es un arreglo con un objeto en la posicion 0 - Ese objeto representa un conjunto de datos (una línea en el gráfico, por ejemplo).
    GraficoCxH.data.datasets[0].data = C; //accediendo al primer objeto dentro del array datasets. = Eje Y: concentración
    GraficoCxH.update();


    //grafico Vm x H
    GraficVMxH.data.labels = vm; // Eje X: vida media
    GraficVMxH.data.datasets[0].data = C; //accediendo al primer objeto dentro del array datasets. = Eje Y:Concentración
    GraficVMxH.update();
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

// EH, july 2025