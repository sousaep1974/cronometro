function cronometro() {
function criaHoraDosSegundos(segundos) {
const data = new Date(segundos * 1000);
return data.toLocaleTimeString("pt-BR", {
hour12: false,
timeZone: "UTC",
});
}

const cronometro = document.querySelector(".cronometro");
let segundos = 0;
let timer;

function iniciaCronometro() {
timer = setInterval(function () {
segundos++;
cronometro.innerHTML = criaHoraDosSegundos(segundos);
}, 1000);
}

document.addEventListener("click", function (e) {
const el = e.target;

if (el.classList.contains("zerar")) {
clearInterval(timer);
cronometro.innerHTML = "00:00:00";
cronometro.classList.remove("pausado");
segundos = 0;
}

if (el.classList.contains("iniciar")) {
cronometro.classList.remove("pausado");
clearInterval(timer);
iniciaCronometro();
}

if (el.classList.contains("pausar")) {
clearInterval(timer);
cronometro.classList.add("pausado");
}
});
}
cronometro();
