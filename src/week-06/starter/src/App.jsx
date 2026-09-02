// App holds the one piece of information the whole page depends on: which
// films are currently selected.
//
// It is here rather than inside FilmCard because App is the closest component
// that contains both the cards and the summary. Both of them need to know.

import { useState } from "react";
import films from "./data/films.json";
import SiteHeader from "./components/SiteHeader.jsx";
import ProgrammeSummary from "./components/ProgrammeSummary.jsx";
import FilmCard from "./components/FilmCard.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

function App() {
  // An array of ids, not one answer per card. The number of films is data,
  // so nothing here should be written 180 times.
  const [selectedIds, setSelectedIds] = useState([]);

  // The cards cannot change selectedIds themselves. They are given this
  // function and call it; App decides what a click means.
  function handleToggleSelect(id) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  // Both of these are worked out from selectedIds every time App renders.
  // Neither is stored, so neither can disagree with the selection.
  const selectedFilms = films.filter((film) => selectedIds.includes(film.id));

  let totalMinutes = 0;
  for (const film of selectedFilms) {
    totalMinutes = totalMinutes + Math.round((film.runtimeSeconds ?? 0) / 60);
  }

  return (
    <>
      <SiteHeader />

      <main>
        <ProgrammeSummary
          count={selectedFilms.length}
          totalMinutes={totalMinutes}
        />

        <section>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Connected fictional archive</p>
              <h2>Choose from {films.length} short films</h2>
            </div>
            <p>Combined programme target: 30–45 minutes</p>
          </div>

          <div className="film-grid">
            {films.map((film) => (
              <FilmCard
                key={film.id}
                id={film.id}
                title={film.title}
                synopsis={film.synopsis}
                form={film.form}
                country={film.country}
                year={film.year}
                runtimeMinutes={film.runtimeSeconds
                  ? Math.round(film.runtimeSeconds / 60)
                  : null}
                themes={film.themes ?? []}
                poster={film.poster
                  ? `${import.meta.env.BASE_URL}${film.poster}`
                  : null}
                posterAlt={film.posterAlt}
                isSelected={selectedIds.includes(film.id)}
                onToggleSelect={handleToggleSelect}
              />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

export default App;
