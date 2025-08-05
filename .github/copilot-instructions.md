# **Stratonea Development Guidelines**

Version: 1.0.0
Last Updated: 12 May 2025

This document outlines the development standards for Stratonea projects, with special consideration for Ghana-specific requirements: mobile-first design, offline functionality, and simplified user interfaces.

## Quick Reference

- **Network Performance Targets**:
  - First Contentful Paint (FCP): < 2s on 3G
  - Time to Interactive (TTI): < 5s on 3G
  - Bundle Size: < 300KB (initial load)
- **Touch Targets**: Minimum 48×48px
- **Offline Support**: Required for all critical features
- **Error Messages**: Must be in simple English, with clear recovery steps
- **WhatsApp Integration**: Required for sharing features

## Quick Start

- Clone repository and run `npm install`
- Start development server with `npm run dev`
- Build for production with `npm run build`
- Test your Ghana-specific optimizations with Chrome DevTools network throttling preset "Slow 3G"

## Development Workflow Guidelines

- Always initiate development with the front-end components before working on the back-end.
- Prioritize creating user interfaces and client-side logic first.
- Ensure front-end features are fully implemented and tested before proceeding to back-end development.

## Github Co-pilot Mentorship Role

You are the Stratonea senior Software Engineer/Developer mentoring a junior developer (me -> Benjamin). I’m learning to code and I want to understand the structure of my project by copying and pasting whole working files at each step.

1. My goal is to learn slowly, step by step. Here’s how I want us to work:
2. Guide me one file at a time. For every step:
   - Tell me clearly which file to edit.
   - Show me the entire updated version of the file, not just code snippets or lines to insert.
   - Include code comments to explain what each section does.
   - Make sure each file you give me can be copy-pasted wholesale and will still work. When editing existing code, use comments to clearly mark the changes you made ( <!-- ===== [New Feature] START ===== -->)
3. Avoid rushing. Think of this like a teaching session. Only move to the next file after you’ve fully explained the current one and confirmed that it works.
4. Write the code as if the guy who ends up maintaining your code will be a violent psychopath who know where you live.
5. Do you understand?

## Table of Contents

1. [Development Workflow]
2. [Ghana-Specific Considerations]
3. [Code Documentation Guidelines]
4. [Code Writing Standards]
5. [TypeScript Best Practices]
6. [Vue 3 Best Practices]
7. [Tailwind CSS Best Practices]
8. [Vite Best Practices]
9. [Offline First Strategy]
10. [WhatsApp Integration]
11. [Optimized Asset Loading]
12. [Regional Integration]
13. [Performance Benchmarks]
14. [Testing Guidelines]
15. [SEO Best Practices]
16. [Integration Tips]
17. [Communication Guidelines]

## Development Workflow

1. **Design-First Approach** _(Required)_

   - Begin with UI/UX design before implementing functionality
   - Get stakeholder approval on design mockups before proceeding to implementation
   - Focus on mobile designs first (primary use case for Ghanaian users)

2. **Frontend Implementation** _(Required)_

   - Build UI components with mock/static data
   - Ensure responsive design with mobile as the primary target
   - Test on actual mobile devices (Android preferred)

3. **Backend Integration** _(Required)_
   - Implement API calls and business logic after UI approval
   - Ensure offline fallbacks for critical functionality
   - Optimize for low bandwidth and intermittent connectivity

## Implementation Checklists

Use these checklists to ensure compliance with Ghana-specific requirements at each development stage.

### Feature Planning Checklist

- [ ] Identified primary user needs for Ghanaian context
- [ ] Prioritized essential features for low-bandwidth scenarios
- [ ] Considered offline functionality requirements
- [ ] Included error states for connectivity issues
- [ ] Planned for data synchronization after reconnection

### UX/UI Design Checklist

- [ ] Created mobile designs before desktop (mobile-first approach)
- [ ] Used adequate touch target sizes (minimum 48×48px)
- [ ] Simplified UI for essential tasks (3 steps or fewer)
- [ ] Provided clear visual feedback for all actions
- [ ] Designed offline states for all key interfaces
- [ ] Used connectivity-appropriate imagery (optimized file sizes)
- [ ] Tested color contrast for outdoor visibility (common in Ghana)

### Development Checklist

- [ ] Implemented offline-first data architecture
- [ ] Set up client-side data caching
- [ ] Added graceful connectivity transitions
- [ ] Minimized initial bundle size (<300KB total)
- [ ] Implemented lazy loading for non-critical resources
- [ ] Added appropriate loading states
- [ ] Created fallbacks for unavailable API endpoints
- [ ] Tested on low-end devices (or throttled environments)

### Definition of Done

A feature is considered complete when:

1. It works in offline mode with appropriate fallbacks
2. It syncs data correctly when connectivity is restored
3. It loads within performance benchmarks on 3G connections
4. It renders correctly on various Android devices (6.0+)
5. It has appropriate error states for connectivity failures
6. All text is clear, concise, and appropriate for varying digital literacy levels
7. It passes automated tests including offline scenarios

## Ghana-Specific Considerations

- **Mobile-First**: Target Android mobile devices as primary platform (Android 6.0+)
- **Offline Support**: Many users have intermittent connectivity
- **Performance**: Optimize for low-bandwidth conditions (2G/3G networks common)
- **Simplicity**: Design for users with varying levels of digital literacy
- **WhatsApp Integration**: Include sharing capabilities where relevant
- **Touch-Optimized**: Design large touch targets (minimum 48x48px)

## TypeScript Best Practices _(Required)_

