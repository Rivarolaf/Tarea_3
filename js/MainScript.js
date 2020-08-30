let intento = 0;
let respuestaDelUsuario;
const respuestaCorrecta = 'GATO';

let adivinanza1gato = document.getElementById("adivinanza1gato");

let adivinanza1intento1 = document.getElementById("adivinanza1intento1");
let adivinanza1intento2 = document.getElementById("adivinanza1intento2");
let adivinanza1intento3 = document.getElementById("adivinanza1intento3");
let adivinanza1intento4 = document.getElementById("adivinanza1intento4");

let pista2 = document.getElementById("pista2");
let pista3 = document.getElementById("pista3");

let userInput = document.getElementById("respuesta"); 

let volverAJugar = document.getElementById("volverAJugar");

let contenedorDeRespuesta = document.getElementById("contenedorDeRespuesta");

function verificarRespuesta(){

	respuestaDelUsuario = userInput.value.toUpperCase();
	
	if(respuestaDelUsuario === respuestaCorrecta)
	{
		jugadorGano();
		userInput.value = "";
	}
	else
	{
		proximaPista();
		userInput.value = "";
	}
}

function proximaPista(){
	intento++;

	if(intento < 4)
	{
		switch(intento){
		case 1:
		adivinanza1intento1.src="Game Buttons/cross.png";
		pista2.innerHTML = '<h5>Pista: Empieza con "G"</h5>';
		break;
		case 2:
		adivinanza1intento2.src = "Game Buttons/cross.png";
		pista3.innerHTML = '<h5>Pista: Rima con PATO</h5>';
		break;
		case 3:
		adivinanza1intento3.src = "Game Buttons/cross.png";
		break;
		case 4:
		adivinanza1intento4.src = "Game Buttons/cross.png";
		break;
		}
	}
	else
	{
		adivinanza1intento4.src = "Game Buttons/cross.png";
		jugadorPerdio();
	}
}

function jugadorGano(){
	adivinanza1gato.src = "Game Buttons/cat-revealed.jpg";
	contenedorDeRespuesta.innerHTML = '<h1 class="col-12 text-center" style="margin-top:50px">Ganaste</h1>';

	volverAJugar.innerHTML = '<div class="row d-flex justify-content-center"><a href="Games.html"><img id="replay" src="Game Buttons/replay.png" alt="Vovler a Jugar" style="width: 50px;height: 50px;margin: 0px"></a></div><div class="row d-flex justify-content-center"><h5 style="margin:15px">Volver a Jugar</h5></div>';

	switch(intento){
	case 0:
	adivinanza1intento1.src = "Game Buttons/check.png";
	break;
	case 1:
	adivinanza1intento2.src = "Game Buttons/check.png";
	break;
	case 2:
	adivinanza1intento3.src = "Game Buttons/check.png";
	break;
	case 3:
	adivinanza1intento4.src = "Game Buttons/check.png";
	break;
	}
}

function jugadorPerdio(){
	contenedorDeRespuesta.innerHTML = '<h1 class="col-12 text-center" style="margin-top:50px">Perdiste</h1>';
	volverAJugar.innerHTML = '<div class="row d-flex justify-content-center"><a href="Games.html"><img id="replay" src="Game Buttons/replay.png" alt="Vovler a Jugar" style="width: 50px;height: 50px;margin: 0px"></a></div><div class="row d-flex justify-content-center"><h5 style="margin:15px">Volver a Jugar</h5></div>';
}