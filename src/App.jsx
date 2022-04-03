import React from "react";
import HomePage from "./HomePage";
import HistoryPage from "./HistoryPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