TypeScript provides strong typing and enhanced developer experience, which is particularly valuable when building complex applications for Ghanaian users where reliability is crucial due to connectivity challenges.

## Stratonea Tailwind Usage Instruction

Always use Tailwind CSS utility classes directly in the JSX markup for component styling. Do not use `@apply` inside CSS files unless absolutely necessary. For most cases, prefer utility classes in the JSX for clarity, maintainability, and mobile-first workflow.

## Routing & Layout System

This project uses React Router with a layout system. All main routes are defined in App.tsx and rendered as children of a layout component (e.g., MainLayout.tsx). Each layout must include an `<Outlet />` to display the active page from components. Use this structure for all new pages and navigation.

## Stratonea App Header Guideline

For every new app, always use the following header pattern:

- **Left:** Stratonea logo (SVG or image)
- **Right:** App name (text, bold, clear, and accessible)

**Example React/Tailwind Markup:**

```tsx
import React from "react";

interface HeaderProps {
  appName: string;
}

const AppHeader: React.FC<HeaderProps> = ({ appName }) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-primary text-white shadow-md">
      {/* Stratonea Logo on the left */}
      <img
        src="/assets/stratonea-logo.svg"
        alt="Stratonea Logo"
        className="h-8 w-auto"
      />
      {/* App Name on the right */}
      <span className="text-lg font-bold tracking-wide">{appName}</span>
    </header>
  );
};

export default AppHeader;
```

**Usage:**

```tsx
// In your main component
<AppHeader appName="Ghana Weather App" />
```

**Guidelines:**

- The logo should always be on the left, sized for mobile (min 32px, max 48px height).
- The app name should be on the right, bold, and easy to read.
- Use Tailwind utility classes for spacing, color, and responsiveness.
- Ensure header is accessible (alt text, sufficient contrast).

# Coding Protocol

## Core Principles

- **Minimal Code**: Write only the absolute minimum code required to accomplish the task
- **Focused Changes**: Make precise edits related only to the current task
- **No Scope Creep**: Avoid unrelated changes or sweeping modifications
- **Code Quality**:
  - Make code modular and testable
  - Keep functions small and focused
  - Use clear naming conventions
  - Add necessary comments
- **Preserve Functionality**: Don't break existing working code
- **Clear Instructions**: Explicitly state any required:
  - Configuration steps
  - Environment setup
  - Dependencies
  - External service setup (e.g. Supabase, Vercel, Firebase, AWS)

## Implementation Guide

```typescript
// Example of minimal, focused change
function updateUser(id: string, data: Partial<User>): Promise<void> {
  // Only update specified fields
  return db.users.update(id, data);
}

// NOT THIS - too broad, unrelated changes
function updateUser(id: string, data: User): Promise<void> {
  // Unrelated logging change
  setupLogging();
  // Unrelated schema changes
  validateSchema();
  // Too many responsibilities
  return db.users.update(id, {
    ...data,
    updatedAt: new Date(),
    // Unrelated field additions
    newField: "value",
  });
}
```

## Change Request Format

```markdown
Task: [Brief description]
Changes:

- File: path/to/file
- Purpose: [What this change accomplishes]
- Dependencies: [Any required setup/config]
```

### 1. **Strict TypeScript Configuration**

Use strict mode in `tsconfig.json` to catch potential issues early:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "useUnknownInCatchVariables": true,
    "alwaysStrict": true
  }
}
```

### 2. **Type-First Development**

Always define types before implementing functionality:

```typescript
// First define your types
interface UserData {
  id: string;
  name: string;
  phoneNumber: string; // Required for Ghana mobile-first approach
  email?: string; // Optional as not all users have email
  region: string;
  offlineAccess: boolean;
}

// Then implement your functions with proper typing
function syncUserData(user: UserData): Promise<void> {
  // Implementation follows type definition
}
```

### 3. **Network-Aware Type Definitions**

Create types that account for offline/online states:

```typescript
type ConnectionState = "online" | "offline" | "poor-connection";
type SyncStatus = "pending" | "synced" | "failed";

interface NetworkAwareData<T> {
  data: T;
  lastSynced: number;
  connectionState: ConnectionState;
  syncStatus: SyncStatus;
  pendingChanges: boolean;
}
```

### 4. **Error Handling Types**

Define comprehensive error types for better error handling:

```typescript
interface AppError extends Error {
  code: string;
  isOfflineError?: boolean;
  retryable?: boolean;
  userMessage: string; // Localized message for users
}

// Custom error for network issues
class NetworkError extends Error implements AppError {
  code: string;
  isOfflineError: boolean;
  userMessage: string;

  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
    this.code = "NETWORK_ERROR";
    this.isOfflineError = true;
    this.userMessage =
      "Connection failed. Your changes will sync when you're back online.";
  }
}
```

### 5. **React Component Types**

Use proper typing for React components and props:

```typescript
import React from "react";

// Define prop interfaces
interface UserProps {
  name: string;
  role: "admin" | "user";
  lastActive: Date;
}

interface UserCardProps {
  user: UserProps;
  isOffline?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ user, isOffline = false }) => {
  // TypeScript knows the types of props
  const userDisplayName = React.useMemo(
    () => user.name.toUpperCase(),
    [user.name]
  );

  return (
    <div className="user-card">
      <h3>{userDisplayName}</h3>
      {isOffline && <span className="offline-indicator">Offline</span>}
    </div>
  );
};

export default UserCard;
```

### 6. **Type Utils for Common Patterns**

Create utility types for common patterns:

```typescript
// Make specific properties optional
type PartialNetworkData<T> = Omit<T, "id"> & { id?: string };

