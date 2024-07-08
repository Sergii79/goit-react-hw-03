export default function SearchBox({ filter, onFilterChange }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(event) => onFilterChange(event.target.value)}
        />
      </label>
    </div>
  );
}
