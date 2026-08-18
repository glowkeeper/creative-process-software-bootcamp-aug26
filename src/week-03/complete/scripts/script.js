// Find the film buttons and the place where the count will be displayed.
const filmButtons = document.querySelectorAll(".film-card button");
const programmeCount = document.querySelector("#programme-count");

// Give every film button the same click behaviour.
filmButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const filmCard = button.closest(".film-card");

    // Toggle switches the selected class on or off.
    filmCard.classList.toggle("film-card--selected");

    if (filmCard.classList.contains("film-card--selected")) {
      button.textContent = "Remove from programme";
    } else {
      button.textContent = "Add to programme";
    }

    // Count the cards that are selected now, then update the page.
    const selectedFilms = document.querySelectorAll(".film-card--selected");
    programmeCount.textContent = selectedFilms.length + " films selected";
  });
});
