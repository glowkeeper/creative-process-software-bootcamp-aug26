const filmGrid = document.querySelector("#film-grid");
const programmeCount = document.querySelector("#programme-count");
const programmeRuntime = document.querySelector("#programme-runtime");
const programmeFeedback = document.querySelector("#programme-feedback");
const programmeList = document.querySelector("#programme-list");
const formFilter = document.querySelector("#form-filter");
const guestFilmForm = document.querySelector("#guest-film-form");
const formMessage = document.querySelector("#form-message");

// Event delegation gives existing and newly created film buttons one listener.
filmGrid.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    const filmCard = event.target.closest(".film-card");
    filmCard.classList.toggle("film-card--selected");
    updateProgramme();
  }
});

function updateProgramme() {
  const filmCards = document.querySelectorAll(".film-card");
  const selectedCards = document.querySelectorAll(".film-card--selected");
  let totalRuntime = 0;

  programmeList.innerHTML = "";

  filmCards.forEach(function (card) {
    const button = card.querySelector("button");
    const isSelected = card.classList.contains("film-card--selected");
    button.textContent = isSelected ? "Remove from programme" : "Add to programme";
  });

  selectedCards.forEach(function (card) {
    totalRuntime += Number(card.dataset.runtime);

    const listItem = document.createElement("li");
    listItem.textContent = card.querySelector("h3").textContent;
    programmeList.appendChild(listItem);
  });

  programmeCount.textContent = selectedCards.length;
  programmeRuntime.textContent = totalRuntime;

  programmeFeedback.className = "programme-feedback";

  if (selectedCards.length === 0) {
    programmeFeedback.textContent = "Choose a film to begin.";
  } else if (totalRuntime < 30) {
    programmeFeedback.textContent = "Keep building: the programme is under 30 minutes.";
  } else if (totalRuntime <= 45) {
    programmeFeedback.textContent = "Ready to screen: the programme is within the target.";
    programmeFeedback.classList.add("programme-feedback--ready");
  } else {
    programmeFeedback.textContent = "Consider removing a film: the programme is over 45 minutes.";
    programmeFeedback.classList.add("programme-feedback--long");
  }
}

formFilter.addEventListener("change", function () {
  const selectedForm = formFilter.value;
  const filmCards = document.querySelectorAll(".film-card");

  filmCards.forEach(function (card) {
    card.hidden = selectedForm !== "all" && card.dataset.form !== selectedForm;
  });
});

guestFilmForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleInput = document.querySelector("#guest-title");
  const runtimeInput = document.querySelector("#guest-runtime");
  const title = titleInput.value.trim();
  const runtime = Number(runtimeInput.value);

  if (title === "" || runtime < 1 || runtime > 60) {
    formMessage.textContent = "Enter a title and a runtime between 1 and 60 minutes.";
    return;
  }

  const filmCard = document.createElement("article");
  filmCard.className = "film-card";
  filmCard.dataset.form = "guest";
  filmCard.dataset.runtime = runtime;

  const metadata = document.createElement("p");
  metadata.className = "film-meta";
  metadata.textContent = "Guest film · " + runtime + " min";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const description = document.createElement("p");
  description.textContent = "A fictional guest film added during this session.";

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Add to programme";

  filmCard.appendChild(metadata);
  filmCard.appendChild(heading);
  filmCard.appendChild(description);
  filmCard.appendChild(button);
  filmGrid.appendChild(filmCard);

  guestFilmForm.reset();
  formMessage.textContent = "Guest film added: " + title;
});
