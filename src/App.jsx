import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/home";
import PickList from "./pages/pick-list/list-item";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="pick-list" element={<PickList />} />
          {/* <Route path="picked-music" element={<PickedMusic />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
