const regalo=document.createElement("div");
regalo.className="regalo";
regalo.textContent="🎁 Abrir sorpresa";

tarjeta.appendChild(regalo);

regalo.onclick=()=>{
    regalo.textContent="Eres lo mejor que me ha pasado ❤️";
    lanzarConfetti();
    crearCorazones();
};
