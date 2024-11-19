const mdp1 = document.querySelector('#password')
const mdp2 = document.querySelector('#confirmPassword')
const boutton = document.querySelector('#button')

boutton.addEventListener('click', handleVerification)

function handleVerification(){
    if (mdp1.value === mdp2.value) {
        mdp1.classList.add("vert")
        mdp2.classList.add("vert")
    }
    else if (mdp1.value != mdp2.value) {
        
        mdp1.classList.add("rouge")
        mdp2.classList.add("rouge")
        
    }
}