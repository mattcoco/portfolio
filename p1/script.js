// lo que queremos hacer unicamente es cambiar la clase segun el clic

//we need to bring in all of these panels into de JS


// no podemos hacer solo esto porque si no seleccionara solo el primero
// const panels = document.querySelector('.panel')
const panels = document.querySelectorAll('.panel');
//tb podemos usar getElementById, si la tuviera
// querySelectorAll pone el resultado dentro de una nodelist
// que es similar a un array. Si hacemos panels[i] podemos
// coger uno en concreto
panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeAllActiveClasses();
		panel.classList.add('active');
	})
})
// forEach: "A high order array method". entre () lo que 
// queremos pasar para cada iteración

function removeAllActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active'); 
	})
}

//Equivalente a
// panels.forEach((panel) => {
// 	panel.addEventListener('click', () => {
// 		panels.forEach(panel => {
// 			panel.classList.remove('active'); 
// 		})
// 		panel.classList.add('active');
// 	})
// })


// no sé por qué esto no funciona
// const removeAllActiveClasses = () => {
// 	panel.forEach((panel) => {
// 		panel.classList.remove('active');
// 	})
// }
