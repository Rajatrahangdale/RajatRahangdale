import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Rajat</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Intro"
              smooth={true}
              activeClass="activeClass"
              duration={500}
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true} duration={500}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true} duration={500}>
              <li>Experiance</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true} duration={500}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to="Testimonial" smooth={true} duration={500}>
              <li>Testimonials</li>
            </Link>

            <button className="button n-button">Contact</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
