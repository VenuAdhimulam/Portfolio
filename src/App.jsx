import Home from "./pages/Home";
import Slider from "./components/Slider";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Education from "./components/Education";
import { Routes,  Route} from 'react-router-dom';

const App = () => {
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
      </Routes>
    </>
  );
};

export default App;
