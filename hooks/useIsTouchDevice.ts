"use client";

import { useEffect, useState } from "react";

export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    // One-shot read of a browser API unavailable during SSR; no reactive dependency to subscribe to.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsTouch(!fine);
  }, []);

  return isTouch;
}
