const vert = document.querySelector('#Green')
const rouge = document.querySelector('#Red')
const bleu = document.querySelector('#Blue')
let texte = document.querySelector('#text')

vert.addEventListener('click', handleAddColorGreen)
rouge.addEventListener('click', handleAddColorRed)
bleu.addEventListener('click', handleAddColorBlue)

function handleAddColorGreen(event){
    texte.classList.add("colorgreen")
    texte.classList.remove("colorblue")
    texte.classList.remove("colorred")
}

function handleAddColorRed(event){
    texte.classList.add("colorred")
    texte.classList.remove("colorblue")
    texte.classList.remove("colorgreen")
}


function handleAddColorBlue(event){
    texte.classList.add("colorblue")
    texte.classList.remove("colorgren")
    texte.classList.remove("colorred")
}