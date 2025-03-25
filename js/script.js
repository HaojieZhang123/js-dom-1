const lamp = document.getElementById('lamp');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    // Controllo se la lampada e' accesa o spenta
    if (lamp.classList.contains('off')) {
        // Se spenta, accendo la lampada, cambio la classe che ne indica lo stato
        lamp.classList.remove('off');
        lamp.classList.add('on');
        // cambio l'immagine con la lampadina accesa
        lamp.src = 'img/yellow_lamp.png';
        // Cambio il testo del bottone
        button.textContent = 'Spegni';
    } else {
        // viceversa
        lamp.classList.remove('on');
        lamp.classList.add('off');
        lamp.src = 'img/white_lamp.png';
        button.textContent = 'Accendi';
    }
});

// Spiegazione Bonus
// Al click del bottone, viene aggiunto un event listener che verifica se la classe 'off' è presente nell'elemento lampada.
// Se la classe è presente, viene rimossa e aggiunta la classe 'on', viene cambiata l'immagine della lampada con quella accesa e cambiato il testo del bottone.
// Se la classe 'on' é presente, viene rimossa e aggiunta la classe 'off', viene cambiata l'immagine della lampada con quella spenta e cambiato il testo del bottone.