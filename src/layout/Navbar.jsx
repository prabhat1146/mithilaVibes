import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Globe,
  HandCoins,
  HandHeart,
  HandIcon,
  Handshake,
  MenuIcon,
  MoveRight,
  MoveRightIcon,
  PointerIcon,
  X,
} from "lucide-react"; // Lucide globe icon

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <nav className="bg-primary text-textLight shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}

            <div className="flex justify-items-center items-center">
              <Link to="/" className="text-accent font-bold text-2xl">
                {/* Mithila<span className="text-primaryLight">Vibes</span> */}
                <img
                  className="w-20 h-20"
                  src="../assets/logo/mithila_logo.png"
                  alt="logo"
                />
              </Link>

              {!menuOpen && (
                <div>
                  <MenuIcon
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                    }}
                    className="cursor-pointer"
                    size={36}
                  />
                </div>
              )}
            </div>

            {/* Desktop Links */}
            <div className="">
              {/* Language Switcher Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-1 px-3 py-1 rounded bg-accent text-primary"
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {i18n.language.toUpperCase()}
                  </span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white text-black shadow-md rounded z-50">
                    <button
                      onClick={() => {
                        changeLanguage("ma");
                        setDropdownOpen(false);
                      }}
                      className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      मैथिली
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage("hi");
                        setDropdownOpen(false);
                      }}
                      className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      हिन्दी
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage("en");
                        setDropdownOpen(false);
                      }}
                      className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      English
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Hamburger Icon for mobile */}
            {/* <button
              className="md:hidden text-accent focus:outline-none z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button> */}
          </div>
        </div>
      </nav>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-primary text-textLight z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-y-auto shadow-xl`}
      >
        <div className="p-6 space-y-4 overflow-y-auto">
          <div className="absolute right-0 top-2">
            <X
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              size={36}
              className="text-yellow-300 cursor-pointer"
            />
          </div>

          {/* Language Switcher in Mobile */}
          {/* <div className="mt-6">
            <button
              onClick={() => {
                changeLanguage("ma");
                setMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded ${
                i18n.language === "ma" ? "bg-accent text-primary" : ""
              }`}
            >
              मैथिली
            </button>
            <button
              onClick={() => {
                changeLanguage("hi");
                setMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded ${
                i18n.language === "hi" ? "bg-accent text-primary" : ""
              }`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => {
                changeLanguage("en");
                setMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded ${
                i18n.language === "en" ? "bg-accent text-primary" : ""
              }`}
            >
              English
            </button>
          </div> */}
          <NavLink
            to="/"
            label={t("home")}
            onClick={() => setMenuOpen(false)}
          />
         
          {/* <NavLink
            to="/pages/services"
            label={t("services")}
            onClick={() => setMenuOpen(false)}
          /> */}
          
          <NavLink
            to="/pages/gallery/all"
            label={t("gallery")}
            onClick={() => setMenuOpen(false)}
          />
          <NavLink
            to="/pages/gallery/madhubani"
            label={t("madhubani_gallery")}
            onClick={() => setMenuOpen(false)}
          />
          <NavLink
            to="/pages/about/mithila"
            label={t("about_mithila")}
            onClick={() => setMenuOpen(false)}
          />
           <NavLink
            to="/pages/about"
            label={t("about")}
            onClick={() => setMenuOpen(false)}
          />
          {/* <NavLink
            to="/pages/contact"
            label={t("contact")}
            onClick={() => setMenuOpen(false)}
          /> */}
        </div>
      </div>
    </>
  );
}

function NavLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block text-lg font-semibold hover:text-accent transition-colors my-0"
    >
      <span className="flex">
        {<Handshake className="mr-2" />}{" "}
        {label}
      </span>
    </Link>
  );
}
