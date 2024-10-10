import React, { useContext} from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function Navbar() {
  const { language, changeLanguage } = useContext(LanguageContext); // Using language from the context
  
  return (
    <div className="navbar bg-base-100 px-4 md:px-8">
      {/* Logo */}
      <div className="navbar-start">
        <img src="/kk logo.png" alt="logo" style={{ width: "140px", height: "120px" }} />
      </div>

    

      {/* Menu items visible on medium and larger screens */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>{language === "en" ? "Home" : language === "kn" ? "ಮನೆ" : "घर"}</a></li>
          <li><a>{language === "en" ? "Contact Us" : language === "kn" ? "ಸಂಪರ್ಕಿಸಿ" : "संपर्क करें"}</a></li>
          <li><a>{language === "en" ? "About Us" : language === "kn" ? "ನಮ್ಮ ಬಗ್ಗೆ" : "हमारे बारे में"}</a></li>
        </ul>
      </div>

      {/* Language selector */}
      <div className="navbar-end  md:flex">
        <select
          className="select select-bordered"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="kn">Kannada</option>
          <option value="hi">Hindi</option>
        </select>
      </div>

    
    </div>
  );
}

export default Navbar;
