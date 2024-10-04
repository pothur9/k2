import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { useRouter } from "next/navigation";
import logo from '../images/kk logo.png';

function Navbar() {
  const { language, changeLanguage } = useContext(LanguageContext); // Using language from the context
  const router = useRouter();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <img src="/kk logo.png" alt="logo" style={{ width: "140px", height: "120px" }} />
      </div>

      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li><a>{language === "en" ? "Home" : language === "kn" ? "ಮನೆ" : "घर"}</a></li>
          <li><a>{language === "en" ? "Contact Us" : language === "kn" ? "ಸಂಪರ್ಕಿಸಿ" : "संपर्क करें"}</a></li>
          <li><a>{language === "en" ? "About Us" : language === "kn" ? "ನಮ್ಮ ಬಗ್ಗೆ" : "हमारे बारे में"}</a></li>
        </ul>
      </div>

      <div className="navbar-end">
        <select
          className="select select-bordered"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="kn">Kannada</option>
          <option value="hi">Hindi</option>
        </select>
        <a className="btn">
          {language === "en" ? "Join Us" : language === "kn" ? "ನಮ್ಮೊಡನೆ ಸೇರಿ" : "हमसे जुड़ें"}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
