/*
  LoadingState.tsx
  Stratonea App Loading State Component (React/TypeScript)

  - Displays loading indicators for online and offline states.
  - Shows a "slow connection" notice with a button to enable data saving mode.
  - Uses Tailwind CSS for styling, mobile-first and accessible.
  - Follows Stratonea guidelines: clear, simple English and recovery steps.
*/

// ===== Types & Interfaces =====
import React, { useMemo } from "react";
import { useNetworkStatus } from "../../hooks/useNetworkStatus";

/**
 * Props for LoadingState
 * @property isLoading - Whether the app is currently loading data.
 * @property hasCachedData - Whether there is cached data available for offline use.
 * @property onEnableDataSaving - Callback to enable data saving mode.
 */
interface LoadingStateProps {
  isLoading: boolean;
  hasCachedData: boolean;
  onEnableDataSaving: () => void;
}

// ===== Main Logic =====
/**
 * LoadingState
 * - Shows loading spinner and messages for online/offline/slow connections.
 * - Offers a button to enable data saving mode on slow connections.
 */
const LoadingState: React.FC<LoadingStateProps> = ({
  isLoading,
  hasCachedData,
  onEnableDataSaving,
}) => {
  // Get network status (online/offline/connection quality)
  const { isOnline, connectionQuality } = useNetworkStatus();

  // Detect slow connection (2g or slow-3g)
  const isSlowConnection = useMemo(
    () => connectionQuality === "2g" || connectionQuality === "slow-3g",
    [connectionQuality]
  );

  // Loading message based on network state
  const loadingMessage = useMemo(
    () => (isOnline ? "Loading..." : "Loading from saved data..."),
    [isOnline]
  );

  // Offline message based on cache
  const offlineMessage = useMemo(
    () =>
      hasCachedData
        ? "Working offline with saved data"
        : "Cannot load new data while offline",
    [hasCachedData]
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] p-4">
      {/* Loading spinner and message */}
      {isLoading && (
        <div className="flex items-center justify-center mb-4">
          <span className="animate-spin rounded-full h-8 w-8 border-4 border-primary-200 border-t-primary-600 mr-3" />
          <p className="text-base text-gray-700" role="status" aria-live="polite">
            {loadingMessage}
          </p>
        </div>
      )}

      {/* Offline indicator */}
      {!isOnline && (
        <div className="offline-indicator bg-amber-100 border-l-4 border-amber-500 p-4 rounded mb-2 w-full max-w-xs text-center">
          <p className="text-amber-700">{offlineMessage}</p>
        </div>
      )}

      {/* Slow connection notice */}
      {isSlowConnection && (
        <SlowConnectionNotice onEnableDataSaving={onEnableDataSaving} />
      )}
    </div>
  );
};

// ===== Helper Components =====
/**
 * SlowConnectionNotice
 * - Shows a notice and button to enable data saving mode.
 */
interface SlowConnectionNoticeProps {
  onEnableDataSaving: () => void;
}

const SlowConnectionNotice: React.FC<SlowConnectionNoticeProps> = ({
  onEnableDataSaving,
}) => (
  <div className="slow-connection-notice bg-orange-100 border-l-4 border-orange-500 p-4 rounded w-full max-w-xs text-center mt-2">
    <p className="text-sm text-orange-700 mb-2">
      Slow connection detected. Enable data saving mode?
    </p>
    <button
      onClick={onEnableDataSaving}
      className="text-sm bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
      style={{ minHeight: "48px" }}
    >
      Enable Data Saving
    </button>
  </div>
);

export default LoadingState;

/*
  Usage:
    <LoadingState
      isLoading={true}
      hasCachedData={false}
      onEnableDataSaving={() => { ... }}
    />

  - All styling uses Tailwind CSS utility classes for mobile-first workflow.
  - Loading and error messages are clear and actionable for Ghanaian users.
  - Component is accessible and touch-optimized.
  */