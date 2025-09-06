import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FiHome, FiPlusCircle, FiArchive } from 'react-icons/fi';
import SearchBar from "./SearchBar";

function Navigation() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");

  useEffect(() => {
    setSearchParams(keyword ? { keyword } : {});
  }, [keyword, setSearchParams]);
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/"><FiHome/></Link></li>
        <li><Link to="/arsip"><FiArchive/></Link></li>
        <li><Link to="/tambah-note/:id"><FiPlusCircle/></Link></li>
      </ul>
      <div className="navbar-search">
        <SearchBar keyword={keyword} setKeyword={setKeyword} />
      </div>
    </nav>
  );
}

export default Navigation;
