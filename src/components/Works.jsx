// eslint-disable-next-line no-unused-vars
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          repellat dolorum ea totam porro voluptates maiores aliquid, ducimus
          vitae pariatur eos eligendi sapiente magni temporibus eius,
          consequuntur laborum in debitis!
        </motion.p>
      </div>

      <div className="mt-20 flex gap-10 flex-wrap">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full parallax-effect-glare-scale"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        perspective={500}
        glareEnable={true}
        scale={1.02}
        transitionSpeed={450}
        gyroscope={true}
        glareMaxOpacity={0.45}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(project.source_code_link, "_blank")}
              className="w-10 h-10 black-gradient flex rounded-full cursor-pointer justify-center items-center"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="font-bold text-[24px]">{project.name}</h3>
          <p className="text-secondary mt-2 text-[14px]">
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <p key={idx} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default SectionWrapper(Works, "");
