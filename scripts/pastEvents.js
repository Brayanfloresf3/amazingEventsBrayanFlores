const data = {
  currentDate: "2023-01-01",
  events: [
    {
      _id: "639c723b992482e5f2834be9",
      name: "Collectivities Party",
      image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      date: "2022-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
      __v: 0,
    },
    {
      _id: "639c723b992482e5f2834beb",
      name: "Korean style",
      image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      date: "2023-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      price: 10,
      __v: 0,
      estimate: 42756,
    },
    {
      _id: "639c723c992482e5f2834bed",
      name: "Jurassic Park",
      image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      date: "2022-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      price: 15,
      __v: 0,
      assistance: 65892,
    },
    {
      _id: "639c723c992482e5f2834bef",
      name: "Parisian Museum",
      image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      date: "2023-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf1",
      name: "Comicon",
      image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      date: "2022-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf3",
      name: "Halloween Night",
      image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      date: "2023-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf5",
      name: "Metallica in concert",
      image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      date: "2023-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf7",
      name: "Electronic Fest",
      image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      date: "2022-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bf9",
      name: "10K for life",
      image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      date: "2022-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bfb",
      name: "15K NY",
      image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
      date: "2023-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      price: 3,
      __v: 0,
      estimate: 2569800,
    },
    {
      _id: "639c723d992482e5f2834bfd",
      name: "School's book fair",
      image: "https://i.postimg.cc/Sst763n6/book1.jpg",
      date: "2023-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bff",
      name: "Just for your kitchen",
      image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
      date: "2022-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c01",
      name: "Batman",
      image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      date: "2022-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c03",
      name: "Avengers",
      image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
      date: "2023-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
      __v: 0,
    },
  ],
};

let pastEvents = [];

for (let event of data.events) {
  if (data.currentDate > event.date) {
    pastEvents.push(event);
  }
}

// paint cards
function paint(events) {
  let containerCards = document.getElementById("containerCards");

  if (events.length === 0) {
    
    let alert = document.createElement("div");
    alert.classList.add("alert", "alert-primary", "d-flex", "align-items-center", "justify-content-center");
    alert.setAttribute("role", "alert");
    alert.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2 f-1 my-1" viewBox="0 0 16 16" role="img" aria-label="Warning:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
      <div>
        No events match your search criteria.
      </div>
    `;
    containerCards.appendChild(alert);
    return;
  }

  events.forEach((event) =>{
    let tarjetaEvento = document.createElement("div");
    tarjetaEvento.classList.add(
      "col-xs-12",
      "col-sm-6",
      "col-md-6",
      "col-lg-3",
      "col-xl-3"
    );
    tarjetaEvento.classList.add("cardHover");
    tarjetaEvento.innerHTML = `
      <div class="card mb-3">
        <img src="${event.image}" class="card-img-top imgCard" alt="Food Fair">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text myCards">${event.description}</p>
          <div class="d-flex justify-content-between">
            <div>
              <p class="text-start pt-2">Price:${event.price}</p>
            </div>
            <div><a href="/html/details.html?id=${event._id}" class="btn btn-primary">Details</a></div>
            </div>
        </div>
      </div>
    `;
    containerCards.appendChild(tarjetaEvento);
  })
}

paint(pastEvents);

// filter categories
let allCategories = data.events.map((event) => event.category);
let categories = [...new Set(allCategories)];

// paint checkbox
function paintCheckBox(categories) {
  let containerCheckBox = document.getElementById("containerCheckbox");
  containerCheckBox.innerHTML = "";

  categories.forEach((category, index) => {
    let newCheckBox = document.createElement("div");
    newCheckBox.classList.add("form-check", "form-check-inline");
    newCheckBox.innerHTML = `
      <input class="form-check-input" type="checkbox" id="category-${
        index + 1
      }" value="${category}">
      <label class="form-check-label" for="category-${
        index + 1
      }">${category}</label>
    `;
    containerCheckBox.appendChild(newCheckBox);
  });
}

paintCheckBox(categories);

// search text
let searchInput = document.getElementById("search");
searchInput.addEventListener("input", function () {
  applyFilters();
});

// search checkbox
let checkboxContainer = document.getElementById("containerCheckbox");
checkboxContainer.addEventListener("change", function () {
  applyFilters();
});

// filters together
function applyFilters() {
  let containerCards = document.getElementById("containerCards");
  let searchText = searchInput.value.toLowerCase();

  let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  let selectedCategories = [];
  checkboxes.forEach((checkbox) => {
    selectedCategories.push(checkbox.value);
  });

  let filteredEvents = pastEvents.filter((event) => {
    let matchesSearch =
      event.name.toLowerCase().includes(searchText) ||
      event.description.toLowerCase().includes(searchText);
    let matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(event.category);
    return matchesSearch && matchesCategory;
  });
  
  containerCards.innerHTML = "";
  paint(filteredEvents);
}
