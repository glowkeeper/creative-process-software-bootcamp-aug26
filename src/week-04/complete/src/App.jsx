// App now describes the shape of the page rather than all of its detail.
// Each component below is imported from its own file in src/components/.

import SiteHeader from "./components/SiteHeader.jsx";
import ProgrammeSummary from "./components/ProgrammeSummary.jsx";
import FilmCard from "./components/FilmCard.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

function App() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* The count is fixed at 0 for now. See ProgrammeSummary.jsx. */}
        <ProgrammeSummary count={0} />

        <section>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Stage 1 archive</p>
              <h2>Choose from six short films</h2>
            </div>
            <p>Target running time: 30-45 minutes</p>
          </div>

          {/* The same FilmCard component, given different information. */}
          <div className="film-grid">
            <FilmCard
              title="The Quiet Cartographer"
              synopsis="A mapmaker records disappearing paths along a changing coastline."
              form="Documentary"
              country="Ireland"
              year={2023}
            />
            <FilmCard
              title="Borrowed Weather"
              synopsis="Two sisters invent a weather forecast to delay a difficult goodbye."
              form="Drama"
              country="United Kingdom"
              year={2024}
            />
            <FilmCard
              title="Soft Machines"
              synopsis="Tiny machines continue their routines after the factory falls silent."
              form="Animation"
              country="Estonia"
              year={2022}
            />
            <FilmCard
              title="A Song for the Underpass"
              synopsis="Musicians transform an overlooked pedestrian tunnel for one evening."
              form="Documentary"
              country="United Kingdom"
              year={2025}
            />
            <FilmCard
              title="Tuesday's Orbit"
              synopsis="A missed bin collection convinces two neighbours that time has stopped."
              form="Drama"
              country="United Kingdom"
              year={2024}
            />
            <FilmCard
              title="Salt Library"
              synopsis="A dancer reconstructs a family story from gestures and tide marks."
              form="Experimental"
              country="Portugal"
              year={2021}
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

export default App;