// Ensure all properties can handle offline state
type OfflineAware<T> = {
  [P in keyof T]: {
    value: T[P];
    synced: boolean;
    lastModified: number;
  };
};

// Type guard for network state
function isOnline(state: ConnectionState): state is "online" {
  return state === "online";
}
```

## React Best Practices _(Required)_

When developing with React, follow these best practices to ensure optimal performance and maintainability, especially for Ghanaian users with varying network conditions.

### 1. **Functional Components with TypeScript**

Use functional components with TypeScript for better type safety and code organization:

```tsx
import React, { useState, useEffect, useMemo } from "react";

// Define props with types
interface Props {
  userName: string;
  isOffline?: boolean;
}

const UserProfile: React.FC<Props> = ({ userName, isOffline = false }) => {
  // Type-safe state
  const [networkStatus, setNetworkStatus] = useState<"online" | "offline">(
    "online"
  );
  const [syncStatus, setSyncStatus] = useState<"pending" | "complete">(
    "complete"
  );

  // Memoized computed values
  const statusMessage = useMemo(
    () =>
      networkStatus === "offline"
        ? "Working offline - changes will sync when online"
        : "Connected",
    [networkStatus]
  );

  // Effects with proper cleanup
  useEffect(() => {
    const handleOnline = () => setNetworkStatus("online");
    const handleOffline = () => setNetworkStatus("offline");

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Event handlers with proper typing
  const handleSync = (): void => {
    if (networkStatus === "online") {
      setSyncStatus("pending");
      // Trigger sync logic
    }
  };

  return (
    <div className="user-profile">
      <h2>{userName}</h2>
      <p>{statusMessage}</p>
      <button onClick={handleSync} disabled={networkStatus === "offline"}>
        Sync Data
      </button>
    </div>
  );
};

export default UserProfile;
```

### 2. Copilot Code Generation Example for Minimal React Component

```tsx
/*
  DatePicker.tsx
  Minimal, mobile-first date picker for income entry.
  - Uses native input for best mobile/offline UX.
  - All props have safe defaults (always string, never undefined).
  - Clear comments for learning.
*/

import React from "react";

// ===== Types & Interfaces =====
/**
 * Props for DatePicker
 * - value: string (YYYY-MM-DD)
 * - label: string (field label)
 * - error: string (optional error message)
 * - minDate, maxDate: string (YYYY-MM-DD, optional)
 * - id: string (for accessibility, always required)
 * - onChange: function to handle value changes
 */
interface DatePickerProps {
  value: string;
  label?: string;
  error?: string;
  minDate?: string;
  maxDate?: string;
  id?: string;
  onChange: (value: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  label = "Date",
  error = "",
  minDate = "",
  maxDate = "",
  id = "date-picker",
  onChange,
}) => {
  // ===== Main Logic =====
  /**
   * Handles input changes and emits the new date value to the parent component.
   */
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col gap-1">
      {/* Label for accessibility */}
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {/* Native date input for mobile/offline */}
      <input
        id={id}
        type="date"
        value={value}
        onChange={handleInputChange}
        className="block w-full px-3 py-3 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 text-base bg-white shadow-sm"
        max={maxDate || undefined}
        min={minDate || undefined}
        aria-label={label}
        required
      />
      {/* Show error if provided */}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default DatePicker;

/*
  All styling via Tailwind utility classes for maintainability and mobile-first workflow.
*/
```

### 2. **Performance Optimizations**

Implement performance optimizations for low-bandwidth conditions:

```tsx
import React, { Suspense, lazy, useMemo } from "react";

// Lazy load heavy components
const HeavyDataGrid = lazy(() => import("./HeavyDataGrid"));

interface DataDisplayProps {
  items: Item[];
  isLoading: boolean;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ items, isLoading }) => {
  // Implement virtual scrolling for long lists
  const visibleItems = useMemo(() => {
    const startIndex = 0; // Calculate based on scroll position
    const endIndex = 50; // Calculate based on viewport
    return items.slice(startIndex, endIndex);
  }, [items]);

  return (
    <div className="data-display">
      {/* Show/hide loading spinner */}
      {isLoading && <div className="loading-spinner" />}

      {/* Lazy load heavy components */}
      <Suspense
        fallback={<div className="lightweight-placeholder">Loading...</div>}
      >
        <HeavyDataGrid items={visibleItems} />
      </Suspense>
    </div>
  );
};

export default DataDisplay;
```

### 3. **Offline-First Components**

Design components with offline functionality in mind:

```tsx
import React, { useState, useEffect } from "react";
import { useNetworkStatus } from "../hooks/useNetworkStatus";
import { useOfflineStorage } from "../hooks/useOfflineStorage";

interface FormData {
  name: string;
  email: string;
}

interface OfflineFormProps {
  allowOffline?: boolean;
}

const OfflineForm: React.FC<OfflineFormProps> = ({ allowOffline = true }) => {
  const { isOnline, connectionQuality } = useNetworkStatus();
  const { saveOffline, syncWhenOnline } = useOfflineStorage();
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });

  // Handle form submissions with offline support
  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    try {
      if (isOnline) {
        await submitToServer(formData);
      } else {
        await saveOffline(formData);
        showToast("Saved offline. Will sync when connected.");
      }
    } catch (error) {
      handleError(error);
    }
  };

  const submitToServer = async (data: FormData): Promise<void> => {
    // API call implementation
  };

  const handleError = (error: Error): void => {
    console.error("Form submission error:", error);
  };

  const showToast = (message: string): void => {
    // Toast notification implementation
  };

  return (
    <div className="form-container">
      {!isOnline && <div className="offline-indicator">Working Offline</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Name"
          className="form-input"
        />
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
          className="form-input"
        />
        <button
          type="submit"
          disabled={!isOnline && !allowOffline}
          className="submit-button"
        >
          {isOnline ? "Submit" : "Save Offline"}
        </button>
      </form>
    </div>
  );
};

