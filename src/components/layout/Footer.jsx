import "../../assets/sass/_footer.scss";
import { FaTelegram, FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-text">
          {" "}
          © "Sazu Academy" 2025 - Barcha huquqlar himoyalangan.{" "}
        </p>
        <div className="footer-icons">
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
          </a>
          <a
            href="https://instagram.com/username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="tel:+998901234567">
            <IoCall />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
