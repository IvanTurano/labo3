const nav = document.querySelector(".navegacion")
const abrir = document.querySelector("#menu")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click",() => {
    nav.classList.add("visible")
})


cerrar.addEventListener("click",() => {
    nav.classList.remove("visible")
})