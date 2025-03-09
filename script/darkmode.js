const buttonClick = document.getElementById('theme-switch');
const moonIcon = document.getElementById('moon-icon')
const sunIcon = document.getElementById('sun-icon')
let root = document.documentElement 
// pega elemento raiz do HTML

const showIcon = () => {
    
    if (moonIcon.style.display !=='none') {
        root.style.setProperty("--white-color", "#F6F6F6");
        root.style.setProperty("--background-color", "#000000");
        root.style.setProperty("--secondary-color", "#bb3f5a");
        root.style.setProperty("--dark-color", "#1A1A19");
        root.style.setProperty("--moon-son-color", "#FFB400");

        moonIcon.style.display = 'none'
        sunIcon.style.display  = 'block'

    } else {
        root.style.setProperty("--white-color", "#818b9a");
        root.style.setProperty("--background-color", "#052e43");
        root.style.setProperty("--secondary-color", "#4c6e9f");
        root.style.setProperty("--dark-color", "#1e1212");
        root.style.setProperty("--moon-son-color", "#FFB400");

        sunIcon.style.display  = 'none'
        moonIcon.style.display  = 'block'
    }

}