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
        const division = card.dataset.division;
        showPlaces(division);
    });
});


// ====---- Tourist Places Data Structure -----=====//
const touristData = {
    //........ DHAKA START  .......// 
  dhaka: [
    {
      name: "Lalbagh Fort",
      image: "images/places/lalbagh.jpg",
      description: "Historic Mughal fort in Old Dhaka."
    },
    {
      name: "Ahsan Manzil",
      image: "images/places/ahsan-manzil.jpg",
      description: "Pink palace beside Buriganga river."
    }
    ],

    //........ CHATTOGRAM START  .......// 

  chattogram: [
    {
      name: "Cox's Bazar",
      image: "images/places/cox-bazar.jpg",
      description: "World's longest sea beach."
    },
    {
      name: "Patenga Beach",
      image: "images/places/patenga.jpg",
      description: "Popular beach near Chattogram city."
    }
    ],

    //........ SYLHET START  .......// 

  sylhet: [
    {
      name: "Ratargul Swamp Forest",
      image: "images/places/ratargul.jpg",
      description: "Freshwater swamp forest."
    },
    {
      name: "Jaflong",
      image: "images/places/jaflong.jpg",
      description: "Hills, rivers and stone collection area."
    },
    {
      name: "shahjalal mazar",
      image: "images/places/shahjalal-mazar.jpg",
      description: "Hazrat shah jalal who brought islam for Bangladesh."
    },
    {
      name: "Lawachara National Park",
      image: "images/places/Lawachara.jpg",
      description: "Lawachara National Park is a major national park and nature reserve in Bangladesh."
    },
    {
      name: "Madhabkunda Waterfall",
      image: "images/places/Madhabkunda.jpg",
      description: "Madhabkunda Waterfall is one of the highest waterfalls in Bangladesh."
    },
    {
      name: "Lakkatura Tea Garden",
      image: "images/places/Lakkatura.jpg",
      description: " Lakkatura Tea Garden is the green forest surrounding the northern edge of Sylhet city."
    }
    ],

    //........ BARISHAL START  .......// 
  barishal: [
    {
      name: "The Baitul Aman Jame Masjid",
      image: "images/places/guthiya.jpg",
      description: " Baitul aman jame-masjid or Guthia mosque is a famous mosque in Barisal."
    },
    {
      name: "Gauva Garden",
      image: "images/places/gauva-garden.jpg",
      description: "The floating guava market is the largest floating market in BD"
    }
    ],


    //........ KHULNA START  .......// 

  khulna: [
    {
      name: "Lalbagh Fort",
      image: "images/places/lalbagh.jpg",
      description: "Historic Mughal fort in Old Dhaka."
    },
    {
      name: "Ahsan Manzil",
      image: "images/places/ahsan-manzil.jpg",
      description: "Pink palace beside Buriganga river."
    }
    ],

    //........ MYMENSINGH START  .......// 

  mymensingh: [
    {
      name: "Lalbagh Fort",
      image: "images/places/lalbagh.jpg",
      description: "Historic Mughal fort in Old Dhaka."
    },
    {
      name: "Ahsan Manzil",
      image: "images/places/ahsan-manzil.jpg",
      description: "Pink palace beside Buriganga river."
    }
    ],

    //........ RAJSHAHI START  .......// 

  rajshahi: [
    {
      name: "Lalbagh Fort",
      image: "images/places/lalbagh.jpg",
      description: "Historic Mughal fort in Old Dhaka."
    },
    {
      name: "Ahsan Manzil",
      image: "images/places/ahsan-manzil.jpg",
      description: "Pink palace beside Buriganga river."
    }
    ],

    //........ RANGPUR START  .......// 

  rangpur: [
    {
      name: "Lalbagh Fort",
      image: "images/places/lalbagh.jpg",
      description: "Historic Mughal fort in Old Dhaka."
    },
    {
      name: "Ahsan Manzil",
      image: "images/places/ahsan-manzil.jpg",
      description: "Pink palace beside Buriganga river."
    }
    ]
};


// Dynamic Rendering Logic 
const placesGrid = document.getElementById("placesGrid");
const placesTitle = document.getElementById("places-title");

function showPlaces(division){
    placesGrid.innerHTML = "";
    placesTitle.textContent = `Tourist places in ${division.toUpperCase()}`;

    touristData[division].forEach(place =>{
        const placeCard = document.createElement("div");
        placeCard.classList.add("place-card");

        placeCard.innerHTML = `
            <img src = "${place.image}"  alt= "${place.name}">
            <div class="content">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
            </div>
        `;
        placesGrid.appendChild(placeCard);
    });
}



/* ===== Divisions Section END ===== */