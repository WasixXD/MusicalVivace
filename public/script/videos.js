const urls = [{src : "https://www.youtube.com/embed/BEDZJ2rbyi4", nome: "Ave Maria no Violino"}, {src:"https://www.youtube.com/embed/_e_s4jvn2cw", nome:" Clarinada Mahler + Rainha e Marcha Nupcial"},
{src : "https://www.youtube.com/embed/X1S7EiPNPr8", nome:"Hallelujah"}, {src: "https://www.youtube.com/embed/RZLHkQjpOgM", nome : "Tems Game of Thrones"}, {src:"https://www.youtube.com/embed/wsq_IfiuilA", nome:"Photograph"},
{src : "https://www.youtube.com/embed/5IEAi5sWk0o", nome:"Anjos do Resgate"}, {src : "https://www.youtube.com/embed/wul1GxYi2YE", nome: "Piano Solo A Star is Born"}, {src : "https://www.youtube.com/embed/D_bhdlPZgMQ", nome :"Perfect"},
{src :"https://www.youtube.com/embed/ciXXOrOF1RU", nome :"If I Ain't Got You"}, {src : "https://www.youtube.com/embed/JepYH1zjOKM", nome: "Secrets"}, {src:"https://www.youtube.com/embed/ZNBJyiCHzVM", nome:"Back in Black"}, {src : "https://www.youtube.com/embed/5VtbrSzTsFA", nome: "Ave Maria de Gounod"},
{src :"https://www.youtube.com/embed/9b7jvrn8phE", nome:"Escolhi te esperar"}, {src:"https://www.youtube.com/embed/tGIXl49aNyU", nome:"Stand by Me"},{src : "https://www.youtube.com/embed/FYZzCZhoP7A", nome : "Thinking Out Loud"} ]
let ul = document.querySelector("#holder")


for(let i in urls) {
    //Criando os elementos
    let li = document.createElement("li")
    let iframe = document.createElement("iframe")

    //Setar os atributos do iframe
    iframe.width = "560"
    iframe.height = "315"
    iframe.src = urls[i].src
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    iframe.allowFullscreen = true

    //Adicionando o video na lista
    li.appendChild(iframe)
    ul.appendChild(li)
}