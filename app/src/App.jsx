import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import FilmCard from "./components/FilmCard.jsx";
import ProgrammeSummary from "./components/ProgrammeSummary.jsx";
import SearchFilters from "./components/SearchFilters.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import {
  clearSelectedIds,
  getInitialSelectedIds,
  saveSelectedIds,
} from "./storage.js";

const filmsUrl = `${import.meta.env.BASE_URL}data/films.json`;

function App() {
  const [films, setFilms] = useState([]);
  const [archiveStatus, setArchiveStatus] = useState("loading");
  const [selectedIds, setSelectedIds] = useState(getInitialSelectedIds);

  useEffect(() => {
    async function loadFilms() {
      try {
        const response = await fetch(filmsUrl);
        if (!response.ok) throw new Error("The film archive could not be loaded.");

        const loadedFilms = await response.json();
        setFilms(loadedFilms);
        setArchiveStatus("ready");
      } catch {
        setArchiveStatus("error");
      }
    }

    loadFilms();
  }, []);

  useEffect(() => {
    saveSelectedIds(selectedIds);
  }, [selectedIds]);

  function handleToggleSelect(id) {
    setSelectedIds((currentIds) => currentIds.includes(id)
      ? currentIds.filter((selectedId) => selectedId !== id)
      : [...currentIds, id]);
  }

  function handleClearProgramme() {
    clearSelectedIds();
    setSelectedIds([]);
  }

  const selectedFilms = films.filter((film) => selectedIds.includes(film.id));
  const totalMinutes = selectedFilms.reduce(
    (total, film) => total + Math.round((film.runtimeSeconds ?? 0) / 60),
    0,
  );

  return (
    <>
      <SiteHeader selectedCount={selectedFilms.length} />
      <main>
        <ProgrammeSummary
          count={selectedFilms.length}
          totalMinutes={totalMinutes}
        />
        <Routes>
          <Route
            path="/"
            element={(
              <Archive
                films={films}
                status={archiveStatus}
                selectedIds={selectedIds}
                onToggleSelect={handleToggleSelect}
              />
            )}
          />
          <Route
            path="/films/:filmId"
            element={(
              <FilmDetail
                films={films}
                status={archiveStatus}
                selectedIds={selectedIds}
                onToggleSelect={handleToggleSelect}
              />
            )}
          />
          <Route
            path="/programme"
            element={(
              <SavedProgramme
                films={selectedFilms}
                onToggleSelect={handleToggleSelect}
                onClear={handleClearProgramme}
              />
            )}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}

function Archive({ films, status, selectedIds, onToggleSelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedForm, setSelectedForm] = useState("All forms");
  const [selectedTheme, setSelectedTheme] = useState("All themes");

  if (status === "loading") {
    return <p className="archive-status">Loading the fictional archive…</p>;
  }

  if (status === "error") {
    return (
      <p className="archive-status archive-status--error">
        The fictional archive could not be loaded. Refresh the page to try
        again.
      </p>
    );
  }

  const forms = [...new Set(films.map((film) => film.form).filter(Boolean))]
    .sort();
  const themes = [...new Set(films.flatMap((film) => film.themes ?? []))]
    .sort();
  const normalisedSearch = searchTerm.trim().toLowerCase();

  const visibleFilms = films.filter((film) => {
    const directorNames = (film.directors ?? [])
      .map((director) => director.name)
      .join(" ");
    const searchableText = `${film.title} ${film.synopsis} ${directorNames}`
      .toLowerCase();
    const matchesSearch = searchableText.includes(normalisedSearch);
    const matchesForm = selectedForm === "All forms"
      || film.form === selectedForm;
    const matchesTheme = selectedTheme === "All themes"
      || film.themes?.includes(selectedTheme);

    return matchesSearch && matchesForm && matchesTheme;
  });

  function handleClearFilters() {
    setSearchTerm("");
    setSelectedForm("All forms");
    setSelectedTheme("All themes");
  }

  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Connected fictional archive</p>
          <h2>Discover a programme</h2>
        </div>
        <p>{visibleFilms.length} of {films.length} films</p>
      </div>

      <SearchFilters
        searchTerm={searchTerm}
        selectedForm={selectedForm}
        selectedTheme={selectedTheme}
        forms={forms}
        themes={themes}
        onSearchChange={setSearchTerm}
        onFormChange={setSelectedForm}
        onThemeChange={setSelectedTheme}
        onClear={handleClearFilters}
      />

      {visibleFilms.length === 0 ? (
        <div className="empty-message">
          <h3>No films match those choices</h3>
          <p>Try a different title, filmmaker, form or theme.</p>
          <button type="button" className="secondary-button" onClick={handleClearFilters}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="film-grid">
          {visibleFilms.map((film) => (
            <FilmCard
              key={film.id}
              film={film}
              isSelected={selectedIds.includes(film.id)}
              onToggleSelect={onToggleSelect}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function SavedProgramme({ films, onToggleSelect, onClear }) {
  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Remembered in this browser</p>
          <h2>Your programme</h2>
        </div>
        {films.length > 0 && (
          <button className="secondary-button" type="button" onClick={onClear}>
            Clear programme
          </button>
        )}
      </div>

      {films.length === 0 ? (
        <div className="empty-message">
          <h3>Your programme is empty</h3>
          <p>Explore the archive and choose films to build a 30–45 minute programme.</p>
          <Link to="/">Explore the archive</Link>
        </div>
      ) : (
        <div className="film-grid">
          {films.map((film) => (
            <FilmCard
              key={film.id}
              film={film}
              isSelected={true}
              onToggleSelect={onToggleSelect}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function FilmDetail({ films, status, selectedIds, onToggleSelect }) {
  const { filmId } = useParams();

  if (status === "loading") {
    return <p className="archive-status">Loading film details…</p>;
  }

  const film = films.find((candidate) => candidate.id === filmId);

  if (status === "error" || !film) {
    return <NotFound />;
  }

  const relatedFilms = films
    .filter((candidate) => candidate.id !== film.id)
    .filter((candidate) => candidate.themes?.some(
      (theme) => film.themes?.includes(theme),
    ))
    .slice(0, 3);
  const isSelected = selectedIds.includes(film.id);

  return (
    <article className="film-detail">
      <Link className="back-link" to="/">← Back to the archive</Link>
      <div className="film-detail__layout">
        <Poster film={film} />
        <div>
          <p className="eyebrow">{film.editorialType ?? "Archive film"}</p>
          <h2>{film.title}</h2>
          <p className="film-detail__intro">{film.synopsis}</p>
          <dl className="film-facts">
            <div><dt>Form</dt><dd>{film.form ?? "Not recorded"}</dd></div>
            <div><dt>Year</dt><dd>{film.year ?? "Not recorded"}</dd></div>
            <div><dt>Country</dt><dd>{film.country ?? "Not recorded"}</dd></div>
            <div><dt>Runtime</dt><dd>{formatRuntime(film.runtimeSeconds)}</dd></div>
            <div>
              <dt>Directed by</dt>
              <dd>{film.directors?.map((director) => director.name).join(", ") || "Not recorded"}</dd>
            </div>
            <div><dt>Format</dt><dd>{film.shootingFormat ?? "Not recorded"}</dd></div>
          </dl>
          <ul className="theme-list">
            {(film.themes ?? []).map((theme) => <li key={theme}>{theme}</li>)}
          </ul>
          <button type="button" onClick={() => onToggleSelect(film.id)}>
            {isSelected ? "Remove from programme" : "Add to programme"}
          </button>
        </div>
      </div>

      {relatedFilms.length > 0 && (
        <section className="related-films">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Shared themes</p>
              <h2>Continue exploring</h2>
            </div>
          </div>
          <div className="film-grid film-grid--related">
            {relatedFilms.map((relatedFilm) => (
              <FilmCard
                key={relatedFilm.id}
                film={relatedFilm}
                isSelected={selectedIds.includes(relatedFilm.id)}
                onToggleSelect={onToggleSelect}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function Poster({ film }) {
  if (!film.poster) {
    return <div className="film-card__poster film-card__poster--missing">No artwork</div>;
  }

  return (
    <img
      className="film-card__poster"
      src={`${import.meta.env.BASE_URL}${film.poster}`}
      alt={film.posterAlt ?? ""}
    />
  );
}

function NotFound() {
  return (
    <section className="empty-message">
      <h2>That view is not in the archive</h2>
      <p>The address may be incomplete or the film may no longer be available.</p>
      <Link to="/">Return to the archive</Link>
    </section>
  );
}

function formatRuntime(runtimeSeconds) {
  if (!runtimeSeconds) return "Not recorded";
  return `${Math.round(runtimeSeconds / 60)} min`;
}

export default App;
