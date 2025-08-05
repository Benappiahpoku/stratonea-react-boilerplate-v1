/*
  ErrorBoundary.tsx
  Stratonea App Error Boundary Component (React/TypeScript)

  - Catches JavaScript errors in child components and displays a user-friendly message.
  - Provides a "Try Again" button to reset the error boundary.
  - Optionally shows technical error details (collapsed by default).
  - Uses Tailwind CSS for styling, mobile-first and accessible.
  - Follows Stratonea guidelines: clear, simple English and recovery steps.
*/

import React, { Component } from "react";
import type { ReactNode } from "react";

// ===== Types & Interfaces =====
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
  showDetails: boolean;
}

// ===== Main Logic =====
/**
 * ErrorBoundary
 * - Catches errors in child components and displays a fallback UI.
 * - User can retry by clicking "Try Again".
 * - Technical details are hidden by default for simplicity.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
    };
  }

  // React lifecycle: catch errors in children
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  // Log error details for debugging
  componentDidCatch(_: Error, errorInfo: React.ErrorInfo) {
    // Only use errorInfo, error is not needed here
    this.setState({ errorInfo });
    // Optionally send error to monitoring service here
    // e.g., logErrorToService(error, errorInfo);
  }

  // Reset error boundary when user clicks "Try Again"
  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
    });
  };

  // Toggle technical details visibility
  toggleDetails = () => {
    this.setState((state) => ({ showDetails: !state.showDetails }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 bg-white text-center">
          {/* User-friendly error message */}
          <h2 className="text-xl font-bold text-red-700 mb-2">
            Something went wrong
          </h2>
          <p className="text-base text-gray-700 mb-4">
            Sorry, we couldn't load this part of the app.<br />
            Please try again. If the problem continues, contact support.
          </p>
          {/* Try Again button */}
          <button
            onClick={this.handleRetry}
            className="px-6 py-3 bg-primary text-white rounded stratonea border-none font-semibold text-base min-w-[120px] mt-2 mb-4"
            style={{ minHeight: "48px" }}
          >
            Try Again
          </button>
          {/* Toggle technical details */}
          {this.state.error && (
            <div>
              <button
                onClick={this.toggleDetails}
                className="text-sm text-primary underline focus:outline-none"
                aria-expanded={this.state.showDetails}
              >
                {this.state.showDetails ? "Hide technical details" : "Show technical details"}
              </button>
              {this.state.showDetails && (
                <pre className="mt-2 p-2 bg-gray-100 text-left text-xs rounded max-w-full overflow-x-auto">
                  {this.state.error?.toString()}
                  {"\n"}
                  {this.state.errorInfo?.componentStack ?? ""}
                </pre>
              )}
            </div>
          )}
        </div>
      );
    }

    // No error: render children as normal
    return this.props.children;
  }
}

export default ErrorBoundary;

/*
  Usage:
    <ErrorBoundary>
      <YourComponent />
    </ErrorBoundary>

  - All styling uses Tailwind CSS utility classes for mobile-first workflow.
  - Error messages are clear, simple, and provide recovery steps.
  - Technical details are hidden by default for non-technical users.
*/