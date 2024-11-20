const image = document.querySelector("#image1")

image.addEventListener("mouseenter", handleMouseEnterBorder)
image.addEventListener("mouseout" , handleMouseOutBorder)

function handleMouseEnterBorder(event){
    event.target.classList.add("redBorder")
}

function handleMouseOutBorder(event){
    event.target.classList.remove("redBorder")
}

// utiliser toggle a la place de add et remove