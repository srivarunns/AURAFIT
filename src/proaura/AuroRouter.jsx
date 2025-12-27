import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import LandingPage from './LandingPage';
import OutfitForm from './OutfitForm';
import OutfitOutput from './OutfitOutput';
import About from './About';
import Contact from './Contact';
import Favorites from './Favorites';

function AuroRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="form" element={<OutfitForm />} />
          <Route path="output" element={<OutfitOutput />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>

        <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default AuroRouter;
