const sunLightEl = document.getElementById("dark-moon");
const moonDarkEl = document.getElementById("sun-light");

const menuToggle = document.getElementById('menu-toggle');
const closeSidebar = document.getElementById('close-sidebar');
const navbar = document.getElementById('navbar');

const navLinks = document.querySelectorAll("#navbar a");


const theme = localStorage.getItem('theme');
if(theme){
    document.body.classList.toggle('dark-mode-switch')
}
sunLightEl.addEventListener('click', switchTheme);
moonDarkEl.addEventListener('click', switchTheme);

function switchTheme(){
    document.body.classList.toggle('dark-mode-switch');
    if(document.body.classList.contains('dark-mode-switch')){
        localStorage.setItem('theme', 'dark-mode-switch');
    }else{
        localStorage.removeItem('theme')
    }
}



menuToggle.addEventListener('click', () =>{
    navbar.classList.add("active");
    menuToggle.style.display = "none";
    closeSidebar.style.display ="block";
});

closeSidebar.addEventListener("click", () =>{
    navbar.classList.remove("active");
    closeSidebar.style.display = "none";
    menuToggle.style.display ="block";

});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        closeSidebar.style.display = "none";
        menuToggle.style.display = "block";
    });
});