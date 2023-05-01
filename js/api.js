let burgeri = document.querySelector('.burgeri');
let navbar_link = document.querySelector('.navbar_link');


burgeri.addEventListener('click', menuopen)


function menuopen(){
    navbar_link.classList.toggle('change');
    
}

document.addEventListener("DOMContentLoaded", function(event) {
    fetch('https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        const persons = data.data;
        const personData = document.getElementById('person-data');
  
        persons.forEach(person => {
          const name = person.firstname + ' ' + person.lastname;
            const email = person.email;
            
            const address = person.address.street;
            const phone = person.phone;
            const img = person.image;
  
  
            const personDiv = document.createElement('div');
            personDiv.innerHTML = `
            <section class=somthin_section>
            <div class="container responsive_container_1">
            
            <div class="API">
            <h3>People Who Use Our Platform </h3>
              <h2 class="somthing_h2"><span>User Name:</span> ${name}</h2>
              <p class="somthing_p"><span>Email:</span> ${email}</p>
              <p class="somthing_p"><span>Address:</span> ${address}</p>
              <p class="somthing_p"><span>Phone:</span> ${phone}</p>
              <div class="api_img">
              <img class="somthing_img" src="${img}" alt="">
              </div>
              </div>
              </div>
              </section>

            `;
            personData.appendChild(personDiv);
  
  
           
  
            
        });
    })
    .catch(error => console.error(error));
  
    
  });
  
  
  