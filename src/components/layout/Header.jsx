import { Link } from "react-router-dom";
import "../../assets/sass/style.scss";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <ul className="nav-list ">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Asosiy Sahifa
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              Biz Haqimizda
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/courses">
              Kurslar
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              Xizmatlar
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/offerta">
              Offerta
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Biz bilan aloqa
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
