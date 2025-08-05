/*
  App.tsx
  Stratonea Excalidraw App - Main Application Entry

  This file is the root React component for the application.
  - Sets up React Router for multi-page navigation.
  - Uses a layout system (MainLayout) with <Outlet /> for nested routes.
  - Follows Stratonea coding guidelines: mobile-first, clear structure, and full comments.
  - All styling is handled via Tailwind CSS utility classes.
*/

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";


/**
 * App
 * Root component for the Stratonea Excalidraw App.
 * - Sets up routing and layout for the app.
 * - Designed for mobile-first Ghanaian users.
 */
const App: React.FC = () => {
  return (
    // <!-- Main app container -->
    <div className="min-h-screen bg-gray-50">
      {/* 
      
        - BrowserRouter enables client-side routing.
        - MainLayout provides a consistent header and structure.
        - <Outlet /> in MainLayout will render the active page.
      */}

      <BrowserRouter>
        <Routes>
          {/* All main routes go here, wrapped in MainLayout */}
          <Route element={<MainLayout />}>
            {/* Home page route */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes here as your app grows */}
          </Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
};

export default App;

/*
  To extend this app, add new routes inside <Routes> and create new page components.
  All new pages should follow Stratonea's mobile-first and offline-first guidelines.
*/