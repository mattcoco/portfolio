 const progress = document.getElementById('progress');
// // solo hay una clase, no ponemos punto
 const prev = document.getElementById('prev');
 const next = document.getElementById('next');
 const circles = document.querySelectorAll('.circle');

 let currentActive = 1;

 next.addEventListener('click', () => {
 	//whatever the active is, to increment it by 1
 	currentActive++;
 	//que no pase del ultimo circle;
 	// circle es un node pero se trata como un array
 	if(currentActive > circles.length) {
 		//el active no pasa del ultimo
 	 	currentActive = circles.length; 
 	}
	update();
 	// console.log(currentActive)
 });

  prev.addEventListener('click', () => {
 	//whatever the active is, to increment it by 1
 	currentActive--;
 	if(currentActive < 1) {
 		//el active no pasa del primero
 	 	currentActive = 1; 
 	}
 	update();
 	// console.log(currentActive)
 });

//Función update: "sincroniza" el estado de los circulos
//y la progress linea según el estado de la
//variable currentActive
function update() {
  	//REMEMBER: circles is a node list
	//Y también: circle y idx son variables mudas
  	circles.forEach((circle, idx) => {
  		//como todos los anteriores tienen que estar active
  		//ponemos signo menos. si no pondriamos signo igual
  		//y solo iluminaria el actual
  		if(idx < currentActive) {
  			circle.classList.add('active');
  		} else {
  			circle.classList.remove('active');
  		}
  	})

	//Cogemos todas las clases active
  	const actives = document.querySelectorAll('.active');
	//Esto updatea la linea según el valor de currentActive
  	progress.style.width = ((actives.length-1) / (circles.length -1)) * 100 + '%';

	//Y este if para desactivar el boton next si llegamos al
	//currentActive=4; o activarlos si estamos en medio
	if(currentActive === 1) {
		prev.disabled = true;
	} else if(currentActive === circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
	
}