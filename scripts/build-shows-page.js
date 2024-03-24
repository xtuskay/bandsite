// Array containing information about the events
const events = [
  {
    date: "Mon Sep 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

// Function to create event cards and append them to the show container
function createEventCards(eventsData) {
  console.log(eventsData);
  // Get the show container element
  const showContainer = document.querySelector(".show__container");
  const showHeader = document.createElement("div");
  showHeader.classList.add("show__container-header");

  const headerDate = document.createElement("h3");
  headerDate.textContent = "DATES";
  headerDate.classList.add("show__header-date");

  const headerVenue = document.createElement("h3");
  headerVenue.textContent = "VENUE";
  headerVenue.classList.add("show__header-venue");

  const headerLoction = document.createElement("h3");
  headerLoction.textContent = "LOCATION";
  headerLoction.classList.add("show__header-location");

  const headerEmpty = document.createElement("h3");
  headerEmpty.classList.add("show__header-empty");

  showHeader.appendChild(headerDate);
  showHeader.appendChild(headerVenue);
  showHeader.appendChild(headerLoction);
  showHeader.appendChild(headerEmpty);
  showContainer.appendChild(showHeader);

  //     // Loop through the events array and create HTML for each event
  eventsData.forEach((eventInfo) => {
    console.log(eventInfo);
    //       // Create a div element for the event card
    const eventCard = document.createElement("div");
    eventCard.classList.add("show__new");

    const dateHeader = document.createElement("h3");
    dateHeader.textContent = "DATE";
    dateHeader.classList.add("show__info");

    const detail = document.createElement("h3");
    detail.textContent = "VENUE";
    detail.classList.add("show__info");

    const showElement = document.createElement("h3");
    showElement.textContent = "LOCATION";
    showElement.classList.add("show__info");
    console.log(showElement);

    // Create p elements for event information
    const dateElement = document.createElement("p");
    dateElement.classList.add("show__details");
    dateElement.textContent = eventInfo.date;

    const venueElement = document.createElement("p");
    venueElement.classList.add("show__details");
    venueElement.textContent = eventInfo.venue;

    const locationElement = document.createElement("p");
    locationElement.classList.add("show__details");
    locationElement.textContent = eventInfo.location;

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("show__button");
    buttonElement.textContent = "BUY TICKET";
    //Create h3 elements for even infomation

    eventCard.appendChild(dateHeader);
    eventCard.appendChild(dateElement);
    eventCard.appendChild(detail);
    eventCard.appendChild(venueElement);
    eventCard.appendChild(showElement);
    eventCard.appendChild(locationElement);
    eventCard.appendChild(buttonElement);
    showContainer.appendChild(eventCard);

    eventCard.addEventListener("click", press);
  });
}

createEventCards(events);

// Create your function that adds a class using classList.add, this class should be defined in your scss
// addSelectedState() {}
function press() {
  const showNew = document.querySelector(".show__new");

  showNew.classList.add("show__new-selected");

  console.log("TEST:", showNew.classList);
}
