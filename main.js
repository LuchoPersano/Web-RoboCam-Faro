function moverServo(accion) {
    fetch('API/1.0/servo?accion=' + accion)
        .then(res => {
            if(res.status != 200) {
                console.error(res.body)
            }
        })
}
function pararServo(servo) {
    fetch('API/1.0/servo?accion=parar&servo=' + servo)
        .then(res => {
            if(res.status != 200) {
                console.error(res.body)
            }
        })
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
    fetch('API/1.0/config?velocidad=' + document.querySelector('section.configuraciones form input.velocidad').value + '&fadein=' + document.querySelector('section.configuraciones form input.fadein').value + '&fadeout=' + document.querySelector('section.configuraciones form input.fadeout').value)
        .then(res => {
            if(res.status != 200) {
                console.error(res.body)
            }
        })
}
