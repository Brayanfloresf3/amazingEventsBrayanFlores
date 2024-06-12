
// index, past events y upcoming events
export function paint(events, container) {

  container.innerHTML = "";

  if (events.length === 0) {
    let alert = document.createElement("div");
    alert.classList.add("alert", "alert-primary", "d-flex", "align-items-center", "justify-content-center");
    alert.setAttribute("role", "alert");
    alert.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2 f-1 my-1" viewBox="0 0 16 16" role="img" aria-label="Warning:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
      <div>No events match your search criteria.</div>
    `;
    container.appendChild(alert);
    return;
  }

  events.forEach(event => {
    let cardEvents = document.createElement("div");
    cardEvents.classList.add("col-xs-12", "col-sm-6", "col-md-6", "col-lg-3", "col-xl-3", "cardHover");

    cardEvents.innerHTML =  `
  <div class="cardHover">
    <div class="card mb-3">
      <img src="${event.image}" class="card-img-top imgCard" alt="${event.category}">
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text myCards">${event.description}</p>
        <div class="d-flex justify-content-between">
          <div>
            <p class="text-start pt-2">Price: ${event.price}</p>
          </div>
          <div><a href="/pages/details.html?id=${event._id}" class="btn btn-primary">Details</a></div>
        </div>
      </div>
    </div>
  </div>`;

    container.appendChild(cardEvents);
  });
}

export function paintCheckBox(categories) {
  let containerCheckBox = document.getElementById("containerCheckbox");
  containerCheckBox.innerHTML = "";

  categories.forEach((category, index) => {
    let newCheckBox = document.createElement("div");
    newCheckBox.classList.add("form-check", "form-check-inline");
    newCheckBox.innerHTML = `
      <input class="form-check-input" type="checkbox" id="category-${index + 1}" value="${category}">
      <label class="form-check-label" for="category-${index + 1}">${category}</label>
    `;
    containerCheckBox.appendChild(newCheckBox);
  });
}

export function applyFilters(events) {
  let searchInput = document.getElementById("search");
  let checkboxes = document.querySelectorAll("#containerCheckbox input[type=checkbox]:checked");

  let searchText = searchInput.value.toLowerCase();

  let selectedCategories = [];
  checkboxes.forEach((checkbox) => {
    selectedCategories.push(checkbox.value);
  });

  let filteredEvents = events.filter((event) => {
    let textFilter = event.name.toLowerCase().includes(searchText) || event.description.toLowerCase().includes(searchText);
    let categoryFilter = selectedCategories.length === 0 || selectedCategories.includes(event.category);
    return textFilter && categoryFilter;
  });

  let containerCard = document.getElementById("containerCards");
  paint(filteredEvents, containerCard);
}

// stats
export function highestPercentage(events) {
  let highestPercentageEvent;
  let highestPercentage = 0;
  let highestCapacity = 0;

  events.forEach(event => {
    if (event.assistance) { // Considerar solo eventos pasados
      let percentage = (event.assistance / event.capacity) * 100;
      if (percentage > highestPercentage || (percentage === highestPercentage && event.capacity > highestCapacity)) {
        highestPercentage = percentage;
        highestCapacity = event.capacity;
        highestPercentageEvent = event;
      }
    }
  });

  return { name: highestPercentageEvent.name, percentage: highestPercentage.toFixed(1) };
}

export function lowestPercentage(events) {
  let lowestPercentageEvent;
  let lowestPercentage = 100;
  let highestCapacity = 0;

  events.forEach(event => {
    if (event.assistance) { // Considerar solo eventos pasados
      let percentage = (event.assistance / event.capacity) * 100;
      if (percentage < lowestPercentage || (percentage === lowestPercentage && event.capacity > highestCapacity)) {
        lowestPercentage = percentage;
        highestCapacity = event.capacity;
        lowestPercentageEvent = event;
      }
    }
  });

  return { name: lowestPercentageEvent.name, percentage: lowestPercentage.toFixed(1) };
}

export function largestCapacity(events) {
  let largestCapacityEvent;
  let largestCapacity = 0;

  events.forEach(event => {
    if (event.capacity > largestCapacity) {
      largestCapacity = event.capacity;
      largestCapacityEvent = event;
    }
  });

  return { name: largestCapacityEvent.name, capacity:  new Intl.NumberFormat().format(largestCapacityEvent.capacity)};
}

export function categoryRevenues(events, category) {
  const totalRevenue = events
    .filter(event => event.category === category)
    .reduce((total, event) => total + (event.assistance || event.estimate) * event.price, 0);
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(totalRevenue);
}

export function expectedAttendancePercentage(events, category) {
  let totalExpectedAttendance = events
      .filter(event => event.category === category)
      .reduce((total, event) => total + (event.estimate || 0), 0);

  let totalCapacity = events
      .filter(event => event.category === category)
      .reduce((total, event) => total + event.capacity, 0);

  if (totalCapacity === 0) {
      return "N/A";
  }

  return ((totalExpectedAttendance / totalCapacity) * 100).toFixed(1) + "%";
}

export function attendancePercentage(events, category) {
  let totalAttendance = events
      .filter(event => event.category === category && event.assistance)
      .reduce((total, event) => total + event.assistance, 0);

  let totalCapacity = events
      .filter(event => event.category === category)
      .reduce((total, event) => total + event.capacity, 0);

  if (totalCapacity === 0) {
      return "N/A";
  }
 
  return ((totalAttendance / totalCapacity) * 100).toFixed(1) + "%";
}

