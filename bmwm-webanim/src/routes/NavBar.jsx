import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  let dataLink = [
    {
      name: "La naissance",
      link: "#naissance",
      aria: "Direction vers la section naissance de la marque",
      id: 0,
    },
    {
      name: "1er BMW M",
      link: "#first",
      aria: "Direction vers la section de la première M",
      id: 1,
    },
    {
      name: "La vitesse",
      link: "#vitesse",
      aria: "Direction vers la section de la première voiture faite pour la course",
      id: 2,
    },
    {
      name: "La mythique",
      link: "#mythe",
      aria: "Direction vers la section de la mythique",
      id: 3,
    },
    {
      name: "L'art",
      link: "#art",
      aria: "Direction vers la section des poster",
      id: 4,
    },
  ];

  return (
    <>
      <div className="head__nav">
        <nav className="nav">
          <ul className="nav__list">
            {dataLink.map((el, key) => (
              <li className="nav__el" key={key}>
                <a href={el.link} className="nav__link" aria-label={el.aria}>
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav__decor"></div>
      </div>
    </>
  );
};

export default NavBar;
