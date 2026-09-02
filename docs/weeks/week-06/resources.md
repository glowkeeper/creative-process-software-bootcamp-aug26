# Week 6 Resources

Reference material for browser persistence, the expanded fictional archive and
optional application routing. Start with the section your project needs; this
is a reference, not a checklist.

## Persistence: the Core Pattern

React state lasts only while the current application is running. Browser
`localStorage` can retain text after a refresh or after the browser closes.

Give the stored value one stable key:

```js
const savedFavouritesKey = "my-project-saved-favourites";
```

Load it when state is first created:

```js
function getInitialFavourites() {
  const savedFavourites = localStorage.getItem(savedFavouritesKey);

  if (savedFavourites) {
    return JSON.parse(savedFavourites);
  }

  return [];
}

const [favourites, setFavourites] = useState(getInitialFavourites);
```

Save it after the state changes:

```js
useEffect(() => {
  localStorage.setItem(savedFavouritesKey, JSON.stringify(favourites));
}, [favourites]);
```

References:

- [MDN: `localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [React: Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [React: Avoiding recreating the initial state](https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state)

## Beyond This Browser: Online Persistence

The Week 6 pattern deliberately stores data in one browser on one device. A
project may eventually need its data to be available online instead:

```text
React state     current application session
localStorage    one browser on one device
online database shared across browsers, devices or users
```

[Supabase](https://supabase.com/) is one possible next step. It provides a
hosted PostgreSQL database and tools for accessing that database from an
application. It can also provide authentication and file storage, but those
are separate capabilities with their own design and security decisions.

Before adding an online database, ask:

- Which information would become rows in a table?
- Does the application only read shared data, or can visitors add and edit it?
- Does it genuinely need user accounts?
- Which operations create, read, update or delete data?
- Which credentials are safe in public browser code, and which must remain
  secret?

This is a direction for further study, not a Week 6 requirement. Do not replace
a working `localStorage` solution simply to add another technology. If the
project later needs shared data or accounts, begin with the official
[Supabase database overview](https://supabase.com/docs/guides/database/overview),
[authentication guide](https://supabase.com/docs/guides/auth) and
[API-key guidance](https://supabase.com/docs/guides/getting-started/api-keys).

## What Should Be Remembered?

Persist information a visitor reasonably expects to survive:

- favourite or shortlisted films
- completed readiness checks
- an assembled folio or programme
- an explicit display preference

Usually leave temporary interface state alone:

- an open menu
- hover state
- an unfinished search term
- a temporary error message

Continue deriving values from the source of truth. If favourite film IDs are
saved, a favourite count can still be calculated from that array.

## JSON in Plain Language

JSON is a text format for structured information. A JSON file can contain
objects, arrays and simple values:

```json
{
  "id": "festival-018",
  "name": "Electric Bloom Moving Image Week",
  "foundedYear": 2005,
  "focus": ["Music video", "Visual culture"],
  "online": true,
  "closingDate": null
}
```

- `{}` contains one object.
- `[]` contains a list.
- Property names and text use double quotation marks.
- Numbers and Boolean values do not use quotation marks.
- `null` means there is no recorded value.
- JSON contains data, not functions or executable JavaScript.

Once JavaScript has loaded the object, its values can be read normally:

```js
festival.name
festival.foundedYear
festival.focus[0]
```

`localStorage` stores only text. `JSON.stringify()` turns an array or object
into JSON text; `JSON.parse()` turns that text back into JavaScript data.

## The Expanded Fictional Archive

The project archive is entirely fictional and safe to adapt, commit and deploy.
It contains:

| Entity or relationship | Records | What it supports |
| --- | ---: | --- |
| Films | 180 | Discovery, folios, recommendations and homepage rails |
| People | 120 | Filmmaker profiles, credits and collaborator views |
| Festivals | 40 | Festival exploration and programmes |
| Companies | 24 | Production-company and collaboration views |
| Awards | 12 | Awards journeys and recognition |
| Credits | 909 | People doing particular jobs on films |
| Honours | 495 | Festival appearances and award results |
| Taxonomy assignments | 1,736 | Genres, themes, techniques, places and forms |

Some films deliberately lack artwork, runtime or company information. Some
people lack biographies. Real archives are incomplete, so interfaces must
handle absence rather than assuming every property has a value.

## How the Source Files Connect

Each entity has a stable `id`. Relationship files store those identifiers:

```text
films.id  → credits.filmId  → people.id
films.id  → honours.filmId  → festivals.id or awards.id
films.id  → film-taxonomy.filmId
```

An honour record describes an event in a film's journey:

```json
{
  "filmId": "film-117",
  "bodyId": "festival-018",
  "bodyType": "Festival",
  "result": "Official Selection",
  "year": 2025,
  "section": "Experimental Programme"
}
```

The festival file describes the festival itself. The honour connects a film
to that festival in a particular year with a particular result.

## Choose an Entry Point

Most projects should begin with one prepared joined file in
`datasets/fictional-film-archive/project-entry-points/`.

### Film discovery or related films

Use `films-with-directors.json`. Each film already includes its director and
company objects plus honours.

### Festival exploration

Use `festival-programmes.json`. Each festival includes an `appearances` array,
and every appearance includes its film.

```js
festival.appearances.map((appearance) => (
  <FilmCard key={appearance.film.id} film={appearance.film} />
));
```

### Filmmaker profiles

Use `filmmaker-filmographies.json`. Each person includes a `films` array. Each
entry says what role they performed and includes the film.

### Awards journey or custom archive work

Use the files in `stage-3-connected-archive/` when the prepared views do not
match the question. Begin with one entity and follow only the relationships
you need.

## Loading a JSON File

There are two useful ways for this course to load JSON. They produce the same
kind of JavaScript data, but they make it available at different times.

### Import: available when the application starts

For a project data file inside `src`, import it:

```js
import festivals from "./data/festival-programmes.json";
```

The imported array is available immediately. Week 6 Starter and Complete use
this approach so the guided build can stay focused on persistence.

### Fetch: requested after the application starts

`fetch()` asks the browser to load a file from a URL. It immediately returns a
**Promise**: an object representing a result that will arrive later. The page
therefore needs to handle three situations:

```text
Loading → Ready
        ↘ Error
```

An `async` function lets the sequence be read from top to bottom. `await`
pauses that function until each Promise has produced its result:

```jsx
const [films, setFilms] = useState([]);
const [archiveStatus, setArchiveStatus] = useState("loading");

useEffect(() => {
  async function loadFilms() {
    try {
      const response = await fetch("/data/films.json");

      if (!response.ok) {
        throw new Error("The film archive could not be loaded.");
      }

      const loadedFilms = await response.json();
      setFilms(loadedFilms);
      setArchiveStatus("ready");
    } catch {
      setArchiveStatus("error");
    }
  }

  loadFilms();
}, []);
```

Read it as:

1. begin loading the archive
2. wait for the response
3. reject an unsuccessful response
4. wait for the JSON to become JavaScript data
5. store the films and report that they are ready
6. report an error if any of those steps fails

The empty dependency array means that this effect starts once when the
component first appears. Week 6 Showcase contains the complete pattern and the
visible loading and error states. You do not need to master Promises to inspect
or adapt it, but you should be able to explain what happens now and what happens
later.

Do not replace a working import with `fetch()` merely to make a project more
complex. Use it when loading after the application starts is useful to the
project.

## Handling Missing Information

Check before displaying an optional value:

```jsx
{film.poster ? (
  <img src={film.poster} alt={film.posterAlt} />
) : (
  <div className="poster-fallback">No artwork</div>
)}
```

Use honest language such as “Runtime not recorded”. Do not invent a missing
value inside the interface.

## Optional Routing

Use a normal anchor when navigation moves to another section on the current
page:

```jsx
<a href="#festivals">Festivals</a>
```

Use routing when the application genuinely contains different views. Week 6
Showcase uses `HashRouter` because hash-based routes work predictably on static
GitHub Pages hosting.

In `main.jsx`, wrap the application:

```jsx
<HashRouter>
  <App />
</HashRouter>
```

Create links and match them to routes:

```jsx
<NavLink to="/programme">Saved programme</NavLink>

<Routes>
  <Route path="/" element={<Archive />} />
  <Route path="/programme" element={<SavedProgramme />} />
</Routes>
```

Trace the path before adapting it:

```text
NavLink `to` → Route `path` → component in `element`
```

Keep shared state above `Routes` when more than one view needs it.

- [React Router: Declarative routing](https://reactrouter.com/start/declarative/routing)
- [React Router: Navigating](https://reactrouter.com/start/declarative/navigating)

## Course Reference States

- **Starter:** Week 5 Complete; selection disappears after refresh.
- **Complete:** `selectedIds` is loaded and saved with `localStorage`.
- **Showcase:** defensive persistence, a clear action and two hash-routed views.

Read the reference, explain the relevant pattern, then solve the version your
own Directors Notes brief needs.
