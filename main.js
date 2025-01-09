let urlBase = "http://192.168.68.200/API/1.0"

function moverServo(accion) {
    fetch(urlBase + '/servo?accion=' + accion)
        .then(res => {
            if(res.status != 200) {
                console.error(res.body)
            }
        })
}
function pararServo(servo) {
    fetch(urlBase + '/servo?accion=parar&servo=' + servo)
        .then(res => {
            if(res.status != 200) {
                console.error(res.body)
            }
        })
}
function actualizarIP() {
    urlBase = 'http://'
    campos = document.querySelectorAll('.ipInput_container input')
    for(let i = 0; i < 3; i++) {
        urlBase = urlBase + campos[i].value + '.'
    }
    urlBase = urlBase + campos[3].value + '/API/1.0'
}
function cambio(event) {
    let actual = event.target
    if(actual.name.includes('Range')){
        document.querySelector('.configuraciones form input.' + actual.name.slice(0, -5)).value = actual.value
    } else {
        document.querySelector('.configuraciones form input.' + actual.name + "Range").value = actual.value
    }
}
function enviarConfig() {
    fetch(urlBase + '/config?' + 'velocidad=' + document.querySelector('section.configuraciones form input.velocidad').value + '&fadein=' + document.querySelector('section.configuraciones form input.fadein').value + '&fadeout=' + document.querySelector('section.configuraciones form input.fadeout').value)
        .then(res => {
            if(res.status != 200) {
                console.error(res.body)
            }
        })
}