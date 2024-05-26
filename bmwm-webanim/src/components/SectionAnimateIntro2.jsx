import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// import { gsap } from "gsap";
// import ScrollTrigger from "react-scroll-trigger";


const SectionAnimateIntro2 = () => {
  const animation1 = useAnimation();

  useEffect(() => {
    animation1.start('animated');

  }, []);

  return (
    <>
      <section className="sect sect--2" id="naissance">
        <div className="sect__blocText sect__blocText--decor">
          <p className="sect__title sect__title--blue sect__title--zSup">
            Découvrez
          </p>
          <motion.p 
          className="sect__title sect__title--blue sect__title--decorCentrale"
          variants={{
            animated:{
              opacity:1, scale:1
            }
          }
        }
        initial={{opacity:0, scale:0.8, skewX:"-20deg"}}
        transition={{duration:0.8, delay: 6, delayChildren:2}}
        whileInView={{scale:1, opacity:1, skewX:0}}
          >
          la naissance des <span>véhicules</span> de
          </motion.p>
          {/* <p className="sect__title sect__title--blue sect__title--decorCentrale">
            la naissance des véhicules de
          </p> */}
          <p className="sect__title sect__title--red sect__title--zSup">
            legende
          </p>
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
              src="assets/img/bmwSite/bmw-bw-1.webp"
              alt="This is an old bmw."
              className="blocImg__img"
            />
          </div>
         
        </div>
        {/* <div className="sect__blocImg--centerSmall">
          <img
            src="assets/img/bmwSite/bmw-bw-1.webp"
            //src="https://images.unsplash.com/photo-1522932467653-e48f79727abf?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="This is an old bmw."
            className="blocImg__img"
            
          />
        </div> */}
        <motion.div
          className="sect__blocImg sect__blocImg--center sect__blocImg--centerSmall2 sect__blocImg--startAnim"
          transition={{ duration: 6 }}
          variants={{
            initial: { width: "100vw" },
            animated: { width: "30%", minWidth: "260px" },
            finished: { translateY: "-60vh", skewY: "-20deg" },
          }}
          // initial={{ width: "100vw" }}
          animate={animation1}
          onAnimationComplete={()=> animation1.set({ translateY:"-114vh", translateX:"100%", backgroundColor:"transparent"})}
          whileInView={{ animationDelay: 2 }}
          whileHover={{opacity:0}}
        >
          <motion.img   src="assets/img/bmwSite/bmw-bw-1.webp"
            alt="This is an old bmw."
            className="blocImg__img"
            transition={{delay: 8, duration:0.3}}
            // whileInView={{  skewX:"20deg", translateX:"-64px", translateY:"-15%"}} 
            whileInView={{scale:0.7, opacity:0.8, skewX:"-10deg", translateY:"-30%"}}
/>
          
        </motion.div>
      </section>
    </>
  );
};

export default SectionAnimateIntro2;
