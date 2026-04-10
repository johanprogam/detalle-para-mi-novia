function abrirCarta() {
    document.getElementById("carta").style.display = "block";
    document.getElementById("musica").play();
}

/* Generar flores */
function crearFlor() {
    const flor = document.createElement("div");
    flor.classList.add("flower");
    flor.innerHTML = "🌸";

    flor.style.left = Math.random() * 100 + "vw";
    flor.style.animationDuration = (Math.random() * 5 + 5) + "s";

    document.body.appendChild(flor);

    setTimeout(() => {
        flor.remove();
    }, 8000);
}

setInterval(crearFlor, 300);