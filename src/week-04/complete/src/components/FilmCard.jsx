import { useState } from "react";

// One component, used six times, showing six different films.
//
// The information for each film arrives in `props`. Everything this component
// needs to know is given to it from outside.

function FilmCard(props) {
  // This card remembers whether it is selected. Each card has its own answer,
  // and no other part of the page can see it.
  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected(!isSelected);
  }

  // Choose the class and the label from what the card currently remembers.
  const cardClass = isSelected
    ? "film-card film-card--selected"
    : "film-card";

  const buttonLabel = isSelected
    ? "Remove from programme"
    : "Add to programme";

  return (
    <article className={cardClass}>
      <p className="film-meta">
        {props.form} · {props.country} · {props.year}
      </p>
      <h3>{props.title}</h3>
      <p>{props.synopsis}</p>
      <button type="button" onClick={handleClick}>
        {buttonLabel}
      </button>
    </article>
  );
}

export default FilmCard;
