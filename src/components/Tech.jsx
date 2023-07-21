import { SectionWrapper } from "../hoc";
import Skills from "./TagCanvas";

const Tech = () => {
  return (
    <div className="relative">
      <Skills />
      {/* {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))} */}
    </div>
  );
};

export default SectionWrapper(Tech, "");
