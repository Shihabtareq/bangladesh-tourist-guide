// select elements 

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currnetSlide = 0;

// slide function 
function showSlide(index){
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active')
}

// next slide 
nextBtn.addEventListener('click',()=>{
    currnetSlide++;
    if(currnetSlide >= slides.length){
        currnetSlide =0;
    }
    showSlide(currnetSlide);
});

// previous slide 
prevBtn.addEventListener('click',()=>{
    currnetSlide--;
    if(currnetSlide<0){
        currnetSlide=slides.length - 1;
    }
    showSlide(currnetSlide);
});

