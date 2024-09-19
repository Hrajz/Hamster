
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AirdropPage from "./components/AirdropPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/airdrop" element={<AirdropPage />} />
      </Routes>
    </Router>
  );
};

export default App;
