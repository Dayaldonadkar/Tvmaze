import React from "react";
import Data from "./Components/Data";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Moviedetails from "./Components/Moviedetails";
import Show from "./Components/Show";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Show />
        <Routes>
          <Route path="/" element={<Data />} />
          <Route path="/movie/:id" element={<Moviedetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
