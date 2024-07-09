import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox({ filter, onFilterChange }) {
  return (
    <div className={css.container}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(event) => onFilterChange(event.target.value)}
          className={css.input}
        />
      </label>
    </div>
  );
}
