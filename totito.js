
function Tablero(state){

    
    var cuadrado = document.createElement("div")
    cuadrado.className = "cuadrado";

    var casilla1 = document.createElement("div")
    casilla1.className = "casilla1";

    var casilla2 = document.createElement("div")
    casilla2.className = "casilla2";

    var casilla3 = document.createElement("div")
    casilla3.className = "casilla3";

    var casilla4 = document.createElement("div")
    casilla4.className = "casilla4";

    var casilla5 = document.createElement("div")
    casilla5.className = "casilla5";

    var casilla6 = document.createElement("div")
    casilla6.className = "casilla6";

    var casilla7 = document.createElement("div")
    casilla7.className = "casilla7";

    var casilla8 = document.createElement("div")
    casilla8.className = "casilla8";

    var casilla9 = document.createElement("div")
    casilla9.className = "casilla9";




    cuadrado.appendChild(casilla1);
    cuadrado.appendChild(casilla2);
    cuadrado.appendChild(casilla3);
    cuadrado.appendChild(casilla4);
    cuadrado.appendChild(casilla5);
    cuadrado.appendChild(casilla6);
    cuadrado.appendChild(casilla7);
    cuadrado.appendChild(casilla8);
    cuadrado.appendChild(casilla9);
   


    return cuadrado;



}


function render(mountPoint,component,state) {
    mountPoint.innerHTML= "";
    mountPoint.appendChild(component(state));
}



var root = document.getElementById("root")

i=0;
    render(root,Tablero,i);

