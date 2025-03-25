const lamp = document.getElementById('lamp');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    lamp.src = './img/yellow_lamp.png';
});