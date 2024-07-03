const fila = document.querySelector(".contenedor-carousel");
const películas = document.querySelectorAll(".película");

const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

//Event listener para la flecha derecha//
flechaDerecha.addEventListener("click", () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores .activo");
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

//Event listener para la flecha izquierda//
flechaIzquierda.addEventListener("click", () => {
    fila.scrollLeft -= fila.offsetWidth;
    const indicadorActivo = document.querySelector(".indicadores .activo");
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

//Paginación//
const númeroPáginas = Math.ceil(películas.length / 5);
for(let i = 0; i < númeroPáginas; i++){
    const indicador = document.createElement("button");

    if(i === 0){
        indicador.classList.add("activo");
    }

    document.querySelector(".indicadores") .appendChild(indicador);
    indicador.addEventListener("click", (e) =>{
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector(".indicadores .activo").classList.remove("activo");
        e.target.classList.add("activo");
    });
}

//Hover//
películas.forEach((película) => {
    película.addEventListener("mouseenter", () => {
        const elemento =e.currentTarget;
        setTimeout(() => {
            películas.forEach(película => película.classList.remove("hover"));
            elemento.classList.add("hover");
        }, 300);
    });
});

fila.addEventListener("mouseleave", () => {
    película.forEach(película => película.classList.remove("hover"));
});