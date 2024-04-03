import { BandSiteApi } from "./band-site-api.js";

const bandApiIndex = new BandSiteApi("27bd7db2-caf3-4c4d-aa61-02e8e7e17852");
const events = await bandApiIndex.getShows();

function formatTimestamp(timestamp){
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}


function createEventCards(eventsData) {

  const showContainer = document.querySelector(".show__container");
  const showHeader = document.createElement("div");
  showHeader.classList.add("show__container-header");

  const headerDate = document.createElement("h3");
  headerDate.textContent = "DATES";
  headerDate.classList.add("show__header-date");

  const headerVenue = document.createElement("h3");
  headerVenue.textContent = "VENUE";
  headerVenue.classList.add("show__header-venue");

  const headerLocation = document.createElement("h3");
  headerLocation.textContent = "LOCATION";
  headerLocation.classList.add("show__header-location");

  const headerEmpty = document.createElement("h3");
  headerEmpty.classList.add("show__header-empty");

  showHeader.appendChild(headerDate);
  showHeader.appendChild(headerVenue);
  showHeader.appendChild(headerLocation);
  showHeader.appendChild(headerEmpty);
  showContainer.appendChild(showHeader);

  eventsData.forEach((eventInfo) => {

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

    const dateElement = document.createElement("p");
    dateElement.classList.add("show__details");
    dateElement.textContent = formatTimestamp(eventInfo.date);

    const venueElement = document.createElement("p");
    venueElement.classList.add("show__details");
    venueElement.textContent = eventInfo.venue;

    const locationElement = document.createElement("p");
    locationElement.classList.add("show__details");
    locationElement.textContent = eventInfo.location;

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("show__button");
    buttonElement.textContent = "BUY TICKET";

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

function press() {
  const showNew = document.querySelector(".show__new");

  showNew.classList.add("show__new-selected");
}







