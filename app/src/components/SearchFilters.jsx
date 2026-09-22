function SearchFilters({
  searchTerm,
  selectedForm,
  selectedTheme,
  forms,
  themes,
  onSearchChange,
  onFormChange,
  onThemeChange,
  onClear,
}) {
  return (
    <form className="filters" onSubmit={(event) => event.preventDefault()}>
      <label className="filters__search">
        Search by title or filmmaker
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Try a title or name"
        />
      </label>

      <label>
        Form
        <select
          value={selectedForm}
          onChange={(event) => onFormChange(event.target.value)}
        >
          <option>All forms</option>
          {forms.map((form) => <option key={form}>{form}</option>)}
        </select>
      </label>

      <label>
        Theme
        <select
          value={selectedTheme}
          onChange={(event) => onThemeChange(event.target.value)}
        >
          <option>All themes</option>
          {themes.map((theme) => <option key={theme}>{theme}</option>)}
        </select>
      </label>

      <button className="secondary-button" type="button" onClick={onClear}>
        Clear filters
      </button>
    </form>
  );
}

export default SearchFilters;
