// A component is a function that returns the markup for one piece of the page.
// Its name starts with a capital letter so that React knows it is a component.

function SiteHeader() {
  return (
    <header className="site-header">
      <p className="eyebrow">Creative Processes Cinema</p>
      <h1>Short Film Programme Builder</h1>
      <p>
        Explore six fictional films and imagine a programme for one memorable
        screening.
      </p>
    </header>
  );
}

export default SiteHeader;
