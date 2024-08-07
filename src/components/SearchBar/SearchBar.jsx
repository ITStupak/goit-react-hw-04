import css from "./SearchBar.module.css";

const SearchBar = (/* { onSubmit } */) => {
  return (
    <>
      <header>
        <form className={css.form}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.searchBtn}>
            Search
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
