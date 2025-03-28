const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight();
}, 5000);



let operacion = 0;
let widthImg = 100 / sliderSection.length;
let counter = 0;

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