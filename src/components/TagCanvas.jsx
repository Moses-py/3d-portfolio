import { useEffect } from "react";
import { motion } from "framer-motion";
const skills = [
  { href: "#git_", title: "Git" },
  { href: "#nextjs", title: "NextJS" },
  { href: "#html_", title: "HTML5" },
  { href: "#react_", title: "React" },
  { href: "#tailwind", title: "TailwindCSS" },
  { href: "#sql_", title: "SQL" },
  { href: "#aws_", title: "AWS" },
  { href: "#npm_", title: "npm" },
  { href: "#css_", title: "CSS3" },
  { href: "#jquery_", title: "jQuery" },
  { href: "#js_", title: "JavaScript" },
  { href: "#node.js_", title: "NodeJS" },
  { href: "#mongodb", title: "Mongo DB" },
  { href: "#restapis", title: "Rest APIs" },
  { href: "#apollogql", title: "Apollo GraphQL" },
  { href: "#bootstrap", title: "Bootstrap" },
  { href: "#apis", title: "Restful APIs" },
  { href: "#jest", title: "JEST" },
  { href: "#typescript", title: "Typescript" },
];

const Skills = () => {
  useEffect(() => {
    console.log("Loading TagCanvas...");
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: "#fff",
      outlineThickness: 0.5,
      outlineColour: "#fff",
      maxSpeed: 0.05,
      freezeActive: true,
      shuffleTags: true,
      shape: "sphere",
      zoom: 1.1,
      wheelZoom: false,
      noSelect: true,
      textFont: "Arial",
      freezeDecel: true,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 1.1,
    };
    try {
      TagCanvas.Start("tagcanvas", "taglist", tagCanvasOptions);
    } catch (e) {
      console.log("Canvas error.");
      console.log(e);
    }
  }, []);

  const listStyle = {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "800",
    fontSize: "3rem",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="container"
    >
      <canvas
        id="tagcanvas"
        width="820"
        height="600"
        style={{
          maxWidth: "1000px",
          width: "100%",
          zIndex: "99",
          position: "relative",
          margin: "5% auto",
        }}
        className="to-fade-in fast-anim"
      ></canvas>
      <div id="taglist" style={{ display: "none" }}>
        <ul>
          {skills.map((skill) => (
            <li style={listStyle} key={skill.title}>
              <a href={skill.href}>{skill.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Skills;
