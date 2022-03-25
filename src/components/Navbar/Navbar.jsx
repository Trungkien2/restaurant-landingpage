import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="nav__menu">
        <li className="nav__items">
          <a href="#" className="nav__links">
            Home
          </a>
        </li>
        <li className="nav__items">
          <a href="#" className="nav__links">
            Pages
          </a>
        </li>
        <li className="nav__items">
          <a href="#" className="nav__links">
            Contact Us
          </a>
        </li>
        <li className="nav__items">
          <a href="#" className="nav__links">
            Blog
          </a>
        </li>
        <li className="nav__items">
          <a href="#" className="nav__links">
            Landing
          </a>
        </li>
      </ul>

      <ul className="nav__menu">
        <li className="nav__items">
          <a href="#login" className="nav__links">
            Log in / registration
          </a>
        </li>
        <li className="nav__items">
          <a href="/" className="nav__links">
            book table
          </a>
        </li>
      </ul>

      <div className="nav__smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggle(true);
          }}
        />

        {toggle && (
          <div className="nav__smallscreen-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggle(false);
              }}
            />
            <ul className="nav__menu--smallscreen ">
              <li className="nav__items">
                <a href="">Home</a>
              </li>
              <li className="nav__items">
                <a href="">Pages</a>
              </li>
              <li className="nav__items">
                <a href="">Contact Us</a>
              </li>
              <li className="nav__items">
                <a href="">Blog</a>
              </li>
              <li className="nav__items">
                <a href="">Landing</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
