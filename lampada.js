const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function lampOn(){
    lamp.src = './img/Lampada_acesa.jpeg'
}

function lampOff(){
    lamp.src = './img/Lampada_apagada.jpeg'
}

turnOn.addEventListener ('click', lampOn)
turnOff.addEventListener ('click', lampOff)