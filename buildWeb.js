let content = `<div class="container">
    <section class="ip">
        <h2>IP de la placa NodeMCU 1.0</h2>
        <div class="ipInput_container section_container">
            <input type="number" class="1" value="192">
            <input type="number" class="2" value="168">
            <input type="number" class="3" value="68">
            <input type="number" class="4" value="200">
            <input type="button" class="actualizar" onclick="actualizarIP()" value="Actualizar">
        </div>
    </section>
    <section class="controles">
        <h2>Controles de la cámara</h2>
        <div class="controles_container section_container">
            <button class="flecha arriba" onmousedown="moverServo('arriba')" onmouseup="pararServo('tilt')">
                <span class="material-symbols-outlined">arrow_drop_up</span>
            </button>
            <button class="flecha derecha" onmousedown="moverServo('derecha')" onmouseup="pararServo('pan')">
                <span class="material-symbols-outlined">arrow_right</span>
            </button>
            <button class="flecha abajo" onmousedown="moverServo('abajo')" onmouseup="pararServo('tilt')">
                <span class="material-symbols-outlined">arrow_drop_down</span>
            </button>
            <button class="flecha izquierda" onmousedown="moverServo('izquierda')" onmouseup="pararServo('pan')">
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