// eslint-disable-next-line no-unused-vars
import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {technologies.map((technology, idx) => (
        <div key={idx} className="w-28 h-28">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
