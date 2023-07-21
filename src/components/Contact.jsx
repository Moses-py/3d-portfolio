/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div>
          <p>
            Please feel free to reach out via{" "}
            <a className="underline" href="mailto:dantereus1@gmail.com">
              mail
            </a>{" "}
            to dantereus1@gmail.com
          </p>
          <span className=" block my-[0.5rem]">or</span>
          <p>
            Reach out via cell @{" "}
            <a className="underline" href="tel:+2349069885063">
              +2349069885063
            </a>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
