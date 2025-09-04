import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/sass/style.scss";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/menu.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <nav className="container nav">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>

        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={closeMenu}>
            ×
          </button>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={closeMenu}>
              Asosiy Sahifa
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={closeMenu}>
              Biz Haqimizda
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/courses" onClick={closeMenu}>
              Kurslar
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services" onClick={closeMenu}>
              Xizmatlar
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/offerta" onClick={closeMenu}>
              Offerta
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" onClick={closeMenu}>
              Biz bilan aloqa
            </Link>
          </li>
        </ul>

        <button className="menu-btn" onClick={toggleMenu}>
          <img src={menu} alt="menu" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
