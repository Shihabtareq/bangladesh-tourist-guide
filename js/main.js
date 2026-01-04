/* ===== Slider Section START ===== */

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

// slide automation 
let slideInterval = setInterval(nextSlide,4000);

function nextSlide(){
    currnetSlide++;
    if (currnetSlide>= slides.length){
        currnetSlide=0;
    }
    showSlide(currnetSlide);
}

// Hover করলে Pause 
const slider = document.querySelector('.slider');

slider.addEventListener('mouseenter', ()=>{
    clearInterval(slideInterval);
});

slider.addEventListener('mouseleave', ()=>{
    slideInterval = setInterval(nextSlide, 4000);
});


/* ===== Slider Section END ===== */


/* ===== Divisions Section START ===== */

const divisionCards = document.querySelectorAll('.division-card');

divisionCards.forEach(card =>{
    card.addEventListener('click', ()=>{
        const divisionName = card.CDATA_SECTION_NODE.division;
        console.log("Selected Division:",divisionName);
    });
});

/* ===== Divisions Section END ===== */