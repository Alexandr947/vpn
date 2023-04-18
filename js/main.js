// Получаем видимую часть слайда
var it;

// Получаем кнопку вперёд
let btnNext = document.getElementById("next");
// Получаем кнопку назад
let btnPrev = document.getElementById("prev");
// Получаем элемент со всеми слайдами
let slider = document.querySelector(".review-slider");
// Получаем элементы показа слайда
//let viewSliders = document.querySelectorAll(".viewSlide");
// Объявляем переменную номера слайда
let viewSlide = 0;
let rowwidth =  document.querySelector(".review-second-row").offsetWidth;
let sliderwidth =  document.querySelector(".review-slider").offsetWidth;
it = Math.floor ((sliderwidth-rowwidth)/369);
console.log(it);


//addEvent(window, "resize", function() {console.log('resized');});

window.addEventListener("resize", function() {
    let rowwidth =  document.querySelector(".review-second-row").offsetWidth;
    let sliderwidth =  document.querySelector(".review-slider").offsetWidth;
    it = Math.floor ((sliderwidth-rowwidth)/369);
    console.log(it);
});
 
// Назначаем цвет индикатор слайда зелёный it = (sliderwidth -rowwidth)/369;
//viewSliders[0].style.backgroundColor = "green";
 
// Обработка клика на кнопку вперёд
btnNext.addEventListener("click", function () {
    


    if (viewSlide < it) { 
        viewSlide++;
    } else { 
        viewSlide = it;
    }

    slider.style.left = -viewSlide * 385 + "px";
    console.log(it);
    console.log(viewSlide);
    
    if (viewSlide === it) { 
        btnNext.style.backgroundColor = "#D1D1D1"
    } 

    if (viewSlide > 0) { 
        btnPrev.style.backgroundColor = "#F53838"
    } 
});
 

btnPrev.addEventListener("click", function () {

    if (viewSlide > 0) { 
        viewSlide--; 
    } else { 
        viewSlide = 0; 
    }

    if (viewSlide < it) { 
        btnNext.style.backgroundColor = "#F53838"
    } 

    if (viewSlide === 0) { 
        btnPrev.style.backgroundColor = "#D1D1D1"
    } 

    if (viewSlide > 0) { 
        btnPrev.style.backgroundColor = "#F53838"
    } 



    slider.style.left = -viewSlide * 385 + "px";
});