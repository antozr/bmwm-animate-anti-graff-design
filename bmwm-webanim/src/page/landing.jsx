//import React from 'react'
//import NavBar from '../routes/NavBar'
import Header from "../components/Header";

const Landing = () => {
  return (
    <>
      <Header />
      <div className="sect sect--1">
        <h1 className="sect__title sect__title--decorPrincipale">L’histoire <br></br> d’une marque</h1>
        <p className="sect__title sect__title--decorHB">
          Mythique
        </p>
      </div>
      <div className="interSection__bmwBandeG">
        <div className="interSection__bande interSection__bande--bc">

        </div>
        <div className="interSection__bande interSection__bande--bf">

        </div>
        <div className="interSection__bande interSection__bande--rg">

        </div>
      </div>
      <div className="sect" id="naissance">
        naissance
      </div>
    </>
  );
};

export default Landing;
