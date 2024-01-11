import React from "react";

const SectionAnimateIntro2 = () => {
  return (
    <>
     <section className="sect sect--2" id="naissance">
        <div className="sect__blocText sect__blocText--decor">
          <p className="sect__title sect__title--blue sect__title--zSup">Découvrez</p>
          <p className="sect__title sect__title--blue sect__title--decorCentrale">
            la naissance des véhicules de
          </p>
          <p className="sect__title sect__title--red sect__title--zSup">legende</p>
        </div>
        <div className="sect__blocImg sect__blocImg--smallH">
          <div className="blocImg blockImg__smallH">

            <img
              src="assets/img/bmwSite/bmw-02-old-1.webp"
              alt="This is an old bmw 02."
              className="blocImg__img"
            />
          </div>
          
          <div className="blocImg blockImg__smallH">
            <img
              src="assets/img/bmwSite/bmw-right-1.webp"
              alt="This is an old bmw."
              className="blocImg__img"
            />
          </div>
        </div>
        <div className="sect__blocImg sect__blocImg--center sect__blocImg--centerSmall">
            <img
              // src="assets/img/bmwSite/bmw-bw-1.webp"
              src="https://images.unsplash.com/photo-1522932467653-e48f79727abf?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="This is an old bmw."
              className="blocImg__img"
            />
          </div>
      </section>
    </>
  );
};

export default SectionAnimateIntro2;
