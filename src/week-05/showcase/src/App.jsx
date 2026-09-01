// STRETCH MATERIAL. This is not part of the Week 5 core build.
//
// Complete imports its films directly, so they are part of the application
// before it starts. Here the same twelve films are fetched over the network
// when the application first runs, which is how an application talks to a
// real archive.
//
// Everything below the data loading is identical to Complete. The point of
// this file is the three things the application now has to cope with:
//
//   1. there is a moment when the films have not arrived yet
//   2. the request can fail
//   3. neither of those is an error in your code

import { useEffect, useState } from "react";
import SiteHeader from "./components/SiteHeader.jsx";
import ProgrammeSummary from "./components/ProgrammeSummary.jsx";
import FilmCard from "./components/FilmCard.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

function App() {
  // Three pieces of state now, because loading has three possible situations.
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedIds, setSelectedIds] = useState([]);

  // useEffect runs code that is not part of describing the interface.
  // The empty array at the end means "run this once, when the application
  // starts", rather than after every render.
  useEffect(() => {
    fetch("/films.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load the film archive.");
        }
        return response.json();
      })
      .then((data) => {
        setFilms(data);
        setIsLoading(false);
      })
      .catch((problem) => {
        setError(problem.message);
        setIsLoading(false);
      });
  }, []);

  function handleToggleSelect(id) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  const selectedFilms = films.filter((film) => selectedIds.includes(film.id));

  let totalMinutes = 0;
  for (const film of selectedFilms) {
    totalMinutes = totalMinutes + film.runtimeMinutes;
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
              <p className="eyebrow">Stage 2 archive</p>
              <h2>Choose from {films.length} short films</h2>
            </div>
            <p>Target running time: 30-45 minutes</p>
          </div>

          {/* Say what is happening instead of showing an empty page. */}
          {isLoading && <p className="archive-status">Loading the archive...</p>}

          {error && <p className="archive-status">{error}</p>}

          {!isLoading && !error && (
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
                  runtimeMinutes={film.runtimeMinutes}
                  themes={film.themes}
                  poster={film.poster}
                  posterAlt={film.posterAlt}
                  isSelected={selectedIds.includes(film.id)}
                  onToggleSelect={handleToggleSelect}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

export default App;
