/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="sm:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "tween", index * 0.15, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 350,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a frontend web developer with expertise in React.js, Next.js,
        and JavaScript/TypeScript. Proficient in HTML/CSS, CSS-in-JS, and
        Tailwind CSS, I create visually appealing and responsive user
        interfaces. I also have experience working with Node.js, Express.js, and
        GraphQL for building scalable web applications. I am passionate about
        delivering high-quality solutions so I constantly strive to stay
        up-to-date with the latest web development trends and technologies.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
