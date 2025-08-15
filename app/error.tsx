"use client";

import { useEffect } from "react";
import Button3D from "@/components/button-3d";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  const handleReset = () => {
    try {
      if (typeof reset === "function") {
        reset();
      } else {
        window.location.reload();
      }
    } catch (err) {
      console.error("Reset failed:", err);
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="mx-auto max-w-md rounded-xl border border-cyan-300/40 bg-cyan-50/10 backdrop-blur-xl p-6 text-cyan-100 shadow-2xl">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-cyan-100 mb-4">
            Something went wrong
          </h2>
          <p className="text-sm text-cyan-200/80 mb-6">
            We encountered an error while loading the page. Please try again.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button3D onClick={handleReset} color="cyan">
              Try Again
            </Button3D>
            <Button3D href="/" color="purple">
              Go Home
            </Button3D>
          </div>
        </div>
      </div>
    </div>
  );
}
