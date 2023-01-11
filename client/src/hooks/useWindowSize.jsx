import { useState, useEffect } from "react";

export default function useWindowSize() {
  const windowExists = typeof window !== "undefined";
  const [height, setHeight] = useState(
    windowExists ? window.innerHeight : null
  );
  const [width, setWidth] = useState(windowExists ? window.innerWidth : null);

  const calculateScreen = (width) => {
    if (width > 1023) return "desktop";
    if (width > 767) return "tablet";
    return "mobile";
  };

  const [screen, setScreen] = useState(
    windowExists ? calculateScreen(width) : null
  );

  const handleResize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    setScreen(calculateScreen(window.innerWidth));
  };

  useEffect(() => {
    // add event listener for resize on mount
    window.addEventListener("resize", handleResize);

    // clean up listener after
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    height,
    width,
    screen,
  };
};