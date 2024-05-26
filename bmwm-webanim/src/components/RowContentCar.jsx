import React from "react";

const RowContentCar = ({urlImg, modeleNum, txtDecorImg, txtDecorImgBool, rowDirection, txt1, txtDecor, txtDecorBigBool, clipPath, noRotate, txtDecorCss}) => {
    console.log(txtDecorBigBool);
    console.log(rowDirection);
  return (
    <>
      <div className="sect__rowContent sect__rowContent--spaceBtw " style={rowDirection ? {flexDirection: "row", margin: "0  0 0 -6vw"} : {flexDirection: "row-reverse", margin: "0 -5vw 0 0 "}}>
        <div className="rowContent__boxContImg rowContent__boxContImg--small">
          <div className={"rowContent__imgClipPath " + clipPath +noRotate}>
            <img
            src={urlImg}
              alt="Voici une BMW 328, l'une des premières voitures qu'a construit la marque."
              className="rowContent__img"
            />
          </div>
          <p className={" sect__txt sect__txt--white sect__txt--after rowContent__txtDecor "+ txtDecorCss}>
            {modeleNum}
          </p>
          {txtDecorImgBool ? <><p className="sect__txt sect__txt--after sect__txt--imgDecorTop">{txtDecorImg}</p></> : ''}
        </div>

        <div className="rowContent__txtP rowContent__txtP--marginleftNeg">
          <p className="sect__txt">
            {txt1}
          </p>
        </div>

        {txtDecorBigBool ? <><div className="rowContent__decorTxt sect__txt--after" style={rowDirection ? {transform: 'translateX(18vw)'} : {transform: 'translateX(-14vw)'}}>{txtDecor}</div></> : ''}
      </div>
    </>
  );
};

export default RowContentCar;
