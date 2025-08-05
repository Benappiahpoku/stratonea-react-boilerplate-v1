/*
  AppHeader.tsx
  Stratonea App Header with Responsive Navigation

  - Stratonea logo (left), app name (center), navigation (right)
  - Mobile-first: hamburger menu on mobile, inline links on desktop/tablet
  - Uses React Router <Link> for navigation
  - Highlights active route
  - Fully documented for learning
*/

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StratoneaLogo from "../base/StratoneaLogo";

// ===== Types & Interfaces =====
interface AppHeaderProps {
  appName: string;
}

// ===== Main Logic =====
const AppHeader: React.FC<AppHeaderProps> = ({ appName }) => {
  // State for mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  // Get current route for active link highlighting
  const location = useLocation();

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  // Helper: check if a route is active
  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== "/" && location.pathname.startsWith(path));

  return (
    <header className="relative flex items-center justify-center px-4 py-3 bg-primary text-white shadow-md">
      {/* Logo (left) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <StratoneaLogo white />
      </div>

      {/* App Name (center) */}
      <span className="text-lg font-bold tracking-wide mx-auto">
        {appName}
      </span>

      {/* Desktop/Tablet Navigation (right) */}
      <nav className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 gap-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-3 py-2 rounded stratonea-nav-link transition-colors ${
              isActive(item.path)
                ? "bg-white text-primary font-bold"
                : "hover:bg-primary-dark hover:text-white"
            }`}
            aria-current={isActive(item.path) ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger Menu (right) */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden">
        <button
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {/* Hamburger icon */}
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-primary rounded shadow-lg z-50">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 border-b last:border-b-0 border-primary-100 ${
                  isActive(item.path)
                    ? "bg-primary-100 font-bold"
                    : "hover:bg-primary-50"
                }`}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;

/*
  Usage:
    import AppHeader from "@/components/common/AppHeader";
    <AppHeader appName="Stratonea BoilerPlate" />

  - Navigation is mobile-first and accessible.
  - Active route is visually highlighted.
  - Hamburger menu appears on mobile, inline links on desktop/tablet.
  - All styling uses Tailwind CSS utility classes.
*/