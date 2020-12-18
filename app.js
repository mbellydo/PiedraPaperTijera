const tijera = document.querySelector('#tijera');
const paper = document.querySelector('#paper')
const piedra = document.querySelector('#piedra')
const again = document.querySelector('#playAgain')

const hide = document.getElementsByClassName('hide')


var array = ["Scissors", "Paper", "Rock"]

const button = document.querySelector('button')
const eleccion = document.querySelector('#eleccion')
const resultado = document.querySelector('#resultado')
const mensajeResultado = document.querySelector('h2')
const puntos = document.querySelector('#puntos')

var puntuacion = 0

tijera.addEventListener('click', function () {
    mostrarIcon('Scissors')
}
)

paper.addEventListener('click', function () {
    mostrarIcon('Paper')
}
)

piedra.addEventListener('click', function () {
    mostrarIcon('Rock')
}
)

again.addEventListener('click', function () {

    for (var i = 0; i < hide.length; i ++) {
        hide[i].style.display = 'none';
    }

    eleccion.style.display = "block";
})

function mostrarIcon(elejido) {

    document.querySelector('#Ele' + elejido).style.display = 'block'
    eleccion.style.display = "none";
    resultado.style.display = "block";
    randomIcon(elejido)
}

function randomIcon(elejido) {

    var random = array[Math.floor(Math.random() * array.length)];

    document.querySelector('#AI' + random).style.display = 'block';

    document.querySelector('#show').style.display = 'block'

    if (elejido == random) {
        mensajeResultado.innerHTML = "Empate"
    } else if (elejido == "Scissors" && random == "Rock") {
        mensajeResultado.innerHTML = "Has Perdido"
        puntuacion--;
    } else if (elejido == "Scissors" && random == "Paper") {
        mensajeResultado.innerHTML = "Has Ganado"
        puntuacion++;
    }

    else if (elejido == "Rock" && random == "Scissors") {
        mensajeResultado.innerHTML = "Has Ganado"
        puntuacion++;
    } else if (elejido == "Rock" && random == "Paper") {
        mensajeResultado.innerHTML = "Has Perdido"
        puntuacion--;
    }

    else if (elejido == "Paper" && random == "Rock") {
        mensajeResultado.innerHTML = "Has Ganado"
        puntuacion++;
    } else if (elejido == "Paper" && random == "Scissors") {
        mensajeResultado.innerHTML = "Has Perdido"
        puntuacion--;
    }

    puntos.innerHTML = puntuacion;

    /*
        if (elejido === "Paper") {
            if (random === "Rock") {
                puntuacion++;
                document.querySelector('#puntos').innerHTML = puntuacion;
            } else {
                if (random === "Scissors") {
                    puntuacion--;
                    document.querySelector('#puntos').innerHTML = puntuacion;
                }
            }
        }
    
        if (elejido === "Scissors") {
            if (random === "Rock") {
                puntuacion--;
                document.querySelector('#puntos').innerHTML = puntuacion;
            } else {
                if (random === "Paper") {
                    puntuacion++;
                    document.querySelector('#puntos').innerHTML = puntuacion;
                }
            }
        }
    
    */
}