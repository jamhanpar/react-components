import { useState, useEffect } from "react";

export default function useScrollPercentage() {
  const windowExists = typeof window !== "undefined";
  const [scrollPercentage, setScrollPercentage] = useState(windowExists ? 0 : null);

  const getScrollPercentage = () => {
    const winHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight;
    const scrollTop = window.scrollY;
    const trackLength = docHeight - winHeight;
    setScrollPercentage(Math.floor((scrollTop / trackLength) * 100));
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollPercentage);

    return () => {
      window.removeEventListener("scroll", getScrollPercentage);
    };
  }, []);

  return {
    scrollPercentage,
  };
}