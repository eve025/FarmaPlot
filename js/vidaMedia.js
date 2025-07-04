console.log("hola");

let buttonStart = document.querySelector("#start");
buttonStart.addEventListener("click", crearTabla);



function crearTabla(e){
    //se define el evento pasandole el argumento
    e.preventDefault();
    // alert('ajajaja');

    const inputConcentracion = document.querySelector("#concentracion");
    
    let concentracion = inputConcentracion.value;
    //se esconde el btn para crear
    buttonStart.style.display = "none";

    //deshabilitar escribir en input
    inputConcentracion.disabled = true;
    
    const inputHrs = document.querySelector("#horasT");
    
    let Hrs = inputHrs.value;
    //deshabilitar escribir en input
    inputHrs.disabled = true;



    if(concentracion.length === 0 || concentracion === ""){
        console.log("try again");
        console.log("la concentracion es " + concentracion);
        
        //mostrar leyenda con datos ingresados
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.textContent = "La tabla no puede ser generada, ingrese datos denuevo.."
        div.appendChild(h1);

    }else{
        console.log("no esta vacio");
        console.log("la concentracion es " + concentracion);

        //mostrar leyenda con datos ingresados
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.textContent = "La tabla generada muestra una concentracion inicial '${concentracion}' y vida media inicial: '${Hrs}' "
        div.appendChild(h1);

        //NOTA: en este programa se toma un umbral para parar las divisiones
        let row = 0;
        for(let i = concentracion; i>=0.001; i = i/2){
            console.log(i)
            row++;
            console.log(row)
            
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
                let vh = [];
                if(i >= 1 && j == 0){
                    for(let k= 0 ; k <= row;k++){
                        vh.push(k);
                        // celda[j].innerHTML = calcC;
                        // console.log(calcC)
                    }
                    //recorrer el arreglo
                    for(let hora of vh){
                        //se pasan a string para crear el elemento
                        hora.toString();
                        console.log(hora)
                    }

                    celda[j].innerHTML = vh[i];
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
                        console.log(hora)
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
                        console.log(cNum)
                    }
                    celda[j].innerHTML = C[i];
                    // console.log(concentracion)
                    console.log(C)
                    
                 }
                // añadiendo la celda a la fila
                rowi[i].appendChild(celda[j]);
                
            }
            tabla.appendChild(rowi[i]);
        }
    }
}

//crear la grafica
function crearCanvas(){

}