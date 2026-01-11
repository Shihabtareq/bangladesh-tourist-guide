// 1. URL থেকে division নাম বের করা


const params = new URLSearchParams(window.location.search);

const divisionName= params.get("name");

// 2. Division title বসানো

document.getElementById("division-name").textContent=divisionName.toUpperCase();


// 3. Division image mapping

const divisionImages = {
    sylhet: "images/divisions/sylhet.jpg",
    dhaka: "images/divisions/dhaka.jpg",
    chattogram: "images/divisions/chattogram.jpg",
    rajshahi: "images/divisions/rajshahi.jpg",
    khulna: "images/divisions/khulna.jpg",
    barishal: "images/divisions/barishal.jpg",
    rangpur: "images/divisions/rangpur.jpg",
    mymensingh: "images/divisions/mymensingh.jpg"
};


// 4. Image element ধরা
const divisionImage = document.getElementById("division-image");


// 5. Image বসানো
divisionImage.src = divisionImages[divisionName] || "images/divisions/default.jpg";
divisionImage.alt = divisionName

//6. ইমেজের পাথ খুজে না পেলে
divisionImage.onerror = () =>{
    divisionImage.src ="images/divisions/default.jpg";
}



// js দিয়ে placesGrid div ধরতে হবে
const placesGrid = document.getElementById("placesGrid");

// একটা ফাংশন বানাবো যার কাজ হবে 
// ওই বিভাগের টপ জায়গা গুলো দেখানো

function showPlaces(divisionName){
    const places = placesData[divisionName];

    places.forEach(place => {
        const card = document.createElement("div");
        card.className="place-card";

        card.innerHTML=`
            <img src="${place.image}"></img>
            <h3>${place.name}</h3>
            <p>${place.description}</p>
        `;

        placesGrid.appendChild(card);
    });

}

showPlaces(divisionName);