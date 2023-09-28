import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import About from "./Pages/About";
import SERVICES from "./Pages/SERVICES";
import REVIEWS from "./Pages/REVIEWS";
import Doctor from "./Pages/Doctor";
import Contacts from "./Pages/Contacts";

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<SERVICES />} />
          <Route path="/reviews" element={<REVIEWS />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
