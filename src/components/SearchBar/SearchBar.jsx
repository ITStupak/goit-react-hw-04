import css from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!query.trim()) {
      return alert("Cannot be empty");
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={query}
            className={css.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
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
