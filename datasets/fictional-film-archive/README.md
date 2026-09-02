# Fictional Film Archive

This is a wholly fictional teaching dataset for the Directors Notes edition of
the Software Development Bootcamp. It reflects useful characteristics of a
long-running film archive without reproducing Directors Notes films, people,
text, taxonomy records or relationships.

The dataset may be committed, adapted and used in publicly deployed learner
prototypes. Every title, person, company, festival, award and description in it
was invented for the course.

## Why It Exists

The real Directors Notes project pack is valuable tutor reference material,
but its data must not be republished. Learners also need a collection small
enough to read, explain and debug.

This dataset preserves useful characteristics of the real problem:

- Films connected to people, companies, festivals and awards
- Repeat directors and collaborators
- Genres, themes, techniques, forms and countries
- An award journey from selection through nomination to winning
- Deliberately incomplete runtimes, artwork and honours
- Stable identifiers for joining records
- Enough variety for filtering, recommendations and profile views

It does not copy or transform client records.

## Progressive Stages

### Stage 1: Simple Collection

**Suggested use: Weeks 2–3**

Six films in one flat file. The fields are deliberately easy to display and
filter:

- `id`
- `title`
- `year`
- `runtimeSeconds`
- `form`
- `genre`
- `country`
- `synopsis`
- `poster`
- `posterAlt`

Use Stage 1 for static cards, semantic HTML, CSS, introductory arrays, DOM
events and one simple filter. One film has no runtime so missing information is
visible from the beginning.

### Stage 2: Richer Collection

**Suggested use: Weeks 4–5**

Twelve films with arrays and additional descriptive fields. It supports React
components, props, richer filtering and conditional rendering without
introducing relationships between separate files.

Learners do not need to use every field. A brief should choose only the fields
needed by its Starting Point.

`directorIds` and `companyIds` are present from Stage 2, but `people.json` and
`companies.json` only exist in Stage 3. A learner who follows those identifiers
in Stage 2 will find nothing to join to. Either ignore the two fields or move to
Stage 3.

### Stage 3: Connected Project Archive

**Suggested use: Weeks 6–8 or optional extension**

The project-scale archive contains:

- 180 films
- 120 people
- 24 fictional production companies
- 40 fictional festivals
- 12 fictional awards
- 909 credits
- 495 festival and award honours
- more than 1,700 film taxonomy assignments

Use Stage 3 when a prototype benefits from volume or relationships: discovery,
recommendations, a filmmaker profile, related-film journey, festival view or
editorial tool. It is project infrastructure, not a measure of learner
success.

## Project Entry Points

Three joined JSON files provide simpler beginnings for projects that do not
need to perform the archive joins themselves:

- `project-entry-points/films-with-directors.json`
- `project-entry-points/festival-programmes.json`
- `project-entry-points/filmmaker-filmographies.json`

Choose one entry point or one relevant source file. No project needs to load or
understand the entire archive.

## Poster Artwork

Every stage includes two artwork fields:

- `poster` - a path such as `images/film-01.svg`
- `posterAlt` - alternative text describing the image

The files live in one shared folder:

```text
datasets/fictional-film-archive/images/
```

Film identifiers are consistent across all three stages, so the same folder
serves every stage. Copy `images/` alongside the film data you are using and the
stored paths will resolve.

The artwork is deliberately abstract: geometric shapes, typography and a colour
assigned by film form. It contains no photographs, no film stills and no people.
This keeps every poster wholly fictional, removes any licensing or attribution
requirement, and means no image can be mistaken for a real work.

Regenerate the posters after changing film titles, years, forms or countries:

```bash
node scripts/generate-film-posters.mjs
```

Several records deliberately have no artwork, and their `poster` and
`posterAlt` values are `null`. This mirrors missing runtimes, biographies and
company relationships and gives conditional rendering something real to
handle.

## Formats

Every stage is supplied as JSON and CSV. JSON is the default for course code.
CSV is available for learners exploring tabular data or for tutor inspection.

`fictional-film-archive.xlsx` is a tutor-friendly view of the complete Stage 3
dataset. It is not required for learner projects.

Array values in CSV files use `|` as a separator. For example:

```text
Memory|Place
```

## Relationship Map

```text
films.id     -> credits.filmId     -> people.id
films.id     -> honours.filmId     -> festivals.id or awards.id
films.id     -> film-taxonomy.filmId
directorIds  -> people.id
companyIds   -> companies.id
```

## Teaching Boundary

Progression means revealing data only when it serves the learning objective.
Do not hand learners the connected archive in Week 2 and ask them to discover
its structure unaided.

- Begin with Stage 1.
- Move to Stage 2 when components need richer props.
- Introduce Stage 3 as project infrastructure once project needs diverge.
- Keep the learner's chosen brief and Starting Point more important than using
  every available record.
