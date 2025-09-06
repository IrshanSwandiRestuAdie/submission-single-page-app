import React from "react";

function SearchBar({ keyword, setKeyword }) {
  return (
    <input
      type="text"
      placeholder="Cari catatan..."
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      className="search-input"
    />
  );
}

export default SearchBar;
