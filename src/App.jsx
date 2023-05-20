import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import useWindowSize from "./useWindowSize";

const App = () => {
  const { width } = useWindowSize();
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-0">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <About />
          {width > 600 && <StarsCanvas />}
        </div>
        <div className="relative z-0">
          <Experience />
          {width > 600 && <StarsCanvas />}
        </div>
        <div className="relative z-0">
          <Tech />
          {width > 600 && <StarsCanvas />}
        </div>
        <div className="relative z-0">
          <Works />
          {width > 600 && <StarsCanvas />}
        </div>
        <div className="relative z-0">
          <Feedbacks />
          {width > 600 && <StarsCanvas />}
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
