import React, { useState } from "react";
import HomePage from "./HomePage";
import HistoryPage from "./HistoryPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  const [transitions, setTransition] = useState([]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage transitions={transitions} setTransition={setTransition} />
          }
        />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
