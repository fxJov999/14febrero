// ========================
// SETUP BASE
// ========================

const appSanValentin = document.getElementById("app-valentin");

const contenedor = document.createElement("div");
contenedor.className = "container py-5";
appSanValentin.appendChild(contenedor);

// GRID Bootstrap
const row = document.createElement("div");
row.className = "row justify-content-center";
contenedor.appendChild(row);

const col = document.createElement("div");
col.className = "col-lg-7 col-md-9";
row.appendChild(col);


// ========================
// TARJETA PRINCIPAL
// ========================

const tarjeta = document.createElement("div");
tarjeta.className = "card shadow-lg border-0 p-4 text-center";
col.appendChild(tarjeta);

const titulo = document.createElement("h1");
titulo.className = "mb-3 text-danger";
titulo.textContent = "Para Lessly Bonita 💕";

const mensajeBonito = document.createElement("p");
mensajeBonito.className = "lead";
mensajeBonito.innerHTML =
"Gracias por ser una persona súper especial que ha llegado a mi vida 🌟.<br>" +
"Cada momento contigo es especial y mágico. 💖<br>" +
"Aprecio cada momento que estamos juntos 🙈";

const boton = document.createElement("button");
boton.className = "btn btn-danger mt-3";
boton.textContent = "Presióname 😊";

tarjeta.appendChild(titulo);
tarjeta.appendChild(mensajeBonito);
tarjeta.appendChild(boton);


// ========================
// MENSAJES RANDOM
// ========================

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

boton.addEventListener("click", mostrarSorpresa);


// ========================
// CORAZONES LLUVIA
// ========================

function mostrarSorpresa() {
    mensajeBonito.textContent = "Eres mi persona favorita en el mundo ✨";
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
        setTimeout(() => corazon.remove(), 5000);
    }
}


// ========================
// CARTA DESPLEGABLE
// ========================

const btnCarta = document.createElement("button");
btnCarta.className = "btn btn-outline-danger mt-4";
btnCarta.textContent = "Abrir carta 💌";

const carta = document.createElement("div");
carta.className = "carta";

const cartaContenido = document.createElement("div");
cartaContenido.className = "card card-body text-danger";
cartaContenido.textContent =
"No soy perfecto, pero contigo quiero ser mejor cada día. " +
"Gracias por compartir tu tiempo, tus risas y tu cariño conmigo ❤️";

carta.appendChild(cartaContenido);
tarjeta.appendChild(btnCarta);
tarjeta.appendChild(carta);


// ========================
// MINI JUEGO
// ========================

const juego = document.createElement("div");
juego.className = "mt-4 text-center";
juego.style.display = "none";

const pregunta = document.createElement("h2");
pregunta.textContent = "¿Quieres ser mi San Valentín? ❤️";

const btnSi = document.createElement("button");
btnSi.className = "btn btn-success mx-2";
btnSi.textContent = "SI 💕";

const btnNo = document.createElement("button");
btnNo.className = "btn btn-secondary mx-2";
btnNo.textContent = "NO 🙈";

juego.appendChild(pregunta);
juego.appendChild(btnSi);
juego.appendChild(btnNo);
tarjeta.appendChild(juego);


// Mostrar juego
btnCarta.addEventListener("click", ()=>{
    carta.classList.toggle("abierta");
    juego.style.display = carta.classList.contains("abierta")
        ? "block"
        : "none";
});


// ========================
// LOGICA BOTONES
// ========================

let escalaSi = 1;
let escalaNo = 1;

btnNo.addEventListener("click", ()=>{
    escalaSi += 0.3;
    escalaNo = Math.max(escalaNo - 0.2, 0);

    btnSi.style.transform = `scale(${escalaSi})`;
    btnNo.style.transform = `scale(${escalaNo})`;

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


// ========================
// BLOQUEO
// ========================

const bloqueo = document.createElement("div");
bloqueo.className = "bloqueo";

const contra = document.createElement("input");
contra.className = "form-control w-auto text-center";
contra.placeholder = "Ingresa la Contraseña 🙈";

const entrar = document.createElement("button");
entrar.className = "btn btn-light mt-3";
entrar.textContent = "Entrar :)";

bloqueo.appendChild(contra);
bloqueo.appendChild(entrar);
document.body.appendChild(bloqueo);

entrar.onclick = () => {
    if (contra.value === "chulo") {
        bloqueo.remove();
    } else {
        alert("Contraseña incorrectaaaaa :(");
    }
};
