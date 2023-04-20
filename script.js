//Guardo en un variable el boton y el body
const darkModeBtn = document.querySelector('#dark-mode-btn');
const body = document.body;

// Variable para saber si el modo esta activo o no.
let isDarkMode = false;

// event listener para el boton
darkModeBtn.addEventListener('click',()=>{
    if(!isDarkMode){
        body.classList.add('dark-mode');
        body.classList.add('bg-dark.bg-gradient');
        body.classList.remove('bg-body');
        isDarkMode = true;
        darkModeBtn.textContent = 'Desactivar modo oscuro';
    }
    else{
        body.classList.remove('dark-mode');
        body.classList.remove('bg-dark.bg-gradient');
        isDarkMode = false;
        darkModeBtn.textContent = 'Activar modo oscuro';
    }
})