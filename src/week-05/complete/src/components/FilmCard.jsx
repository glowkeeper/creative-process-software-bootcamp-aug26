// This card no longer remembers anything.
//
// It is told whether it is selected, and it is given a function to call when
// its button is clicked. That makes it simpler: it displays what it is given
// and reports what happened, and nothing else.

function FilmCard({ id, title, synopsis, form, country, year, runtimeMinutes,
                    themes, poster, posterAlt, isSelected, onToggleSelect }) {
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
        {form} · {country} · {year} · {runtimeMinutes} min
      </p>
      <h3>{title}</h3>
      <p>{synopsis}</p>

      <ul className="theme-list">
        {themes.map((theme) => (
          <li key={theme}>{theme}</li>
        ))}
      </ul>

      {/* The arrow function matters. Writing onToggleSelect(id) here would
          call it immediately, while the page is being drawn, instead of
          waiting for a click. */}
      <button type="button" onClick={() => onToggleSelect(id)}>
        {isSelected ? "Remove from programme" : "Add to programme"}
      </button>
    </article>
  );
}

export default FilmCard;
