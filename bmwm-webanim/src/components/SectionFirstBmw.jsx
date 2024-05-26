import React from "react";
import RowContentCar from "./RowContentCar";

const SectionFirstBmw = () => {
  return (
    <>
      <section id="" className="sect sect--3">
        <div className="sect__rowContent sect__rowContent--padLeft">
          <div className="rowContent__left rowContent__txtP">
            <p className="sect__txt">
              Dés sa fondation, BMW commercialise des véhicules sportifs comme
              avec la 328, la 507 ou bien la 1800Ti. Tous rencontre le succés et
              dés lors dans les années 70, elle ouvre sa branche spécialiser
              dans le domaine,{" "}
              <b>
                <i>les M.</i>
              </b>
            </p>
          </div>

          <div className="rowContent__right">
            <h2 className="sect__title sect__title--black sect__title--2">
              La naissance d’une Légende
            </h2>
            <div className="rowContent__boxContImg">
              <div className="rowContent__imgClipPath">
                <img
                  src="https://images.unsplash.com/photo-1627812540252-11717e222d70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Voici une BMW 328, l'une des premières voitures qu'a construit la marque."
                  className="rowContent__img"
                />
              </div>
              <p className=" sect__txt sect__txt--white sect__txt--after rowContent__txtDecor">
                328
              </p>
            </div>
          </div>
        </div>
        <RowContentCar
          urlImg={
            "https://images.unsplash.com/photo-1595787383726-3d2d6ccb7ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          modeleNum={"507"}
          txtDecorImg={"M"}
          txtDecorImgBool={true}
          rowDirection={true}
          txt1={
            <>
              {" "}
              <i>
                <b>La BMW Motorsport</b>
              </i>{" "}
              est fondé en 1972 pour propulser les sportives. Les quelques
              employés vont donné la vie au premier monstre du{" "}
              <i>
                <b>M</b>
              </i>{" "}
              l’année suivante.
            </>
          }
          txtDecorBigBool={true}
          txtDecor={"Münchener"}
          clipPath={" rowContent__imgClipPath--3100 "}
          noRotate={" rowContent__imgClipPath--noRotate "}
          txtDecorCss={" rowContent__txtDecor--3100 "}
        />
        <RowContentCar
          urlImg={
            "https://images.unsplash.com/photo-1651176126170-0cfc2c13c5d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          modeleNum={"1800"}
          txtDecorImg={"M"}
          txtDecorImgBool={false}
          rowDirection={false}
          txt1={
            <>
              Le succès est présent dés les premières courses, en F2 de voitures
              de tourisme. Elle ira sur un podium en 1er place jusqu’en 79. Celà
              donnera naissance aux modèle de série, car le public est demendeur
              de ces voitures.
            </>
          }
          txtDecorBigBool={true}
          txtDecor={"Munich"}
          clipPath={" rowContent__imgClipPath--6point "}
          noRotate={" rowContent__imgClipPath--noRotate "}
          txtDecorCss={" rowContent__txtDecor--6point "}
        />
      </section>
    </>
  );
};

export default SectionFirstBmw;
