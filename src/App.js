
import Navabr from "./components/Navbar";
import HorizontalSlider from "./components/commodities/HorizontalSlider";
import Slider from './components/sliders/Slider';
import Sliders from './components/sliders/Sliders';

import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import ViweProduct from "./components/commodities/ViweProduct";
import { useEffect } from "react";
import { sliderData } from './components/sliders/sliderData';
import { Card, Container, Grid } from '@material-ui/core';

function App() {


  return (
    <div>
      <Navabr className="navAnimation" />
      <Routes>
        <Route path="/" element={ <Navigate to="/shop" /> } />
        <Route path="/shop" element={
          <>
            <Sliders />
            < HorizontalSlider />
            <HorizontalSlider />
            <HorizontalSlider />
            <HorizontalSlider />
          </> } />
        {/* <Route path="/shop" element={ <ViweProduct /> } /> */ }

        {/* <Route path="/shop/commodity/:id" element={<ViewPost>} /> */ }

      </Routes>




    </div>
  );
}

export default App;
