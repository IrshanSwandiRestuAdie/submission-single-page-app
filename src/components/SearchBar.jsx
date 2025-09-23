import { useContext } from "react";
import { LocaleContext } from "../contexts/LocaleContext";

function SearchBar({ keyword, setKeyword }) {
  const { locale } = useContext(LocaleContext);

  const placeholderText = locale === "id" ? "Cari catatan..." : "Search notes...";

  return (
    <input
      type="text"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      placeholder={placeholderText}
      className="search-input"
    />
  );
}

export default SearchBar;
