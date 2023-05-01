let burgeri = document.querySelector('.burgeri');
let navbar_link = document.querySelector('.navbar_link');


burgeri.addEventListener('click', menuopen)


function menuopen(){
    navbar_link.classList.toggle('change');
    
}


const cards = [
    {
      photo: "img/ea035b60de2d849c7878e7fb63a95425.jpg",
      title: "FLIGHT BOOKING",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat eget quam blandit fermentum a a ex. ",
    },
    {
      photo: "img/9e5bf3cd14ad79482d9c13acb38088b8.jpg",
      title: "HOTEL & RESORT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat eget quam blandit fermentum a a ex. ",
    },
    {
      photo: "img/9c352d7d2b3e238d6f6b40e837de16a9.jpg",
      title: "FAMYLY TRIP PLANNER",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat eget quam blandit fermentum a a ex. ",
    },
    {
        photo: "img/10c11c3d7b266b240929f638a8e297e8.jpg",
        title: "CRUISE TOUR",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat eget quam blandit fermentum a a ex. ",
      },
      {
        photo: "img/10c11c3d7b266b240929f638a8e297e8.jpg",
        title: "FIRE CAMP",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat eget quam blandit fermentum a a ex. ",
      },
      {
        photo: "img/6f715ec706b8b6b37c2063a2bb94b577.jpg",
        title: "FAMYLY TRIP PLANNER",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat eget quam blandit fermentum a a ex. ",
      },
    
  ];


  const cardContainer = document.querySelector(".card-container");
  
  const modal = document.querySelector("#modal");
  const modalImage = document.querySelector(".modal-image");
  const modalTitle = document.querySelector(".modal-title");
  const modalDescription = document.querySelector(".modal-description");
  const closeBtn = document.querySelector(".close-btn");

cards.forEach((card) => {
  const cardHTML = `
    
    <div class="col-4 hs_res_6 hs_res_12" >

    <div class="cards">
    <div class="card_hover">
      <img src="${card.photo}" alt="${card.title}" class="card-image">
      <div class="card_filtter"></div>
      
      
      </div>
      </div>
      
      
      <h2 class="card-title">${card.title}</h2>
      <p class="card-description">${card.description}</p>

      

      <div>
    
    </div>
    


  `;
  
  cardContainer.insertAdjacentHTML("beforeend", cardHTML);
});


const cardImages = document.querySelectorAll(".card-image");
const cards_array = document.querySelectorAll('.cards')
  
  cards_array.forEach((cards_array, index) => {
    cards_array.addEventListener("click", () => {
      modalImage.src = cards[index].photo;
      
      modalTitle.textContent = cards[index].title;
      modalDescription.textContent = cards[index].description;
      modal.style.display = "block";
    });
  });
  
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });



  



  
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });










 

