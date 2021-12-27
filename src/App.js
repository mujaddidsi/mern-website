import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'assets/scss/style.scss';
import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route exact path="/properties/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
