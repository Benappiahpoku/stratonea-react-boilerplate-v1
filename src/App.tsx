/*
  App.tsx
  Stratonea Excalidraw App - Main Application Entry

  This file is the root React component for the application.
  - Imports and renders the Home page as the main content.
  - Follows Stratonea coding guidelines: mobile-first, clear structure, and full comments.
  - All styling is handled via Tailwind CSS utility classes in the Home component.
*/

import React from "react";
// <!-- ===== [New Feature] START: Import Home page component ===== -->
import Home from "./pages/Home";
// <!-- ===== [New Feature] END ===== -->

/**
 * App
 * Root component for the Stratonea Excalidraw App.
 * - Renders the Home page as the main content.
 * - Designed for mobile-first Ghanaian users.
 */
const App: React.FC = () => {
  return (
    // <!-- Main app container -->
    <div className="min-h-screen bg-gray-50">
      {/* Render the Home page */}
      <Home />
    </div>
  );
};

export default App;

/*
  To extend this app, add routing and additional pages as needed.
  All new pages should follow Stratonea's mobile-first and offline-first guidelines.
*/