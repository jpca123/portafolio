'use strict'


// menu movil
const btnMenu =  document.querySelector('.navegacion-input'),
navegacion = document.querySelector('.navegacion');
navegacion.addEventListener('click', e=>{
	if(e.target.matches('.navegacion-link')) btnMenu.checked = false;
})


