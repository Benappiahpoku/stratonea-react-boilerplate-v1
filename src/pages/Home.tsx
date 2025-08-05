/*
  Home.tsx
  Stratonea Excalidraw App - Home Page

  This is the main landing page for the app.
  - Demonstrates a minimal, mobile-first React component.
  - Uses Tailwind CSS utility classes directly in JSX for styling.
  - All code is fully commented for learning and maintainability.
  - Follows Stratonea coding guidelines for Ghanaian mobile-first projects.
*/

import React from "react";

// ===== Main Home Component =====

/**
 * Home
 * Minimal hello world page for Stratonea Excalidraw App.
 * - Mobile-first layout
 * - Clear, accessible markup
 * - All styling via Tailwind utility classes
 */
const Home: React.FC = () => {
  return (
    <main
      className="
        flex flex-col items-center justify-center
        min-h-screen bg-gray-50
        px-4 py-8
      "
    >
      {/* App Title */}
      <h1 className="text-2xl font-bold text-primary mb-4">
        Hello, World!
      </h1>

      {/* Welcome Message */}
      <p className="text-base text-gray-700 text-center max-w-xs">
        Welcome to the Stratonea Excalidraw App.
        <br />
        This page is optimized for Ghanaian mobile users.
      </p>
    </main>
  );
};

export default Home;

/*
  All styling is handled with Tailwind CSS utility classes for clarity and mobile-first workflow.
  - Use <Home /> in your router or main layout to display this page.
*/