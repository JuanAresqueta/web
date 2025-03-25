const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => {
    moveToLeft();
    resetInterval();
})
btnRight.addEventListener("click", e => {
    moveToRight();
    resetInterval();
})


let operacion = 0;
let widthImg = 100 / sliderSection.length;
let counter = 0;
let interval; // Variable para el intervalo


function resetInterval() {
    clearInterval(interval); // Detiene el intervalo actual
    interval = setInterval(moveToRight, 5000); // Crea un nuevo intervalo
}


function moveToRight(){
    if(counter >= sliderSection.length-1){
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease 0.6s"
        return;
    }
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease 0.6s"
}

function moveToLeft(){
    counter--;
    if(counter < 0){
        counter = sliderSection.length-1;
        operacion = widthImg*(sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease 0.6s"
        return;
    }  
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease 0.6s"
    
}

resetInterval();