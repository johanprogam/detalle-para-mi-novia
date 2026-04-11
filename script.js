function abrirCarta() {
    const btn = document.getElementById("btn-abrir");
    const carta = document.getElementById("carta");
    const musica = document.getElementById("musica");

    // Fade out button securely
    btn.classList.add("fade-out");
    
    // Attempt to play music (browser policies might require user interaction, 
    // which this click event satisfies).
    if(musica) {
        musica.volume = 0.5; // Set reasonable volume
        musica.play().catch(error => {
            console.log("Audio play failed or was blocked by browser", error);
        });
    }

    // Show letter with animation after a tiny delay for effect
    setTimeout(() => {
        btn.style.display = 'none'; // removing it from flow completely
        carta.classList.add("visible");
    }, 400); // 400ms matches CSS transition length almost exactly
}

/* Generar hojas/flores mejoradas */
function crearFlor() {
    const flor = document.createElement("div");
    flor.classList.add("flower");
    
    // Choose between different flower aesthetics softly
    const folios = ["🌸", "💮", "🌺", "✨"]; 
    flor.innerHTML = folios[Math.floor(Math.random() * folios.length)];

    // Randomize initial horizontal position
    flor.style.left = Math.random() * 100 + "vw";
    
    // Randomize fall duration (between 6s and 12s)
    const fallDuration = Math.random() * 6 + 6;
    flor.style.animationName = "fall";
    flor.style.animationDuration = fallDuration + "s";
    flor.style.animationTimingFunction = "linear";

    // Randomize sway
    const flowContainer = document.createElement("div");
    flowContainer.classList.add("flower");
    flowContainer.style.left = flor.style.left;
    flor.style.left = "0"; // Reset inner left

    flowContainer.style.animation = `sway ${Math.random() * 2 + 2}s ease-in-out infinite alternate`;
    
    // Randomize size to add depth perception
    const size = Math.random() * 1.5 + 0.8; // Transform scale from 0.8 to 2.3
    flor.style.transform = `scale(${size})`;
    flor.style.opacity = Math.random() * 0.5 + 0.5; // Between 0.5 and 1
    
    flowContainer.appendChild(flor);
    document.body.appendChild(flowContainer);

    // Remove element safely after falling to free memory
    setTimeout(() => {
        flowContainer.remove();
    }, fallDuration * 1000);
}

// Generate flowers dynamically and at varied random bursts
setInterval(crearFlor, 400);