const afficher = document.querySelector('#Afficher');
const masquer = document.querySelector('#Masquer');
const texte = document.querySelector('#text');

masquer.addEventListener('click', handleRemovetext);
afficher.addEventListener('click', handleAddtext);

function handleRemovetext(){
    texte.style.display = "none";
}

function handleAddtext(){
    texte.style.display = "block";
}