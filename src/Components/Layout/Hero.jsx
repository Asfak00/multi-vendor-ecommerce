import React from "react";
import styles from "../../Styles/Style";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.jpg";

const Hero = () => {
  return (
    <div
      className={`${styles.noramlFlex} relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat`}
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className={`${styles.section} w-[90%] 800px:w-[60%] `}>
        <h4 className="text-[34px] 800px:text-[60px] font-[600] capitalize text-[#3d3a3a] leading-[1.2] ">
          Best Collection for <br />
          home decoration
        </h4>

        <p className="pt-5 font-[400] font-Poppins text-[16px] text-[#000000ba]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
          voluptate, illum ratione, facere, eveniet nostrum laborum adipisci
          repellendus praesentium fugiat voluptatibus hic natus soluta
          recusandae labore nisi. Totam, numquam sint.
        </p>

        <Link to={"/products"} className="inline-block">
          <div className={`${styles.button} mt-6`}>
            <span className="text-white font-Poppins text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
