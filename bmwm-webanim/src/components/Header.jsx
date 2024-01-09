import React from "react";
import NavBar from "../routes/NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="head">
        <Link to="/" >
        <div className="head__boxLogo">
          <p className="head__logoTxt">Old M</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="45"
            viewBox="0 0 57 45"
            fill="none"
          >
            <path
              d="M6.97949 2.15588L9.77129 42.5784"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M11.1672 2.15588L13.959 42.5784"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M15.0757 2.15588L17.8675 42.5784"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M19.5425 1.61688L22.3343 42.0394"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M24.4462 10.3339C24.305 5.54326 20.2314 1.80084 15.4454 2.06492L10.3135 2.34808C5.5473 2.61106 1.94791 6.74542 2.34326 11.503L4.30349 35.0921C4.68577 39.6924 8.66999 43.1618 13.2787 42.9075L17.1473 42.694C21.7364 42.4408 25.2784 38.5863 25.1431 33.9927L24.4462 10.3339Z"
              stroke="white"
              strokeWidth="3"
            />
            <path
              d="M49.7205 2.15588L46.9287 42.5784"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M45.5327 2.15588L42.7409 42.5784"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M41.6243 2.15588L38.8325 42.5784"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M37.1575 1.61688L34.3657 42.0394"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M32.2538 10.3339C32.3949 5.54326 36.4685 1.80084 41.2545 2.06492L46.3864 2.34808C51.1527 2.61106 54.752 6.74542 54.3567 11.503L52.3965 35.0921C52.0142 39.6924 48.03 43.1618 43.4212 42.9075L39.5527 42.694C34.9635 42.4408 31.4216 38.5863 31.5569 33.9927L32.2538 10.3339Z"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </div>
        </Link>
        <NavBar />
      </div>
    </>
  );
};

export default Header;
