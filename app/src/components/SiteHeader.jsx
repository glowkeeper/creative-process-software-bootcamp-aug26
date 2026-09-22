import { NavLink } from "react-router-dom";

function SiteHeader({ selectedCount }) {
  return (
    <header className="site-header">
      <p className="eyebrow">Creative Processes Cinema</p>
      <h1>Short Film Programme Builder</h1>
      <p>
        Explore a fictional connected archive and assemble a screening that
        fits a 30–45 minute programme.
      </p>
      <nav aria-label="Primary navigation">
        <NavLink to="/" end>Archive</NavLink>
        <NavLink to="/programme">
          Saved programme <span aria-label={`${selectedCount} selected films`}>({selectedCount})</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default SiteHeader;
