let mode = document.querySelector(".selected").textContent;
let colors = generateRandomColors(mode)
let square = document.querySelectorAll(".square")
let pickedColor = pickColor(colors)
let colorDisplay = document.getElementById("colorDisplay");
let clickedColor = "";
let easy = document.getElementById("easyButton");
let hard = document.getElementById("hardButton");
let h1 = document.querySelector("h1");


function jugar(){
    for (i=0 ; i < square.length ; i++){
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function(){
        clickedColor = this.style.backgroundColor;
        if(clickedColor != pickedColor){
            this.style.opacity = "0";
            document.getElementById("message").innerHTML = "Try again!"
        } else if (clickedColor == pickedColor){
            document.getElementById("message").innerHTML = "Correct!"
            h1.style.backgroundColor = pickedColor;
            changeColors(pickedColor)
            let reset = document.getElementById("reset");
            reset.innerHTML = "PLAY AGAIN?"
            reset.addEventListener("click", function(){
                reset.innerHTML = "NEW COLORS!";
                document.getElementById("message").innerHTML = "";
            })
        }
    })
}
}


// Para indicar el color en el titulo
colorDisplay.innerHTML = pickedColor;


// ChangeColors para cambiar los colores de todos una vez que gane al color ganador
function changeColors(color){
    for(i=0; i < square.length ; i++){
        square[i].style.backgroundColor = color;
        square[i].style.opacity = "1";
    }
}


//  pickColor selecciona el nuevo color ganador
function pickColor(colores){
    return colores[Math.floor(Math.random() * colores.length)]
}


// Crea nuevos colores
function randomColor(){
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);
    return `rgb(${r}, ${g}, ${b})`
}


// Genera nuevos colores dependiendo la dificultad, easy o hard
function generateRandomColors(mode){
    if(mode == "Easy"){
        return [randomColor(), randomColor(), randomColor()]
    } else {
        return [randomColor(), randomColor(), randomColor(), randomColor(), randomColor(),randomColor()]
    }
}


// Resetea el juego cuando el jugador lo desee
function reset(){
    let reset = document.getElementById("reset");
    reset.addEventListener("click", function(){
        colors = generateRandomColors(mode)
        changeColors(colors)
            pickedColor = pickColor(colors)
            h1.style.backgroundColor = "";
            colorDisplay.innerHTML = pickedColor;
            jugar()
    })
}


easy.addEventListener("click", function(){
    easy.classList.add("selected")
    hard.classList.remove("selected")
    mode = document.querySelector(".selected").textContent;
    for (i=3; i < square.length; i++){
        square[i].style.visibility = "hidden"
    }
    changeColors(colors)
    colors = generateRandomColors(mode)
        pickedColor = pickColor(colors)
        h1.style.backgroundColor = "";
        colorDisplay.innerHTML = pickedColor;
        let reset = document.getElementById("reset");
        reset.innerHTML = "NEW COLORS!";
        document.getElementById("message").innerHTML = "";
        jugar()
})

hard.addEventListener("click", function(){
    hard.classList.add("selected")
    easy.classList.remove("selected")
    mode = document.querySelector(".selected").textContent;
    for (i=3; i < square.length; i++){
        square[i].style.visibility = "visible"
        square[i].style.display = "block"
    }
    changeColors(colors)
    colors = generateRandomColors(mode)
        pickedColor = pickColor(colors)
        h1.style.backgroundColor = "";
        colorDisplay.innerHTML = pickedColor;
        let reset = document.getElementById("reset");
        reset.innerHTML = "NEW COLORS!";
        document.getElementById("message").innerHTML = "";
        jugar()
})


jugar()
reset()
