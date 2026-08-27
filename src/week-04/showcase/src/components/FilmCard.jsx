import { useState } from "react";

// The props are pulled apart in the parameter list instead of being read one
// at a time from a `props` object. Both styles do exactly the same thing.

function FilmCard({ title, synopsis, form, country, year, themes, poster, posterAlt }) {
  const [isSelected, setIsSelected] = useState(false);

  const cardClass = isSelected
    ? "film-card film-card--selected"
    : "film-card";

  return (
    <article className={cardClass}>
      {/* One film in the archive has no artwork, so the card has to cope. */}
      {poster ? (
        <img className="film-card__poster" src={poster} alt={posterAlt} />
      ) : (
        <div className="film-card__poster film-card__poster--missing">
          No artwork
        </div>
      )}

      <p className="film-meta">
        {form} · {country} · {year}
      </p>
      <h3>{title}</h3>
      <p>{synopsis}</p>

      {/* One tag for each theme, produced by map(). */}
      <ul className="theme-list">
        {themes.map((theme) => (
          <li key={theme}>{theme}</li>
        ))}
      </ul>

      <button type="button" onClick={() => setIsSelected(!isSelected)}>
        {isSelected ? "Remove from programme" : "Add to programme"}
      </button>
    </article>
  );
}

export default FilmCard;
