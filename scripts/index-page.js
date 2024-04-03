import { BandSiteApi } from "./band-site-api.js";

const bandApiIndex = new BandSiteApi("27bd7db2-caf3-4c4d-aa61-02e8e7e17852");
const credits = await bandApiIndex.getComments();

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}


function displayComment(commentArray) {

  const commentTarget = document.querySelector(".comment");
  commentArray.forEach((comment) => {


    const line = document.createElement("hr");

    const commentBlock = document.createElement("section");

    const photoContainer = document.createElement("div");

    const commentContainer = document.createElement("div");

    const nameDateContainer = document.createElement("div");

    const name = document.createElement("h3");

    const dateContainer = document.createElement("p");

    const commentTextContainer = document.createElement("div");

    const commentText = document.createElement("p");

    commentTarget.append(line);
    commentBlock.append(photoContainer);
    commentBlock.append(commentContainer);
    commentContainer.append(nameDateContainer);
    commentContainer.append(commentTextContainer);
    nameDateContainer.append(name);
    nameDateContainer.append(dateContainer);
    commentTextContainer.append(commentText);

    name.innerText = comment.name;
    dateContainer.innerText = formatTimestamp(comment.timestamp);
    // console.log(comment.timestamp)
    commentText.innerText = comment.comment;

    commentBlock.classList.add("comment__card");
    photoContainer.classList.add("comment__card-image");
    commentContainer.classList.add("comment__card-container");
    nameDateContainer.classList.add("comment__card-wrap");
    name.classList.add("comment__card-user");
    dateContainer.classList.add("comment__card-date");
    commentTextContainer.classList.add("comment__card-paragraph");
    line.classList.add("comment__line");

    commentTarget.appendChild(commentBlock);
  });

  const bottomLine = document.createElement("hr");
  bottomLine.classList.add("comment__line");
  commentTarget.append(bottomLine);
}

displayComment(credits);

const form = document.querySelector(".conv__form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let date = new Date().toLocaleDateString("en-us");


  const newComment = await bandApiIndex.postComment(e.target.name.value, e.target.comText.value)

  e.target.name.value = "";
  e.target.comText.value = "";
  credits.unshift(newComment);
  displayComment(credits);

  const commentTarget = document.querySelector(".comment");
  commentTarget.innerHTML = "";

  displayComment(credits);

  function submitForm() {
    let form = document.getElementsByName("conv__form")[0];
    form.submit();
    form.reset();
    return false;
  }
});