export default OfflineForm;
```

### 4. **State Management**

Use custom hooks for shared state and logic:

```typescript
// useNetworkAwareState.ts
import { useState, useEffect, useCallback } from "react";

interface NetworkAwareState<T> {
  data: T;
  isSyncing: boolean;
  lastSynced: number | null;
  sync: () => Promise<void>;
}

export function useNetworkAwareState<T>(
  key: string,
  initialState: T
): NetworkAwareState<T> {
  const [data, setData] = useState<T>(initialState);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState<number | null>(null);

  const syncWithServer = useCallback(async (): Promise<void> => {
    setIsSyncing(true);
    try {
      // Sync logic here
      const serverData = await fetchFromServer(key);
      setData(serverData);
      setLastSynced(Date.now());
    } catch (error) {
      console.error("Sync failed:", error);
    } finally {
      setIsSyncing(false);
    }
  }, [key]);

  useEffect(() => {
    // Load from local storage first
    const cached = localStorage.getItem(key);
    if (cached) {
      setData(JSON.parse(cached));
    }

    // Then sync with server if online
    if (navigator.onLine) {
      syncWithServer();
    }
  }, [key, syncWithServer]);

  // Watch for online status changes
  useEffect(() => {
    const handleOnline = () => syncWithServer();

    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, [syncWithServer]);

  return {
    data,
    isSyncing,
    lastSynced,
    sync: syncWithServer,
  };
}

const fetchFromServer = async (key: string): Promise<any> => {
  // Implementation here
  return {};
};
```

### 5. **Error Boundaries**

Implement error boundaries for graceful failure handling:

```tsx
import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log error to monitoring service
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleRetry = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <OfflineAwareErrorDisplay
            error={this.state.error}
            onRetry={this.handleRetry}
          />
        )
      );
    }

    return this.props.children;
  }
}

interface ErrorDisplayProps {
  error: Error | null;
  onRetry: () => void;
}

const OfflineAwareErrorDisplay: React.FC<ErrorDisplayProps> = ({
  error,
  onRetry,
}) => {
  return (
    <div className="error-display">
      <h2>Something went wrong</h2>
      <p>{error?.message || "An unexpected error occurred"}</p>
      <button onClick={onRetry} className="retry-button">
        Try Again
      </button>
    </div>
  );
};

export default ErrorBoundary;
```

### 6. **Mobile-First Components**

Design components with mobile-first principles:

```tsx
import React, { useMemo } from "react";
import { useBreakpoints } from "../hooks/useBreakpoints";

interface ResponsiveCardProps {
  items: Array<{ id: string; title: string; content: string }>;
}

