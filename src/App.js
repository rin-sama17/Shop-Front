
import Navabr from "./components/Navbar";
import HorizontalSlider from "./components/commodities/HorizontalSlider";
import Slider from './components/sliders/Slider';
import "./App.css";
import { Navigate, Route, Routes } from "react-router";

function App() {

  return (<div className="main">
    <Navabr />

    <Routes>
      <Route path="/" element={ <Navigate to="/shop" /> } />
      <Route path="/shop" element={
        <>
          <Slider />
          < HorizontalSlider />
          <HorizontalSlider />
          <HorizontalSlider />
          <HorizontalSlider />
        </> } />
      {/* <Route path="/shop/commodity/:id" element={<ViewPost>} /> */ }

    </Routes>



  </div>
  );
}

export default App;
