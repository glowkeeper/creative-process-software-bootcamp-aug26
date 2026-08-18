console.log("loading javascript");

const filmButtons = document.querySelectorAll(".film-card button");
const programmeCount = document.querySelector("#programme-count");

console.log("found buttons", filmButtons);

filmButtons.forEach(function (button) {
  // Give this button the click behaviour
  button.addEventListener("click", function () {
    const filmCard = button.closest(".film-card");
    filmCard.classList.toggle("film-card--selected");
    if (filmCard.classList.contains("film-card--selected")) {
      button.textContent = "Remove from programme";
    } else {
      button.textContent = "Add to programme";
    }

    const selectedFilms = document.querySelectorAll(".film-card--selected");
    programmeCount.textContent = selectedFilms.length + " films selected";
  });
});

// filmButton.addEventListener("click", function () {
//   filmButton.textContent = "Added";
//   const filmCard = filmButton.closest(".film-card");
//   filmCard.classList.add("film-card--selected");
// });
