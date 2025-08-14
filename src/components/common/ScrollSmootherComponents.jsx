// 1. Optimized ScrollSmoother Component
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "@/plugins";

gsap.registerPlugin(ScrollSmoother);

const ScrollSmootherComponents = () => {
  const smootherRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      // Only create if not already exists
      if (!smootherRef.current) {
        const ctx = gsap.context(() => {
          smootherRef.current = ScrollSmoother.create({
            smooth: device_width >= 1025 ? 1 : 0, // Disable on mobile completely
            effects: device_width >= 1025,
            smoothTouch: false,
            normalizeScroll: false,
            ignoreMobileResize: true,
          });
        });

        return () => {
          ctx.revert();
          if (smootherRef.current) {
            smootherRef.current.kill();
            smootherRef.current = null;
          }
        };
      }
    }
  }, []);

  return null; // No need for empty div
};

export default ScrollSmootherComponents;
