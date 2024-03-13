let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
}

const sr = ScrollReveal ({
    distance: '40px',
    duration: 1500,
    reset: true
})

sr.reveal('.logo', {delay:200, origin:'left'});
sr.reveal('.navbar', {delay:400, origin:'top'});
sr.reveal('.menu-btn', {delay:520, origin:'right'});

sr.reveal('.home-text span', {delay:600, origin:'left'});
sr.reveal('.home-text h1', {delay:680, origin:'left'});
sr.reveal('.home-text p', {delay:750, origin:'left'});
sr.reveal('.main-btn', {delay:860, origin:'right'});

sr.reveal('.share', {delay:950, origin:'bottom'});

sr.reveal('.home-img', {delay:1000, origin:'right'});

// Función para activar la animación cuando la barra es visible en el viewport
function animateBars() {
    var skills = document.querySelectorAll('.fill');
    skills.forEach(function(skill) {
        if (isElementInViewport(skill)) {
            var percent = skill.getAttribute('data-percent');
            skill.style.width = percent + '%';
        }
    });
}

// Función para verificar si un elemento está en el viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Ejecutar la animación cuando se cargue la página
window.addEventListener('scroll', animateBars);
window.addEventListener('load', animateBars);


document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        const overlay = project.querySelector('.overlay');
        const details = project.querySelector('.project-details');

        overlay.addEventListener('click', function () {
            details.classList.toggle('active'); // Alternar la clase 'active' para mostrar/ocultar los detalles
        });

    });
});

function copyToClipboard(event) {
    var emailInput = document.getElementById('emailInput');
    emailInput.select();
    document.execCommand('copy');
    alert('Correo copiado al portapapeles: ' + emailInput.value);
}
