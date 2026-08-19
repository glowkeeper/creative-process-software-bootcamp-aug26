// The whole page lives in this one component.
//
// Everything below is written out by hand, including all six film cards.
// Read it and notice how much of it repeats: every card has the same shape and
// only the words inside it change. During the guided build we will give that
// repeated shape a name of its own.

function App() {
  return (
    <>
      <header className="site-header">
        <p className="eyebrow">Creative Processes Cinema</p>
        <h1>Short Film Programme Builder</h1>
        <p>
          Explore six fictional films and imagine a programme for one memorable
          screening.
        </p>
      </header>

      <main>
        <section className="programme-summary">
          <p className="eyebrow">Your programme</p>
          <h2>Selected films</h2>
          <p>0 films selected</p>
        </section>

        <section>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Stage 1 archive</p>
              <h2>Choose from six short films</h2>
            </div>
            <p>Target running time: 30-45 minutes</p>
          </div>

          <div className="film-grid">
            <article className="film-card">
              <p className="film-meta">Documentary · Ireland · 2023</p>
              <h3>The Quiet Cartographer</h3>
              <p>
                A mapmaker records disappearing paths along a changing
                coastline.
              </p>
              <button type="button">Add to programme</button>
            </article>

            <article className="film-card">
              <p className="film-meta">Drama · United Kingdom · 2024</p>
              <h3>Borrowed Weather</h3>
              <p>
                Two sisters invent a weather forecast to delay a difficult
                goodbye.
              </p>
              <button type="button">Add to programme</button>
            </article>

            <article className="film-card">
              <p className="film-meta">Animation · Estonia · 2022</p>
              <h3>Soft Machines</h3>
              <p>
                Tiny machines continue their routines after the factory falls
                silent.
              </p>
              <button type="button">Add to programme</button>
            </article>

            <article className="film-card">
              <p className="film-meta">Documentary · United Kingdom · 2025</p>
              <h3>A Song for the Underpass</h3>
              <p>
                Musicians transform an overlooked pedestrian tunnel for one
                evening.
              </p>
              <button type="button">Add to programme</button>
            </article>

            <article className="film-card">
              <p className="film-meta">Drama · United Kingdom · 2024</p>
              <h3>Tuesday's Orbit</h3>
              <p>
                A missed bin collection convinces two neighbours that time has
                stopped.
              </p>
              <button type="button">Add to programme</button>
            </article>

            <article className="film-card">
              <p className="film-meta">Experimental · Portugal · 2021</p>
              <h3>Salt Library</h3>
              <p>
                A dancer reconstructs a family story from gestures and tide
                marks.
              </p>
              <button type="button">Add to programme</button>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>
          A fictional teaching archive inspired by the shape of real film data.
        </p>
      </footer>
    </>
  );
}

export default App;
