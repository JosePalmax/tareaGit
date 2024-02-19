var espacio = $("#fotos")
let espacio2 = document.querySelector('#fotos')

var cambiarColor = $("#cambiarColor")
let cambiarColor2 = document.querySelector('#cambiarColor')

var añadir = $("#añadir")
let añadir2 = document.querySelector('#añadir')

var color = $("#colorFondo")
let color2 = document.querySelector('#colorFondo')

var tono = "rgb(0,0,0)"
let tono2 = "rgb(0,0,0)"

var imagenes = ["pikachu.png", "gengar.png", "squirtle.png"]
let imagenes2 = ["pikachu.png", "gengar.png", "squirtle.png"]

/*JavaScript
color2.addEventListener('change', ()=>{
    tono2 = color2.value
}) */
color.change(() => {
    tono = color.val()
})
 
cambiarColor.click(() => {
    espacio.children().css("background-color", tono)
})

/* JavaScript
cambiarColor2.addEventListener('click', ()=>{
    let hijos = espacio2.getElementsByTagName('div')
    for (let i = 0; i < hijos.length; i++) {
        hijos[i].style.backgroundColor  = tono2
    }
}) */

espacio.on("click", "button", function () {
    if ($(this).text() == "Cambiar") {
        var imagen = $(this).siblings("img")
        imagen.attr("src", imagenes[Math.floor(Math.random() * imagenes.length)])
    } else if ($(this).text() == "Borrar") {
        $(this).parent().remove()
    }
})

añadir.click(function () {
    var nuevoElemento = $("<div>").addClass("foto")
    nuevoElemento.css("background-color", tono)
    nuevoElemento.append($("<img>").attr({ src: 'pikachu.png', alt: 'Imagen' }))
    nuevoElemento.append($("<button>").text("Cambiar"))
    nuevoElemento.append($("<button>").text("Borrar"))
    espacio.append(nuevoElemento)
    espacio = $("#fotos")
})

/* JavaScript 
añadir2.addEventListener('click', function(){
    let nuevoElemento = "<div class='foto' style='background-color: "+tono+";'><img src='pikachu.png' alt='Imagen'><button>Cambiar</button><button>Borrar</button></div>"
    espacio2.innerHTML += nuevoElemento
}) */