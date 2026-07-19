"use client";

import { useState, useCallback, useEffect } from "react";
import LoadingAnimation from "@/components/animations/LoadingAnimation";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only show on first visit
    const hasVisited = sessionStorage.getItem("la-madeleine-visited");
    if (hasVisited) {
      setLoading(false);
    }
  }, []);

  const handleComplete = useCallback(() => {
    sessionStorage.setItem("la-madeleine-visited", "true");
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingAnimation onComplete={handleComplete} />;
  }

  return <>{children}</>;
}
