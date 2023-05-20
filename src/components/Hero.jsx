import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <motion.div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </motion.div>

        <motion.div variants={textVariant()} className="flex flex-col">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915EFF]">Moses</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop awesome frontend user <br className="sm:block hidden" />
            interfaces and web applications. Come check me out!
          </p>
          <a
            href="/src/assets/Moses-chukwunekwu.pdf"
            download
            className="relative px-5 py-2 mt-[2rem] font-medium text-white group w-1/2 sm:w-1/3"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
            <span className="relative">My Resume</span>
          </a>
        </motion.div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute bottom-[15rem] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
