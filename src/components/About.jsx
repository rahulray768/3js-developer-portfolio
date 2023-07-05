// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, service }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly">
          <img
            src={service.icon}
            alt={service.title}
            className="object-contain w-16 h-16"
          />
          <h3 className="text-center text-[20px] font-bold">{service.title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p className="text-secondary max-w-3xl leading-[30px] text-[17px] mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ut
        explicabo placeat voluptatibus quae obcaecati nesciunt commodi accusamus
        dolorum deserunt? Aliquid perspiciatis ea sapiente, doloremque debitis
        ad laboriosam sit fuga.
      </motion.p>

      <div
        className="mt-20 gap-10 flex flex-wrap"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} service={service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
