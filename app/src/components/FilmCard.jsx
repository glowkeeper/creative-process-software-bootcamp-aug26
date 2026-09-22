import { Link } from "react-router-dom";

function FilmCard({ film, isSelected, onToggleSelect }) {
  const cardClass = isSelected
    ? "film-card film-card--selected"
    : "film-card";
  const directorNames = film.directors
    ?.map((director) => director.name)
    .join(", ");

  return (
    <article className={cardClass}>
      <Link to={`/films/${film.id}`} aria-label={`Read more about ${film.title}`}>
        {film.poster ? (
          <img
            className="film-card__poster"
            src={`${import.meta.env.BASE_URL}${film.poster}`}
            alt={film.posterAlt ?? ""}
          />
        ) : (
          <div className="film-card__poster film-card__poster--missing">
            No artwork
          </div>
        )}
      </Link>

      <p className="film-meta">
        {film.form ?? "Form not recorded"} · {film.country ?? "Country not recorded"}
        {film.runtimeSeconds
          ? ` · ${Math.round(film.runtimeSeconds / 60)} min`
          : " · Runtime not recorded"}
      </p>
      <h3><Link to={`/films/${film.id}`}>{film.title}</Link></h3>
      <p className="film-card__director">
        {directorNames ? `Directed by ${directorNames}` : "Director not recorded"}
      </p>
      <p>{film.synopsis}</p>

      <ul className="theme-list">
        {(film.themes ?? []).map((theme) => <li key={theme}>{theme}</li>)}
      </ul>

      <button type="button" onClick={() => onToggleSelect(film.id)}>
        {isSelected ? "Remove from programme" : "Add to programme"}
      </button>
    </article>
  );
}

export default FilmCard;