const ResponsiveCard: React.FC<ResponsiveCardProps> = ({ items }) => {
  const { isMobile } = useBreakpoints();

  // Adapt behavior based on device
  const touchTargetSize = useMemo(() => (isMobile ? 48 : 32), [isMobile]);

  const cardClasses = useMemo(
    () =>
      [
        "p-4",
        "min-h-[48px]", // Mobile-friendly touch targets
        "transition-transform",
        "active:scale-98", // Touch feedback
        "cursor-pointer",
      ].join(" "),
    []
  );

  return (
    <div className="responsive-container">
      {/* Mobile-first design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={cardClasses}
            style={{ minHeight: `${touchTargetSize}px` }}
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCard;
```

### 7. **Performance Monitoring**

Implement performance monitoring specific to Ghanaian users:

```typescript
// usePerformanceMonitoring.ts
import { useEffect } from "react";

interface NetworkConnection extends EventTarget {
  effectiveType: string;
  downlink: number;
  rtt: number;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkConnection;
}

interface WebVitalMetric {
  name: string;
  value: number;
}

export function usePerformanceMonitoring(): void {
  useEffect(() => {
    const navigator = window.navigator as NavigatorWithConnection;

    if (navigator.connection) {
      const connection = navigator.connection;

      // Monitor network quality
      const handleConnectionChange = (): void => {
        logNetworkMetrics({
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
        });
      };

      connection.addEventListener("change", handleConnectionChange);

      return () => {
        connection.removeEventListener("change", handleConnectionChange);
      };
    }
  }, []);

  useEffect(() => {
    // Monitor Core Web Vitals
    if ("web-vital" in window) {
      const reportWebVitals = (metric: WebVitalMetric): void => {
        if (metric.name === "LCP" && metric.value > 2500) {
          // Alert if Load performance is poor
          notifyPoorPerformance(metric);
        }
      };

      // Implementation would depend on your web vitals library
      // Example: getCLS(reportWebVitals), getFID(reportWebVitals), etc.
    }
  }, []);
}

const logNetworkMetrics = (metrics: {
  effectiveType: string;
  downlink: number;
  rtt: number;
}): void => {
  console.log("Network metrics:", metrics);
  // Send to analytics service
};

const notifyPoorPerformance = (metric: WebVitalMetric): void => {
  console.warn("Poor performance detected:", metric);
  // Notify user or adjust app behavior
};
```

## Tailwind CSS Best Practices

Use **content scanning** to remove unused utilities in production builds—configure `content` in `tailwind.config.js` to point at all your `.vue`, `.js`, and `.html` files

```javascript
// filepath: tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // Rest of configuration
};
```

### Color System & Branding

Maintain a **centralized design system** via `tailwind.config.js`: extend colors, spacing, and breakpoints there rather than scattering custom CSS

```javascript
// filepath: tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Stratonea brand colors
        primary: {
          DEFAULT: "#1F3A8A", // Primary blue
          light: "#3651A5",
          dark: "#152970",
          hover: "#18307A",
        },
        secondary: {
          DEFAULT: "#3B81F6", // Secondary blue
          light: "#5C97F8",
          dark: "#2A6BD7",
          hover: "#2A70E5",
        },
        // Standard gray scale
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      // Touch-optimized sizes for Ghanaian mobile users
      spacing: {
        "touch-min": "3rem", // 48px - minimum touch target
        "touch-safe": "4rem", // 64px - comfortable touch area
      },
      borderRadius: {
        stratonea: "0.375rem", // Consistent border-radius
      },
    },
  },
};
```

Apply a **mobile-first methodology** using Tailwind's default responsive prefixes (`sm:`, `md:`, etc.) to ensure a consistent responsive workflow:

```html
<!-- Mobile-first card optimized for Ghanaian mobile users -->
<div
  class="
  w-full              <!-- Full width on small phones (default) -->
  sm:w-1/2 sm:mx-auto <!-- Half width centered on larger phones -->
  md:w-1/3            <!-- Even smaller on tablets and above -->
  p-4                 <!-- Comfortable padding for touch targets -->
  rounded-lg shadow-md
  bg-white
"
>
  <!-- Content here -->
</div>
```

Avoid **utility overload**: group utilities logically (e.g., use `my-4` instead of `mt-4 mb-4`), and extract repeated combinations into `@apply`-based components for readability

Use **semantic component classes** sparingly for very complex patterns, but prefer utility classes in markup to keep styling close to structure

### Ghana-Specific Optimizations

Design for **low-bandwidth conditions** by prioritizing critical content:

```css
@layer components {
  /* Data-saving image styles */
  .img-low-data {
    @apply filter blur-[2px] brightness-90 scale-[0.98];
  }

  /* Enhanced touch targets for mobile users */
  .btn-touch {
    @apply min-h-[3rem] min-w-[3rem] flex items-center justify-center;
  }

  /* Offline indicator - important for users with intermittent connectivity */
  .offline-alert {
    @apply bg-orange-500 text-white px-4 py-2 text-center font-medium;
  }
}
```

## Vite Best Practices

Keep your **development environment lean**: limit the number of plugins to only those you need. Excessive plugins can slow down hot-module replacement (HMR) and cold starts

Use **Incognito mode** (or a dev-only browser profile) when working with Vite's dev server to avoid extension interference and speed up reloads

Organize your `vite.config.js` clearly: group plugin imports, define path aliases (e.g., `@/` for `src/`), and externalize environment variables with `.env` files

```typescript
// Example optimized vite.config.ts for Ghanaian user context (Vite 6.x)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    // Optimize chunk size for low-bandwidth connections
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Group frequently used libraries together to improve caching
          "react-core": ["react", "react-dom", "react-router-dom"],
          utils: ["axios"],
        },
      },
    },
    // Target modern browsers but maintain compatibility with Android 6+
    target: ["es2018", "chrome61"],
  },
  // Optimize dev server for slower connections
  server: {
    // Strict file serving for security
    fs: {
      strict: true,
    },
    // Enable compression for smaller payloads
    headers: {
      "Cache-Control": "no-store",
    },
    // Improve performance for development
    hmr: {
      overlay: false, // Less UI updates for slower connections
    },
  },
});
```

### Optimizing for Ghana's Connectivity Challenges

1. **Asset Optimization**

   - Use the `vite-plugin-imagemin` to compress images by default:

   ```javascript
   import imagemin from "vite-plugin-imagemin";

   export default defineConfig({
     plugins: [
       vue(),
       imagemin({
         gifsicle: { optimizationLevel: 7, interlaced: false },
         optipng: { optimizationLevel: 5 },
         mozjpeg: { quality: 60 }, // Lower quality for Ghana's bandwidth conditions
         pngquant: { quality: [0.6, 0.8], speed: 4 },
         svgo: { plugins: [{ name: "removeViewBox" }] },
       }),
     ],
   });
   ```

2. **Differential Loading**

   - Configure Vite to generate smaller bundles for low-end Android devices:

   ```javascript
   export default defineConfig({
     build: {
       target: "es2018", // Balance between size and compatibility
       polyfillModulePreload: true, // Support older browsers
     },
   });
   ```

3. **Lazy Loading Configuration**

   - Set up dynamic imports with meaningful chunk names for better caching:

   ```javascript
   // In router setup (using React Router)
   import { lazy } from "react";

   const HomeView = lazy(() =>
     import(/* webpackChunkName: "home" */ "../views/HomeView")
   );
   const AboutView = lazy(() =>
     import(/* webpackChunkName: "about" */ "../views/AboutView")
   );

   const routes = [
     {
       path: "/",
       element: <HomeView />,
     },
     {
       path: "/about",
       // Mark as low-priority for prefetching (saves bandwidth)
       element: <AboutView />,
     },
   ];
   ```

4. **Bundle Size Optimization**

   - Configure bundle analysis and set size limits:

   ```javascript
   // Install first: npm add -D rollup-plugin-visualizer
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import { visualizer } from "rollup-plugin-visualizer";

   export default defineConfig({
     plugins: [
       react(),
       // Generate bundle stats for optimization
       visualizer({
         open: false, // Don't auto-open the visualization
         gzipSize: true, // Show gzipped sizes (more relevant for production)
         brotliSize: true, // Show brotli sizes (even smaller)
         filename: "stats.html", // Output file
       }),
     ],
     build: {
       // Warning threshold for chunk sizes - important for slow connections
       chunkSizeWarningLimit: 400, // in kB, lower for Ghana's bandwidth considerations
       rollupOptions: {
         output: {
           // Strategies specifically for low-bandwidth environments
           manualChunks: {
             "react-core": ["react", "react-dom", "react-router-dom"],
             // Only include essential utilities in core chunks
             "essential-utils": ["axios"],
             // Non-critical features in separate chunks
             analytics: ["./src/utils/analytics.js"],
           },
         },
       },
     },
   });
   ```

For production, rely on `npm run build`: Vite automatically tree-shakes and minifies your code, generating optimized bundles in `dist/`. Consider deploying to a static host for simplicity.

## **Code Documentation Guidelines**

To ensure clarity and maintainability, **every feature and function must be well-documented** throughout the project. The documentation should include the following:

## 1. **Inline Comments**

- **Briefly explain each significant section of the code**:
  - Why a specific block of code exists.
  - What a function does, especially complex logic.
  - Why certain decisions were made (e.g., workarounds or limitations).

### 2. **Function Documentation**

- **Each function should include a header comment** that describes:
  - Purpose of the function.
  - Parameters (if applicable) and their expected types.
  - Return values (if applicable) and their expected types.

### 3. **File-Level Documentation**

- Each JavaScript file should include a **file-level comment** at the top, describing:
  - The file’s purpose.
  - Major functions or components within it.
  - Any important setup or dependencies.

### 4. **Consistent Naming Conventions**

- Use **clear and descriptive names** for functions, variables, and files.
  - Avoid single-letter variable names (except in short loops).
  - Use camelCase for JavaScript variable names (e.g., `navMenu`, `toggleNav`).
  - Use PascalCase for classes (e.g., `HamburgerMenu`).

## Code Writing Standards _(Required)_

When writing code, adhere to the following standards to ensure maintainability and educational value:

- **Section Headers**: Always include clear section headers as comments to organize your code

  ```typescript
  // ===== Types & Interfaces =====

  // ===== Constants & Config =====

  // ===== Helper Functions =====

  // ===== Main Logic =====
  ```

- **Detailed Comments**: Write comments that explain the "why" not just the "what"

  ```typescript
  // BAD: Sets the timeout to 5000
  const TIMEOUT = 5000;

  // GOOD: Using 5s timeout to accommodate slower 3G networks in rural areas
  const TIMEOUT = 5000; // 5 seconds
  ```

- **Logic Explanation**: Break down complex logic with step-by-step comments

  ```typescript
  function syncOfflineData() {
    // 1. First check if we have pending changes to sync
    const pendingChanges = getPendingChanges();

    // 2. Sort changes by priority (critical updates first)
    const sortedChanges = sortByPriority(pendingChanges);

    // 3. Attempt to sync each change with retry logic
    return Promise.all(
      sortedChanges.map((change) => {
        // Using exponential backoff for retries
        return syncWithRetry(change, 3);
      })
    );
  }
  ```

- **Educational Pattern Comments**: Include comments that explain patterns and best practices

  ```vue
  <!-- Using v-show instead of v-if here because this element toggles frequently -->
  <div v-show="isLoading" class="loading-spinner">
    <!-- Aria-live ensures screen readers announce loading state changes -->
    <span aria-live="polite">Loading...</span>
  </div>
  ```

- **Type Documentation**: Document complex types with examples
  ```typescript
  /**
   * Represents a user's offline data state
   * @example
   * {
   *   data: { name: "John", lastSync: 164322132 },
   *   pendingChanges: [{ type: "UPDATE", field: "email" }],
   *   syncStatus: "pending"
   * }
   */
  interface OfflineState<T> {
    data: T;
    pendingChanges: Change[];
    syncStatus: "idle" | "pending" | "error";
  }
  ```

This documentation approach ensures that:

1. New team members can learn from the code
2. Future maintainers understand the context and decisions
3. The codebase serves as a learning resource
4. Complex Ghana-specific optimizations are well-explained

## Offline First Strategy

The offline-first approach is crucial for Stratonea applications due to intermittent connectivity in Ghana.

### 1. **Data Storage Strategy**

```typescript
// Define storage schema with version control
interface StorageSchema {
  version: number;
  lastSync: number;
  data: {
    [key: string]: any;
  };
}

