let content = `<div class="container">
    <section class="controles">
        <h2>Controles de la cámara</h2>
        <div class="controles_container section_container">
            <button class="flecha arriba" onmousedown="moverServo('arriba')" onmouseup="pararServo('tilt')" ontouchstart="moverServo('arriba')" ontouchend="pararServo('tilt')">
                <span class="material-symbols-outlined">arrow_drop_up</span>
            </button>
            <button class="flecha derecha" onmousedown="moverServo('derecha')" onmouseup="pararServo('pan')" ontouchstart="moverServo('derecha')" ontouchend="pararServo('pan')">
                <span class="material-symbols-outlined">arrow_right</span>
            </button>
            <button class="flecha abajo" onmousedown="moverServo('abajo')" onmouseup="pararServo('tilt')" ontouchstart="moverServo('abajo')" ontouchend="pararServo('tilt')">
                <span class="material-symbols-outlined">arrow_drop_down</span>
            </button>
            <button class="flecha izquierda" onmousedown="moverServo('izquierda')" onmouseup="pararServo('pan')" ontouchstart="moverServo('izquierda')" ontouchend="pararServo('pan')">
                <span class="material-symbols-outlined">arrow_left</span>
            </button>
        </div>
    </section>
    <section class="configuraciones">
        <h2>Configuraciones</h2>
        <form class="section_container">
            <label for="valocidad">Velocidad (%)</label>
            <div><input type="range" name="velocidadRange" class="velocidadRange" value="75" min="1" max="100" step="1" onchange="cambio(event)"><input type="number" name="velocidad" class="velocidad" value="75" min="1" max="100" onchange="cambio(event)"></div>
            <label for="fadein">Tiempo de fade-in (ms)</label>
            <div><input type="range" name="fadeinRange" class="fadeinRange" value="0" min="0" max="2000" onchange="cambio(event)"><input type="number" name="fadein" class="fadein" value="0" min="0" max="2000" onchange="cambio(event)"></div>
            <label for="fadeout">Tiempo de fade-out (ms)</label>
            <div><input type="range" name="fadeoutRange" class="fadeoutRange" value="0" min="0" max="2000" onchange="cambio(event)"><input type="number" name="fadeout" class="fadeout" value="0" min="0" max="2000" onchange="cambio(event)"></div>
            <input type="button" value="Guardar" onclick="enviarConfig()">
        </form>
    </section>
</div>`

document.querySelector('body').insertAdjacentHTML("afterbegin",content)