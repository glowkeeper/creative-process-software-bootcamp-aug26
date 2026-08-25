// Complete writes out one <FilmCard /> for every film by hand.
//
// Here the films live in a separate data file and map() produces one card for
// each of them. Adding a thirteenth film would mean editing only the data.

import films from "./data/films.js";
import SiteHeader from "./components/SiteHeader.jsx";
import FilmCard from "./components/FilmCard.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

function App() {
  return (
    <>
      <SiteHeader />

      <main>
        <section>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Stage 2 archive</p>
              <h2>Choose from {films.length} short films</h2>
            </div>
            <p>Target running time: 30-45 minutes</p>
          </div>

          <div className="film-grid">
            {films.map((film) => (
              <FilmCard
                key={film.id}
                title={film.title}
                synopsis={film.synopsis}
                form={film.form}
                country={film.country}
                year={film.year}
                themes={film.themes}
                poster={film.poster}
                posterAlt={film.posterAlt}
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