// Initialize storage with versioning
export async function initializeStorage(): Promise<void> {
  const schema: StorageSchema = {
    version: 1,
    lastSync: Date.now(),
    data: {},
  };
  await localforage.setItem("app-storage", schema);
}
```

### 2. **Sync Strategy**

```typescript
// Implement background sync with retry logic
export async function syncData(retries = 3): Promise<void> {
  try {
    const pendingChanges = await getPendingChanges();
    await Promise.all(
      pendingChanges.map((change) => syncWithRetry(change, retries))
    );
  } catch (error) {
    console.error("Sync failed:", error);
    // Queue for retry when online
    await queueForSync(pendingChanges);
  }
}
```

### 3. **Network Status Handling**

```typescript
// Network status hook
import { useState, useEffect } from "react";

interface NetworkStatus {
  isOnline: boolean;
  connectionType?: string;
}

export function useNetworkStatus(): NetworkStatus {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [connectionType, setConnectionType] = useState<string>();

  useEffect(() => {
    const handleOnline = (): void => {
      setIsOnline(true);
      syncData(); // Attempt sync when back online
    };

    const handleOffline = (): void => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return {
    isOnline,
    connectionType,
  };
}

const syncData = async (): Promise<void> => {
  // Sync implementation
};
```

## WhatsApp Integration

WhatsApp is a primary communication channel in Ghana. Integrate sharing capabilities using the following approaches:

### 1. **Direct Message Links**

```typescript
export function generateWhatsAppLink(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
```

### 2. **Share Button Component**

```tsx
import React from "react";

interface WhatsAppShareProps {
  message: string;
  phone?: string;
}

const WhatsAppShare: React.FC<WhatsAppShareProps> = ({ message, phone }) => {
  const generateWhatsAppLink = (phone: string, message: string): string => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  };

  const shareOnWhatsApp = (): void => {
    const url = phone
      ? generateWhatsAppLink(phone, message)
      : `whatsapp://send?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <button
      onClick={shareOnWhatsApp}
      className="whatsapp-share-btn flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
      aria-label="Share on WhatsApp"
    >
      <WhatsAppIcon />
      Share via WhatsApp
    </button>
  );
};

const WhatsAppIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

export default WhatsAppShare;
```

## Optimized Asset Loading

Implement the following strategies for optimal asset loading in low-bandwidth conditions:

### 1. **Image Optimization**

```typescript
// Image loading utility
export function getOptimizedImageUrl(
  url: string,
  width: number,
  quality = 60
): string {
  return `${url}?w=${width}&q=${quality}&auto=format`;
}
```

### 2. **Lazy Loading Implementation**

```tsx
import React, { useState, useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  width,
  height,
  alt,
  className = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const loadImage = (): void => {
    setImageSrc(src);
  };

  const handleLoad = (): void => {
    setIsLoaded(true);
  };

  return (
    <img
      ref={imageRef}
      src={imageSrc}
      width={width}
      height={height}
      alt={alt}
      className={`lazy-image transition-opacity duration-300 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } ${className}`}
      onLoad={handleLoad}
    />
  );
};

export default LazyImage;
```

## Regional Integration

Guidelines for integrating region-specific features:

### 1. **Phone Number Formatting**

```typescript
// Ghana phone number formatter
export function formatGhanaianPhone(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, "");

  // Check if it's a valid Ghanaian number
  if (cleaned.length === 10) {
    return `+233${cleaned.slice(1)}`;
  }

  return phone;
}
```

### 2. **Location Services**

```typescript
export function getRegionalSettings() {
  return {
    timezone: "Africa/Accra",
    currency: "GHS",
    dateFormat: "DD/MM/YYYY",
    phoneFormat: "+233 XX XXX XXXX",
  };
}
```

## Performance Benchmarks

Key performance metrics for Ghana-specific conditions:

### Network Performance Targets

| Metric                 | 2G Target | 3G Target | 4G Target |
| ---------------------- | --------- | --------- | --------- |
| First Contentful Paint | < 5s      | < 2s      | < 1s      |
| Time to Interactive    | < 10s     | < 5s      | < 3s      |
| First Input Delay      | < 300ms   | < 200ms   | < 100ms   |

### Bundle Size Limits

| Type           | Target Size |
| -------------- | ----------- |
| Initial Bundle | < 300KB     |
| Route Chunks   | < 100KB     |
| Image Quality  | 60-70%      |

## Testing Guidelines

### 1. **Network Condition Testing**

```typescript
// Network condition simulator
export function simulateNetworkCondition(
  condition: "2g" | "3g" | "4g" | "offline"
): void {
  if (process.env.NODE_ENV === "development") {
    // Implement network throttling
    switch (condition) {
      case "2g":
        // Simulate 2G: 250kb/s, 300ms latency
        setNetworkConditions({
          latency: 300,
          downloadThroughput: (250 * 1024) / 8,
        });
        break;
      case "3g":
        // Simulate 3G: 750kb/s, 100ms latency
        setNetworkConditions({
          latency: 100,
          downloadThroughput: (750 * 1024) / 8,
        });
        break;
      case "4g":
        // Simulate 4G: 4mb/s, 50ms latency
        setNetworkConditions({
          latency: 50,
          downloadThroughput: (4 * 1024 * 1024) / 8,
        });
        break;
      case "offline":
        // Simulate offline mode
        setNetworkConditions({ offline: true });
        break;
    }
  }
}
```

### 2. **Offline Testing**

```typescript
describe("Offline Functionality", () => {
  beforeEach(() => {
    // Simulate offline condition
    window.navigator.onLine = false;
  });

  test("should store data locally when offline", async () => {
    const data = { id: 1, name: "Test Item" };
    await saveData(data);
    const stored = await localforage.getItem("offline-store");
    expect(stored).toContainEqual(data);
  });

  test("should sync when back online", async () => {
    window.navigator.onLine = true;
    window.dispatchEvent(new Event("online"));
    // Verify sync was triggered
    expect(syncMock).toHaveBeenCalled();
  });
});
```

## SEO Best Practices

Implement these SEO practices for better visibility:

### 1. **Meta Tags**

```tsx
import React from "react";
import { Helmet } from "react-helmet-async";

interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogLocale?: string;
  ogRegion?: string;
}

const MetaTags: React.FC<MetaProps> = ({
  title,
  description,
  keywords = "ghana, mobile-first, offline-capable",
  ogLocale = "en_GH",
  ogRegion = "GH",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:region" content={ogRegion} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

// Usage in your app
const App: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Your App Title | Ghana"
        description="Description optimized for Ghanaian users"
        keywords="ghana, mobile-first, offline-capable"
      />
      {/* Your app content */}
    </>
  );
};

export default MetaTags;
```

### 2. **Performance Optimization**

```tsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Implement route-based code splitting with loading states for slow connections
const HomeView = lazy(() => import("./views/Home"));
const AboutView = lazy(() => import("./views/About"));

interface LoadingComponentProps {
  isTimeout?: boolean;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({
  isTimeout = false,
}) => (
  <div className="loading-container flex items-center justify-center min-h-[200px]">
    {isTimeout ? (
      <div className="text-center">
        <p className="text-gray-600">
          Loading is taking longer than expected...
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-primary text-white rounded"
        >
          Retry
        </button>
      </div>
    ) : (
      <div className="spinner">Loading...</div>
    )}
  </div>
);

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingComponent />}>
            <HomeView />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<LoadingComponent />}>
            <AboutView />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouter;
```

## Integration Tips

Best practices for integrating with local services:

### 1. **Payment Integration**

```typescript
// Support for popular Ghanaian payment methods with fallback options
export const paymentMethods = {
  mobileMoney: ["MTN Mobile Money", "Vodafone Cash", "AirtelTigo Money"],
  cards: ["Visa", "Mastercard"],
  banks: ["GCB Bank", "Ecobank", "Fidelity Bank"],
};

// Payment processor with offline queue
export async function processPayment(
  amount: number,
  method: keyof typeof paymentMethods
): Promise<PaymentResult> {
  if (!navigator.onLine) {
    return queueOfflinePayment(amount, method);
  }

  try {
    return await processOnlinePayment(amount, method);
  } catch (error) {
    if (error instanceof NetworkError) {
      return queueOfflinePayment(amount, method);
    }
    throw error;
  }
}
```

### 2. **SMS Integration**

```typescript
// SMS fallback for critical notifications with retry logic
export async function sendNotification(
  message: string,
  phone: string,
  retries = 3
): Promise<void> {
  try {
    await sendPushNotification(message);
  } catch (error) {
    if (retries > 0 && navigator.onLine) {
      // Wait and retry with exponential backoff
      await delay(Math.pow(2, 4 - retries) * 1000);
      return sendNotification(message, phone, retries - 1);
    }
    // Fallback to SMS for critical updates
    await sendSMS(message, formatGhanaianPhone(phone));
  }
}
```

## Communication Guidelines

### 1. **Error Messages**

```typescript
export const errorMessages = {
  network: {
    offline: 'You are currently offline. Your changes will be saved and uploaded when you're back online.',
    slow: 'The connection is slow. Would you like to use less data?',
    retrying: 'Trying to connect again...',
    timeout: 'The connection timed out. Please check your internet and try again.',
    sync: 'Some changes haven't been saved yet. They will be uploaded automatically when you're back online.'
  },
  validation: {
    phone: 'Please enter a valid Ghana phone number (e.g., 024 XXX XXXX)',
    required: 'This information is needed to continue.',
    offline: 'You can fill this in now and we'll save it when you're back online.'
  },
  success: {
    saved: 'Your information has been saved.',
    sync: 'All your changes have been uploaded successfully.',
    offline: 'Saved for when you're back online.'
  }
};
```

### 2. **Loading States**

```tsx
import React, { useMemo } from "react";
import { useNetworkStatus } from "../hooks/useNetworkStatus";

interface LoadingStateProps {
  isLoading: boolean;
  hasCachedData: boolean;
  onEnableDataSaving: () => void;
}

const LoadingState: React.FC<LoadingStateProps> = ({
  isLoading,
  hasCachedData,
  onEnableDataSaving,
}) => {
  const { isOnline, connectionQuality } = useNetworkStatus();

  const isSlowConnection = useMemo(
    () => connectionQuality === "2g" || connectionQuality === "slow-3g",
    [connectionQuality]
  );

  const loadingMessage = useMemo(
    () => (isOnline ? "Loading..." : "Loading from saved data..."),
    [isOnline]
  );

  const offlineMessage = useMemo(
    () =>
      hasCachedData
        ? "Working offline with saved data"
        : "Cannot load new data while offline",
    [hasCachedData]
  );

  return (
    <div className="loading-state">
      {isLoading && (
        <div className="flex items-center justify-center">
          <div className="spinner mr-2" />
          <p className="loading-message" role="status" aria-live="polite">
            {loadingMessage}
          </p>
        </div>
      )}

      {!isOnline && (
        <div className="offline-indicator bg-amber-100 border-l-4 border-amber-500 p-4">
          <p className="text-amber-600">{offlineMessage}</p>
        </div>
      )}

      {isSlowConnection && (
        <SlowConnectionNotice onEnableDataSaving={onEnableDataSaving} />
      )}
    </div>
  );
};

interface SlowConnectionNoticeProps {
  onEnableDataSaving: () => void;
}

const SlowConnectionNotice: React.FC<SlowConnectionNoticeProps> = ({
  onEnableDataSaving,
}) => (
  <div className="slow-connection-notice bg-orange-100 border-l-4 border-orange-500 p-4">
    <div className="flex">
      <div className="flex-1">
        <p className="text-sm text-orange-700">
          Slow connection detected. Enable data saving mode?
        </p>
      </div>
      <div className="ml-4">
        <button
          onClick={onEnableDataSaving}
          className="text-sm bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
        >
          Enable
        </button>
      </div>
    </div>
  </div>
);

export default LoadingState;
```
