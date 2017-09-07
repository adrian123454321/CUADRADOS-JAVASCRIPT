function App(state){

    var cuadrado = document.createElement("div")
    cuadrado.className = "cuadrado";

    var circulo1 = document.createElement("div");
    circulo1.className = "circulo1";

    var circulo2 = document.createElement("div");
    circulo2.className = "circulo2";

    var circulo3 = document.createElement("div");
    circulo3.className = "circulo3";




    cuadrado.appendChild(circulo1);
    cuadrado.appendChild(circulo2);
    cuadrado.appendChild(circulo3);



    if (state == 0){
        circulo1.style.opacity = 2.0;

    };
     if (state == 2){
        circulo2.style.opacity= 2.0;
    
    };
     if (state == 1){
        circulo3.style.opacity = 2.0;
    };


  

return cuadrado;
}


function render(mountPoint,component,state) {
    mountPoint.innerHTML= "";
    mountPoint.appendChild(component(state));
}

var root = document.getElementById("root")
var i=0;
    render(root,App,i);


var next = document.getElementById("next")
    next.onclick = function(){
        render(root,App,i);
        i++;
        if(i>2){
            i=0
        };
    };