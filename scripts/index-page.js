

const credits = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },

  {
    name: "Christina Cabrera",
    date: "10/28/2023",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },

  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];


function displayComment(commentArray) {
  console.log(commentArray);
  commentArray.forEach((comment) => {
    // console.log(comment);
    const commentTarget = document.querySelector(".comment");
    // create a line
    const line = document.createElement("hr");

    //create the main section
    const commentBlock = document.createElement("section");

    // create the photo container
    const photoContainer = document.createElement("div");

    // create comment container
    const commentContainer = document.createElement("div");

    //create the nameDate container
    const nameDateContainer = document.createElement("div");

    // create the name element
    const name = document.createElement("h3");

    // create the date container
    const dateContainer = document.createElement("p");

    // create the commentText container
    const commentTextContainer = document.createElement("div");

    // create the commentText element
    const commentText = document.createElement("p");

    commentBlock.append(photoContainer);
    commentBlock.append(commentContainer);
    commentContainer.append(nameDateContainer);
    commentContainer.append(commentTextContainer);
    nameDateContainer.append(name);
    nameDateContainer.append(dateContainer);
    commentTextContainer.append(commentText);

    name.innerText = comment.name;
    dateContainer.innerText = comment.date;
    commentText.innerText = comment.comment;

    commentBlock.classList.add("comment__card");
    photoContainer.classList.add("comment__card-image");
    commentContainer.classList.add("comment__card-container");
    nameDateContainer.classList.add("comment__card-wrap");
    name.classList.add("comment__card-user");
    dateContainer.classList.add("comment__card-date");
    commentTextContainer.classList.add("comment__card-paragraph");

    commentTarget.appendChild(commentBlock);
  });
}

displayComment(credits);


// adding functionality //
const form = document.querySelector(".conv__form");

// added event listener & stops page reloading
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let date = new Date().toLocaleDateString("en-us");
  console.log(e.target.name.value);

  let newComment = {
    name: e.target.name.value,
    date: date,
    comment: e.target.comText.value,
  };
  console.log(newComment);
  e.target.name.value = "";
  e.target.comText.value = "";
  credits.unshift(newComment);
  displayComment(credits);

  // Clear all comments from the page
  const commentTarget = document.querySelector(".comment");
  commentTarget.innerHTML = "";

  // Re-renders all comments from the comment array
  displayComment(credits);

  // Clears the input fields after submitting a new comment

    function submitForm() {
    let form = document.getElementsByName("conv__form")[0];
    form.submit(); 
    form.reset(); 
    return false; 
    }
});

    
