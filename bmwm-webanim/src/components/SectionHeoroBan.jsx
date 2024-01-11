import React from "react";

const SectionHeoroBan = ({title1, title2}) => {
  return (
    <>
      <div className="sect sect--1">
        <h1 className="sect__title sect__title--decorPrincipale">
          {title1}
        </h1>
        <p className="sect__title sect__title--decorHB">{title2}</p>
      </div>
      <div className="interSection__bmwBandeG">
        <div className="interSection__bande interSection__bande--bc"></div>
        <div className="interSection__bande interSection__bande--bf"></div>
        <div className="interSection__bande interSection__bande--rg"></div>
      </div>
    </>
  );
};


export default SectionHeoroBan;
