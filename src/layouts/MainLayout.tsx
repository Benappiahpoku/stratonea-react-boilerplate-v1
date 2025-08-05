/*
  MainLayout.tsx
  Stratonea Excalidraw App - Main Layout Component

  - Provides a consistent header and structure for all pages.
  - Uses <Outlet /> to render the active route/page.
  - Follows Stratonea coding guidelines: mobile-first, clear structure, and full comments.
  - All styling is handled via Tailwind CSS utility classes.
*/

import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/base/Footer";

import AppHeader from "../components/base/AppHeader";



// ===== [New Feature] END =====

/**
 * MainLayout
 * - Wraps all pages with a consistent header and responsive container.
 * - <Outlet /> renders the active route/page.
 */
const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* App header (always visible) */}

      <AppHeader appName="Stratonea BoilerPlate" />

      {/* Main content area: renders the current page */}
      <main className="flex-1 w-full max-w-md mx-auto p-4">
        <Outlet />
      </main>

      
      <Footer />
   
    </div>
  );
};

export default MainLayout;

/*
  To extend this layout, add navigation or offline indicators above <Outlet />.
  All pages rendered here should follow Stratonea's mobile-first and offline-first guidelines.
*/