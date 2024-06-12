import * as module from '/javascript/modules/myFuntions.js';

document.addEventListener("DOMContentLoaded", function () {

  let urlEventos = "https://aulamindhub.github.io/amazing-api/events.json";

  fetch(urlEventos)
    .then(response => response.json())
    .then(data => {

      let events = data.events

      let upcomingEvent = events.filter(event => event = data.currentDate < event.date);
      
      let containerCard = document.getElementById("containerCards");

      // paint cards
      module.paint(upcomingEvent, containerCard);

      // filter and paint categories
      let allCategories = upcomingEvent.map(event => event.category);
      let categories = [...new Set(allCategories)];

      categories.sort((a, b) => a.localeCompare(b));

      module.paintCheckBox(categories);
      
      // search text listener and filter
      let searchInput = document.getElementById("search");
      searchInput.addEventListener("input", function () {
        module.applyFilters(upcomingEvent);
      });

      // search checkbox listener and filter
      let checkboxContainer = document.getElementById("containerCheckbox");
      checkboxContainer.addEventListener("change", function () {
        module.applyFilters(upcomingEvent);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    })
})