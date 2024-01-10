//import React from 'react'
//import NavBar from '../routes/NavBar'
import Header from "../components/Header";

const Landing = () => {
  return (
    <>
      <Header />
      <div className="sect sect--1">
        <h1 className="sect__title sect__title--decorPrincipale">
          L’histoire <br></br> d’une marque
        </h1>
        <p className="sect__title sect__title--decorHB">Mythique</p>
      </div>
      <div className="interSection__bmwBandeG">
        <div className="interSection__bande interSection__bande--bc"></div>
        <div className="interSection__bande interSection__bande--bf"></div>
        <div className="interSection__bande interSection__bande--rg"></div>
      </div>
      <section className="sect sect--2" id="naissance">
        <div className="sect__blocText sect__blocText--decor">
          <p className="sect__title sect__title--blue">Découvrez</p>
          <p className="sect__title sect__title--blue sect__title--decorCentrale">
            la naissance des véhicules de
          </p>
          <p className="sect__title sect__title--red">legende</p>
        </div>
        <div className="sect__blocImg">
          <div className="blocImg blockImg__smallH">

            <img
              src="assets/img/bmwSite/bmw-02-old-1.webp"
              alt="This is an old bmw 02."
              className="blocImg__img"
            />
          </div>
          <div className="blocImg blockImg__smallH">
            {/* <img
              src="assets/img/bmwSite/bmw-bw-1.webp"
              alt="This is an old bmw."
              className="blocImg__img"
            /> */}
          </div>
          <div className="blocImg blockImg__smallH">
            <img
              src="assets/img/bmwSite/bmw-right-1.webp"
              alt="This is an old bmw."
              className="blocImg__img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
