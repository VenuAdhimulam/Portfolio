import { useEffect } from "react";
import Home from "./components/Home";
import Slider from "./components/Slider";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Education from "./components/Education";
import { Routes,  Route} from 'react-router-dom';
import ReactGA from "react-ga";

// const TRACKING_ID = "G-VHR359L5D4";

ReactGA.initialize("G-JBHCC9MKGW");

const App = () => {

  useEffect(() => {
    //non - interation event
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <>
      <Home />
      <Routes>
        <Route  path="/home" element={ <Slider/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/experience" element={<Experience/>} />
        <Route  path="/education" element={<Education/>} />
        <Route  path="/certication" element={<Certifications/>} />
        {/* <Route path="/contact" component={<About/>} /> */}
        {/* Test */}
      </Routes>
    </>
  );
};

export default App;
