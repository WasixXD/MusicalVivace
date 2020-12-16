var data = document.getElementById("date").value
var hora = document.getElementById("hora").value
var local = document.getElementById("local").value
var texto = document.getElementById("texto").value



var enviar = document.querySelector(".btn")

texto.addEventListener("input", () => {
    enviar.setAttribute("href", `https://wa.me/5511973914863?text=${data}, ${hora}, ${local} \n${texto}`)
    console.log(texto)
})