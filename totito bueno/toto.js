var jugada = "X";	
var jugada1= "O";
var cont=1;
var tablilla = [];

function marcar(id){
	var caja = document.getElementById(id);
    //determina si el espacio ya esta ocupado
	if(cont%2!=0 && tablilla[id]!=0){
		caja.value = jugada;
		document.getElementById("div_turno").innerHTML;
		tablilla[id]=1;
		cont++;
		//determina si el espacio ya esta ocupado
	}else if(cont%2==0 && tablilla[id]!=1){
		caja.value=jugada1;
		document.getElementById("div_turno").innerHTML;
		tablilla[id]=0;
		cont++;
	};

	jugadorX();
	jugadorO();

	};


//determina si x gana
function jugadorX(){
	if(tablilla[1]==1 && tablilla[2]==1 && tablilla[3]==1){
		alert(jugada+ " Ganaste");
	}else if(tablilla[4]==1 && tablilla[5]==1 && tablilla[6]==1){
		alert(jugada+ " Ganaste")
	}else if(tablilla[7]==1 &&tablilla[8]==1 && tablilla[9]==1){
		alert(jugada+" Ganaste")
	}else if(tablilla[1]==1 && tablilla[4]==1 &&tablilla[7]==1){
		alert(jugada+" Ganaste")
	}else if(tablilla[2]==1 && tablilla[5]==1 &&tablilla[8]==1){
		alert(jugada+ " Ganaste");
	}else if(tablilla[3]==1 && tablilla[6]==1 &&tablilla[9]==1){
		alert(jugada+ " Ganaste");
	}else if(tablilla[1]==1 && tablilla[5]==1 &&tablilla[9]==1){
		alert(jugada+ " Ganaste");
	}else if(tablilla[3]==1 && tablilla[5]==1 &&tablilla[7]==1){
		alert(jugada+ " Ganaste");
	}
}
//determina si o gana
function jugadorO(){
	if(tablilla[1]==0 && tablilla[2]==0 && tablilla[3]==0){
		alert(jugada1+ " Ganaste");
	}else if(tablilla[4]==0 && tablilla[5]==0 && tablilla[6]==0){
		alert(jugada1+ " Ganaste");
	}else if(tablilla[7]==0 && tablilla[8]==0 && tablilla[9]==0){
		alert(jugada1+ " Ganaste");
	}else if(tablilla[1]==0 && tablilla[4]==0 &&tablilla[7]==0){
		alert(jugada1+ " Ganaste");
	}else if(tablilla[2]==0 && tablilla[5]==0 &tablilla[8]==0){
		alert(jugada1+ " Ganaste");
	}else if(tablilla[3]==0 && tablilla[6]==0 &&tablilla[9]==0){
		alert(jugada1+ " Ganaste");
	}else if(tablilla[1]==0 && tablilla[5]==0 &&tablilla[9]==0){
		alert(jugada1+ " Ganaste");
	}else if(tablilla[3]==0 && tablilla[5]==0 &&tablilla[7]==0){
		alert(jugada1+ " Ganaste");
	}
}

