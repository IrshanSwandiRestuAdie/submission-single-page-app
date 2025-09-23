import React, { useState, useEffect, useContext } from "react";
import { Link, useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { FiHome, FiPlusCircle, FiArchive, FiLogOut } from "react-icons/fi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import SearchBar from "./SearchBar";
import { putAccessToken, getAccessToken } from "../utils/network_data";
import { UserContext } from "../contexts/UserContext";
import { LocaleContext } from "../contexts/LocaleContext";

function Navigation() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  const { user, fetchUser, setUser } = useContext(UserContext);
  const { locale, toggleLocale } = useContext(LocaleContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSearchParams(keyword ? { keyword } : {});
  }, [keyword, setSearchParams]);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  const handleLogout = () => {
    putAccessToken("");
    setUser(null);
    navigate("/login");
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const translations = {
    id: { logout: "Keluar" },
    en: { logout: "Logout" },
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {isAuthPage ? (
          <>
            <li>
              <button onClick={toggleTheme} className="theme-toggle">
                {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
              </button>
            </li>
            <li>
              <button onClick={toggleLocale} className="locale-toggle">
                {locale === "id" ? "EN" : "ID"}
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/"><FiHome /></Link></li>
            <li><Link to="/arsip"><FiArchive /></Link></li>
            <li><Link to="/tambah-note/:id"><FiPlusCircle /></Link></li>

            {getAccessToken() && (
              <>
                <li className="username">{user ? user.name : "Loading..."}</li>
                <li>
                  <button onClick={handleLogout} className="logout-btn">
                    {translations[locale].logout} 
                  </button>
                </li>
              </>
            )}

            <li>
              <button onClick={toggleTheme} className="theme-toggle">
                {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
              </button>
            </li>

            <li>
              <button onClick={toggleLocale} className="locale-toggle">
                {locale === "id" ? "EN" : "ID"}
              </button>
            </li>
          </>
        )}
      </ul>

      {!isAuthPage && (
        <div className="navbar-search">
          <SearchBar keyword={keyword} setKeyword={setKeyword} />
        </div>
      )}
    </nav>
  );
}

export default Navigation;
