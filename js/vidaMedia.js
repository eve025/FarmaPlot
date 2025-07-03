console.log("hola");

let buttonStart = document.querySelector("#start");
buttonStart.addEventListener("click", crearTabla);



function crearTabla(e){
    //se define el evento pasandole el argumento
    e.preventDefault();
    // alert('ajajaja');

    const inputConcentracion = document.querySelector("#concentracion");
    
    concentracion = inputConcentracion.value;
    //se esconde el btn para crear
    buttonStart.style.display = "none";

    //deshabilitar escribir en input
    inputConcentracion.disabled = true;

    if(concentracion.length === 0 || concentracion === ""){
        console.log("try again");
        console.log("la concentracion es " + concentracion);
    }else{
        console.log("no esta vacio");
        console.log("la concentracion es " + concentracion);
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
                if(rowi[i] == rowi[0] && celda[j] == celda[0]){
                    //agregando texto por default(concentracion)
                    celda[j].innerHTML = concentracion;
                    // celda[0].innerHTML = concentracion;
                    // console.log("0,0")
                }else if(rowi[i] == rowi[0] && celda[1] == celda[1]){
                    celda[j].innerHTML = 0;
                    //agregando texto por default(0)
                }else if(rowi[i] == rowi[0] && celda[2] == celda[2]){
                    //agregando texto por default(0)
                    celda[j].innerHTML = 0;
                }

                //---------------------------------
                //resultados columna 1, a partir de la fila 0 
                 if(i === 1 && j === 0){
                    //escribiendo el calculo d ela concentracion a la mitad
                    celda[j].innerHTML = concentracion/2;
                 }
                //resultados para columna 1 y 2
                if(i >= 1 && j >= 1){
                    
                }
                // añadiendo la celda a la fila
                rowi[i].appendChild(celda[j]);
                
            }
            tabla.appendChild(rowi[i]);
        }
        
        
    }
}
