document.getElementById('enter-button').addEventListener('click', function() {
    document.querySelector('.welcome-page').style.display = 'none';
    document.querySelector('.verification-page').style.display = 'flex';
});

document.getElementById('verification-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    // Define el nombre y la contraseña correctos
    const correctName = 'ark'; // Reemplaza 'tuNombre' con el nombre que desees
    const correctPassword = '123'; // Reemplaza 'tuContraseña' con la contraseña que desees

    if (name === correctName && password === correctPassword) {
        window.location.href = 'home.html';
    } else {
        alert('Nombre o contraseña incorrectos.');
    }
});