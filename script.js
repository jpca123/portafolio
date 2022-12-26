'use strict'


// menu movil
const btnMenu =  document.querySelector('.navegacion-input'),
navegacion = document.querySelector('.navegacion');
navegacion.addEventListener('click', e=>{
	if(e.target.matches('.navegacion-link')) btnMenu.checked = false;
})

//scrollSpy
let sections = Array.from(document.querySelectorAll("section[data-scroll-spy]"));

let options = {threshold: [0.5]}

let scrollSpy = new IntersectionObserver((entries)=>{

	entries.forEach(entry =>{
			// let activos = navegacion.querySelectorAll(".section-active");
			// if (activos) activos.forEach(el => el.classList.remove("section-active"));
		if (entry.isIntersecting){
			let id = `#${entry.target.id}`
			console.log(id)
			navegacion.querySelector(`a[href="#${entry.target.id}"]`).classList.add("navegacion-link-active");
		}else{
			navegacion.querySelector(`a[href="#${entry.target.id}"]`).classList.remove("navegacion-link-active");
		}
	})



	// Array.from(document.querySelectorAll(".section-active")).forEach(el => el.classList.remove("section-active"));

	// navegacion.children[indexEntry].classList.add("section-active")
}, options);

document.querySelectorAll("section[data-scroll-spy]").forEach(el => scrollSpy.observe(el));
