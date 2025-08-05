/*
  useNetworkStatus.ts
  Stratonea Network Status Hook (React/TypeScript)

  - Detects online/offline state and connection quality for Ghanaian users.
  - Returns { isOnline, connectionQuality } for use in loading/error UI.
  - Mobile-first, offline-aware, and fully documented for learning.
  - Follows Stratonea guidelines: clear types, simple logic, and comments.
*/

import { useState, useEffect } from "react";

// ===== Types & Interfaces =====
/**
 * ConnectionQuality
 * - Represents the effective network connection type.
 * - "4g", "3g", "2g", "slow-2g", "slow-3g", or "unknown"
 */
export type ConnectionQuality = "4g" | "3g" | "2g" | "slow-2g" | "slow-3g" | "unknown";

/**
 * NetworkStatus
 * - isOnline: true if the browser is online
 * - connectionQuality: string describing the connection type
 */
export interface NetworkStatus {
  isOnline: boolean;
  connectionQuality: ConnectionQuality;
}

// ===== Helper Functions =====
/**
 * getConnectionQuality
 * - Uses the Network Information API if available.
 * - Falls back to "unknown" if not supported.
 */
function getConnectionQuality(): ConnectionQuality {
  // @ts-expect-error: navigator.connection is not in all TS DOM types
  const navConn = navigator.connection || navigator['mozConnection'] || navigator['webkitConnection'];
  if (navConn && typeof navConn.effectiveType === "string") {
    // Map browser values to our ConnectionQuality type
    switch (navConn.effectiveType) {
      case "slow-2g":
        return "slow-2g";
      case "2g":
        return "2g";
      case "3g":
        return "3g";
      case "4g":
        return "4g";
      default:
        return "unknown";
    }
  }
  return "unknown";
}

// ===== Main Logic =====
/**
 * useNetworkStatus
 * - React hook to track online/offline state and connection quality.
 * - Updates on browser network events and connection changes.
 */
export function useNetworkStatus(): NetworkStatus {
  // Initial state: use browser APIs
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [connectionQuality, setConnectionQuality] = useState<ConnectionQuality>(getConnectionQuality());

  useEffect(() => {
    // Handler for online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Handler for connection quality changes
    // @ts-expect-error: navigator.connection is not in all TS DOM types
    const navConn = navigator.connection || navigator['mozConnection'] || navigator['webkitConnection'];
    const handleConnectionChange = () => setConnectionQuality(getConnectionQuality());

    // Listen for online/offline
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Listen for connection changes if supported
    if (navConn && navConn.addEventListener) {
      navConn.addEventListener("change", handleConnectionChange);
    }

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      if (navConn && navConn.removeEventListener) {
        navConn.removeEventListener("change", handleConnectionChange);
      }
    };
  }, []);

  return { isOnline, connectionQuality };
}

/*
  Usage:
    import { useNetworkStatus } from "@/hooks/useNetworkStatus";
    const { isOnline, connectionQuality } = useNetworkStatus();

  - Use this hook in loading/error UI to adapt for Ghanaian network conditions.
  - All logic is mobile-first, offline-aware, and fully documented.
  */