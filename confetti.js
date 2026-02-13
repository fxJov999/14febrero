function lanzarConfetti(){

    const colores = ["#ff4b6e","#ffd93d","#6bcBef","#b28dff","#ff8fab"];

    for(let i=0;i<120;i++){

        const confetti = document.createElement("div");
        confetti.className = "confetti";

        confetti.style.left = Math.random()*100 + "vw";
        confetti.style.backgroundColor =
            colores[Math.floor(Math.random()*colores.length)];

        const duracion = Math.random()*3+2;
        confetti.style.animationDuration = duracion+"s";

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        }, duracion*1000);
    }
}
