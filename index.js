document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Por favor, complete todos los campos.');
        } else if (!validateEmail(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
        } else {
            alert('Mensaje enviado correctamente.');
            contactForm.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const subscribeForm = document.getElementById('subscribe-form');

    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('subscribe-email').value;

        if (!email) {
            alert('Por favor, ingrese su correo electrónico.');
        } else if (!validateEmail(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
        } else {
            alert('Suscripción exitosa.');
            subscribeForm.reset();
        }
    });
});
