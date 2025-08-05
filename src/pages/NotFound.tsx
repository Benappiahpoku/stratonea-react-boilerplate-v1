/*
  NotFound.tsx
  Stratonea App 404 Not Found Page (React/TypeScript)

  - Displays a clear, mobile-first 404 error message.
  - Provides a button to navigate back to the Home page.
  - Uses Tailwind CSS utility classes for styling.
  - Follows Stratonea guidelines: simple English, clear recovery, accessible touch targets.
*/

import React from "react";
import { Link } from "react-router-dom";

// ===== Main Logic =====
/**
 * NotFound
 * - Renders a user-friendly 404 page with a Home navigation button.
 */
const NotFound: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center bg-white">
      {/* 404 Title */}
      <h1 className="text-4xl font-bold text-primary-700 mb-2">404</h1>
      {/* Simple English message */}
      <p className="text-lg text-gray-700 mb-6">
        Sorry, we couldn't find that page.
      </p>
      {/* Go Home button */}
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-primary text-white rounded stratonea font-semibold text-base min-w-[120px] shadow hover:bg-primary-700 transition-colors"
        style={{ minHeight: "48px" }}
      >
        Go to Home
      </Link>
    </main>
  );
};

export default NotFound;

/*
  Usage:
    Add <Route path="*" element={<NotFound />} /> to your router.

  - All styling uses Tailwind CSS utility classes for mobile-first workflow.
  - Button is touch-optimized and accessible.
  - Message is clear and actionable for Ghanaian users.
  */