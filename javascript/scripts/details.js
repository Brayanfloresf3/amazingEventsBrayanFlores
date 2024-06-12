
document.addEventListener("DOMContentLoaded", function () {

  let urlEventos = "https://aulamindhub.github.io/amazing-api/events.json";

  fetch(urlEventos)
    .then(response => response.json())
    .then(data => {

      let events = data.events;

      let containerDetails = document.getElementById("containerDetails");

      let idDetails = window.location.href;


      idDetails = new URL(idDetails).searchParams.get("id");

      let cardDetails = events.filter((event) => event._id == idDetails);
      
      cardDetails.forEach((event) => {
        let divDetails = document.createElement("div");
        divDetails.classList.add(
          "row",
          "g-0",
          "bg-light",
          "position-relative",
          "img-thumbnail"
        );

        divDetails.style.minHeight = "600px";

        divDetails.innerHTML = `
            <div class="col-md-12 col-lg-6 p-md-4">
                <img src="${event.image}" class="w-100 h-100 img-fluid object-fit-cover" alt="${event.name}">
            </div>
            <div class="col-md-12 col-lg-6 p-4">
                <h5 class="mt-0 text-center fs-1 my-4">${event.name}</h5>
                <ul class="fs-3 py-4">
                    <li>Date: ${event.date}</li>
                    <li>Description: ${event.description}</li>
                    <li>Category: ${event.category}</li>
                    <li>Place: ${event.place}</li>
                    <li>Capacity: ${event.capacity}</li>
                    <li>${event.date > data.currentDate ? "Estimate: " : "Assistance: "}${event.assistance || event.estimate}</li>
                    <li>Price: $${event.price}</li>
                </ul>
                <p class="card-text text-end"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        `;
        containerDetails.appendChild(divDetails);
      });
    }).catch(error => {
      console.error('Error:', error);
    })
})

