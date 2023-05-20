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

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-0">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <About />
        </div>
        <div className="relative z-0">
          <Experience />
        </div>
        <div className="relative z-0">
          <Tech />
        </div>
        <div className="relative z-0">
          <Works />
        </div>
        <div className="relative z-0">
          <Feedbacks />
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
