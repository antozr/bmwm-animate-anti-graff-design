import React from "react";

const RowContentCar = ({urlImg, modeleNum, txtDecorImg, txtDecorImgBool, rowDirection, txt1, txtDecor, txtDecorBigBool}) => {
    console.log(txtDecorBigBool);
    console.log(rowDirection);
  return (
    <>
      <div className="sect__rowContent sect__rowContent--spaceBtw " style={rowDirection ? {flexDirection: "row"} : {flexDirection: "row-reverse"}}>
        <div className="rowContent__boxContImg rowContent__boxContImg--small">
          <div className="rowContent__imgClipPath rowContent__imgClipPath--noRotate rowContent__imgClipPath--3100">
            <img
            src={urlImg}
              alt="Voici une BMW 328, l'une des premières voitures qu'a construit la marque."
              className="rowContent__img"
            />
          </div>
          <p className=" sect__txt sect__txt--white sect__txt--after rowContent__txtDecor rowContent__txtDecor--3100">
            {modeleNum}
          </p>
          {txtDecorImgBool ? <><p className="sect__txt sect__txt--after sect__txt--imgDecorTop">{txtDecorImg}</p></> : ''}
        </div>

        <div className="rowContent__txtP rowContent__txtP--marginleftNeg">
          <p className="sect__txt">
            {txt1}
          </p>
        </div>

        {txtDecorBigBool ? <><div className="rowContent__decorTxt sect__txt--after">{txtDecor}</div></> : ''}
      </div>
    </>
  );
};

export default RowContentCar;
