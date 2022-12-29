// - Напишіть «Карусель» – стрічку зображень, яку можна гортати ліворуч-праворуч натискаєте на стрілку.

let btnPrev = document.querySelector('.prev');
let btnNext = document.querySelector('.next');
let [dot1, dot2, dot3] = document.getElementsByClassName('dot');

dot1.onclick = () => currentSlides(1);
dot2.onclick = () => currentSlides(2);
dot3.onclick = () => currentSlides(3);

btnNext.onclick = () => plusSlides(1);
btnPrev.onclick = () => plusSlides(-1);


let sliderIndex = 1;
showSlides(sliderIndex);

function plusSlides(n) {
    showSlides(sliderIndex += n);
}

function currentSlides(n) {
    showSlides(sliderIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('mySlider');
    let dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        sliderIndex = 1;
    }
    if (n < 1) {
        sliderIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }

    slides[sliderIndex - 1].style.display = 'block';
    dots[sliderIndex - 1].classList.add('active');
}



