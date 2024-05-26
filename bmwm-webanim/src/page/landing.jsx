//import React from 'react'
//import NavBar from '../routes/NavBar'
import Header from "../components/Header";
import SectionAnimateIntro2 from "../components/SectionAnimateIntro2.jsx";
import SectionFirstBmw from "../components/SectionFirstBmw.jsx";
import SectionHeoroBan from "../components/SectionHeoroBan.jsx";

const Landing = () => {
  return (
    <>
      <Header />
      <SectionHeoroBan
        title1={
          <>
            L’histoire <br></br> d’une marque
          </>
        }
        title2={"Mythique"}
      />

      <SectionAnimateIntro2 />
      {/* <SectionFirstBmw />
      <div className="sect sect--4 sect--bgBlack" id="first">
        
      </div> */}
    </>
  );
};

export default Landing;
