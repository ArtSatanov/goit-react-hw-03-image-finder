export const Searchbar = ({ onSubmit }) => {
  return (
    <header className="searchbar">
      <form
        className="form"
        onSubmit={e => {
          onSubmit(e);
        }}
      >
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
