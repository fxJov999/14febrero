const appSanValentin = document.getElementById("app-valentin");
const tarjeta = document.createElement("div");
tarjeta.className = "tarjeta";

const titulo = document.createElement("h1");
titulo.textContent = "Feliz 14 de Febrero 💕";

const mensajeBonito = document.createElement("p");
mensajeBonito.innerHTML =
"Gracias por ser una persona súper especial que ha llegado a mi vida 🌟." + "<br>" +
"Cada momento contigo es especial y mágico. 💖" + "<br>" +
"Aprecio cada momento que estamos juntos 🙈";


const boton = document.createElement("button");
boton.textContent = "Presióname 😊";

boton.addEventListener("click", () => {
    mostrarSorpresa();
});

tarjeta.appendChild(titulo);
tarjeta.appendChild(mensajeBonito);
tarjeta.appendChild(boton);
appSanValentin.appendChild(tarjeta);

const frases = [
    "Eres increíble 💖",
    "Me encantas ✨",
    "Gracias por todo ❤️",
    "Contigo todo es mejor 🌸"
];

boton.addEventListener("mouseover", () => {
    const random = frases[Math.floor(Math.random()*frases.length)];
    mensajeBonito.textContent = random;
});

function mostrarSorpresa() {
    mensajeBonito.textContent =
    "Eres mi persona favorita en el mundo ✨";
    crearCorazones();
}

function crearCorazones () {
    for (let i=0; i<30; i++) {

        const corazon = document.createElement("div");
        corazon.className = "corazon";
        corazon.textContent = "💖";

        corazon.style.left = Math.random()*100 + "vw";
        corazon.style.fontSize = (Math.random()*20+10) + "px";
        corazon.style.animationDuration = (Math.random()*3+2) + "s";

        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 5000);   
    }
}


const btnCarta = document.createElement("button");
btnCarta.textContent = "Abrir carta 💌";

const carta = document.createElement("div");
carta.className = "carta";

const cartaContenido = document.createElement("div");
cartaContenido.className = "carta-contenido";
cartaContenido.textContent =
"No soy perfecto, pero contigo quiero ser mejor cada día. " +
"Gracias por compartir tu tiempo, tus risas y tu cariño conmigo ❤️";

carta.appendChild(cartaContenido);
tarjeta.appendChild(btnCarta);
tarjeta.appendChild(carta);

btnCarta.addEventListener("click", ()=>{
    carta.classList.toggle("abierta");
});


// ========================
// MINI JUEGO
// ========================

const juego = document.createElement("div");
juego.className = "juego";

const pregunta = document.createElement("h2");
pregunta.textContent = "¿Quieres ser mi San Valentín? ❤️";

const btnSi = document.createElement("button");
btnSi.textContent = "SI 💕";
btnSi.className = "si";

const btnNo = document.createElement("button");
btnNo.textContent = "NO 🙈";
btnNo.className = "no";

juego.appendChild(pregunta);
juego.appendChild(btnSi);
juego.appendChild(btnNo);
tarjeta.appendChild(juego);


let escalaSi = 1;
let escalaNo = 1;

btnNo.addEventListener("click", ()=>{

    escalaSi += 0.3;
    escalaNo = Math.max(escalaNo - 0.2, 0); // evita valores negativos

    btnSi.style.transition = "transform 0.3s";
    btnNo.style.transition = "transform 0.3s";

    btnSi.style.transform = `scale(${escalaSi})`;
    btnNo.style.transform = `scale(${escalaNo})`;

    // desaparece
    if(escalaNo <= 0.4){
        btnNo.style.display = "none";
    }
});

btnNo.addEventListener("mouseenter", ()=>{
    const x = Math.random()*200 - 100;
    const y = Math.random()*200 - 100;

    btnNo.style.position = "relative";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
});


btnSi.addEventListener("click", ()=>{
    pregunta.textContent = "Sabía que dirías que sí 🥰❤️";
    btnNo.style.display="none";
    btnSi.style.transform="scale(1.5)";
    crearCorazones();
});
