import React from "react";
import styles from "../../Styles/Style";

import sponsored1 from "../../Assets/sponsored1.png";
import sponsored2 from "../../Assets/sponsored2.png";
import sponsored3 from "../../Assets/sponsored3.png";
import sponsored4 from "../../Assets/sponsored4.png";
import sponsored5 from "../../Assets/sponsored5.png";
import sponsored6 from "../../Assets/sponsored6.png";
import sponsored7 from "../../Assets/sponsored7.png";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block mb-12 py-10 px-5  cursor-pointer bg-white rounded-xl `}>
      <div className="flex items-center  gap-3 sm:gap-10 justify-between">
        <div className="flex items-start">
          <img
            src={sponsored1}
            alt="sponsored/image"
            className="w-full object-contain"
          />
        </div>

        <div className="flex">
          <img
            src={sponsored2}
            alt="sponsored/image"
            className="w-full object-contain"
          />
        </div>

        <div className="flex">
          <img
            src={sponsored3}
            alt="sponsored/image"
            className="w-full object-contain"
          />
        </div>

        <div className="flex">
          <img
            src={sponsored4}
            alt="sponsored/image"
            className="w-full object-contain"
          />
        </div>

        <div className="flex">
          <img
            src={sponsored5}
            alt="sponsored/image"
            className="w-full object-contain"
          />
        </div>

        <div className="flex">
          <img
            src={sponsored6}
            alt="sponsored/image"
            className="w-full object-contain"
          />
        </div>
        <div className="flex">
          <img
            src={sponsored7}
            alt="sponsored/image"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
