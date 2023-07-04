// eslint-disable-next-line no-unused-vars
import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative h-screen w-full mx-auto">
      <div
        className={`${styles.paddingX} inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5 absolute top-[120px]`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Adrian</span>
          </h1>
          <p className={`mt-2 text-white-100 ${styles.heroSubText}`}>
            Lorem ipsum dolor sit, <br className="sm:block hidden" /> amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
