import * as module from '/javascript/modules/myFuntions.js';

document.addEventListener("DOMContentLoaded", function () {
  let urlEventos = "https://aulamindhub.github.io/amazing-api/events.json";

  fetch(urlEventos)
    .then(response => response.json())
    .then(data => {
      let events = data.events;
      let currentDate = new Date(data.currentDate);

      let highestPercentageEvent = module.highestPercentage(events);
      let lowestPercentageEvent = module.lowestPercentage(events);
      let largestCapacityEvent = module.largestCapacity(events);

      let upcomingEvents = events.filter(event => new Date(event.date) > currentDate);
      console.log(upcomingEvents);
      
      let pastEvents = events.filter(event => new Date(event.date) < currentDate);

      let allCategories = events.map(event => event.category);
      let categories = [...new Set(allCategories)];
      categories.sort((a, b) => a.localeCompare(b));
      
      let allCategories2 = upcomingEvents.map(event => event.category);
      let categoriesUpcomming = [...new Set(allCategories2)];
      categoriesUpcomming.sort((a, b) => a.localeCompare(b));
      
      
      let containerTable = document.getElementById("containerTable");

      let table = document.createElement("table");
      table.className = "table m-4 text-center";

      let thead = document.createElement("thead");
      let headerRow = document.createElement("tr");
      headerRow.className = "table-dark text-start";
      let headerCell = document.createElement("th");
      headerCell.className = "fs-5";
      headerCell.colSpan = "3";
      headerCell.textContent = "Events Statistics";
      headerRow.appendChild(headerCell);
      thead.appendChild(headerRow);
  
      let tbody = document.createElement("tbody");

      let rows = [
        {
          className: "table-primary",
          cells: ["Events with highest % of attendance", "Events with lowest % of attendance", "Events with largest capacity"]
        },
        {
          cells: [`${highestPercentageEvent.name} (${highestPercentageEvent.percentage}%)`, `${lowestPercentageEvent.name} (${lowestPercentageEvent.percentage}%)`, `${largestCapacityEvent.name} (Capacity: ${largestCapacityEvent.capacity})`]
        },
        {
          className: "table-dark text-start pb-1 pt-3 fs-5",
          cells: ["Upcoming Events Statistics by categories"],
          colSpan: 5
        },
        {
          className: "table-primary",
          cells: ["Categories", "Revenues", "Percentage of estimated"]
        },
        ...categoriesUpcomming.map(category => ({
          cells: [
            category,
            module.categoryRevenues(upcomingEvents, category),
            module.expectedAttendancePercentage(upcomingEvents, category)
          ]
        })),

        {
          className: "table-dark text-start px-3 pb-1 pt-3 fs-5",
          cells: ["Past Events Statistics by categories"],
          colSpan: 5
        },
        {
          className: "table-primary",
          cells: ["Categories", "Revenues", "Percentage of attendance"]
        },

        ...categories.map(category => ({
          cells: [
            category,
            module.categoryRevenues(pastEvents, category),
            module.attendancePercentage(pastEvents, category),
          ]
        }))
      ];

      rows.forEach(rowData => {
        let row = document.createElement("tr");
        if (rowData.className) {
          row.className = rowData.className;
        }
        rowData.cells.forEach((cellData, index) => {
          let cell = rowData.colSpan && index === 0 ? document.createElement("th") : document.createElement("td");
          if (rowData.colSpan && index === 0) {
            cell.colSpan = rowData.colSpan;
          }
          cell.textContent = cellData;
          row.appendChild(cell);
        });
        tbody.appendChild(row);
      });

      table.appendChild(thead);
      table.appendChild(tbody);
      containerTable.appendChild(table);
    }).catch(error => {
      console.error('Error:', error);
    })
});
