const chat=document.createElement("div");
chat.className="chat";
tarjeta.appendChild(chat);

const conversacion=[
["tu","Hola ❤️"],
["ella","Hola 🥰"],
["tu","Hice algo para ti"],
["ella","¿Ah sí?"],
["tu","Mira abajo 👀"],
["ella", "¡Qué lindo! 🙈"]
];

let i=0;

function siguienteMensaje(){
    if(i>=conversacion.length) return;

    const msg=document.createElement("div");
    msg.className="msg "+conversacion[i][0];
    msg.textContent=conversacion[i][1];
    chat.appendChild(msg);

    i++;
    setTimeout(siguienteMensaje, 2000);
}

siguienteMensaje();
