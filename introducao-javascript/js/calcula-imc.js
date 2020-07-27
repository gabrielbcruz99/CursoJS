var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutrição";
			 //console.log(titulo.textContent); /* Propriedade do JavaScript que permite o acesso ao conteúdo  
			 //de texto da tag.
/*titulo.textContent = "Consultório de Nutrição Aparecida"; /* Nessa linha, alteramos o conteúdo 
             da tag combinando a variavel titulo com a propriedade textContent. */
         
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
	var paciente = pacientes[i];

	var tdpeso = paciente.querySelector(".info-peso");
	var peso = tdpeso.textContent;

	var tdaltura = paciente.querySelector(".info-altura");
	var altura = tdaltura.textContent;

	var tdimc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValido = validaAltura(altura);

		if(!pesoEhValido){
			console.log("Peso inválido");
			pesoEhValido = false;
			tdimc.textContent = "Peso inválido";
			paciente.classList.add(".paciente-invalido");
		}

		if(!alturaEhValido){
			console.log("Altura inválida");
			alturaEhValido = false;
			tdimc.textContent = "altura inválida";
			paciente.classList.add(".paciente-invalido");
		}

		if(pesoEhValido && alturaEhValido){
			var imc = calculaImc(peso, altura);
			tdimc.textContent = imc;
		}
}

function validaPeso(peso) {
	if (peso >=0 && peso < 1000) {
		return true;
	}else {
		return false;
	}
	
}

function validaAltura(altura) {
	if (altura >=0 && altura <= 3.0) {
		return true;
	}
}

function calculaImc(peso, altura){
	
	var imc = 0;

	imc = peso/(altura*altura);
	return imc.toFixed(2);
}