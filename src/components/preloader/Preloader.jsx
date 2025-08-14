// 3. Optimized Preloader with Resource Loading Detection
import { useEffect, useRef, useState } from "react";

const Preloader = () => {
  const preloaderSection = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Wait for critical resources
      const hidePreloader = () => {
        const preloader = preloaderSection.current;
        if (preloader) {
          preloader.style.opacity = "0";
          preloader.style.transition = "opacity 0.3s ease-out";
          setTimeout(() => {
            preloader.style.display = "none";
            setIsLoading(false);
          }, 300);
        }
      };

      // Multiple conditions for hiding preloader
      const checkReadyState = () => {
        if (document.readyState === "complete") {
          // Add small delay to ensure GSAP is initialized
          setTimeout(hidePreloader, 200);
        } else {
          // Fallback timeout
          setTimeout(hidePreloader, 1000);
        }
      };

      if (document.readyState === "complete") {
        setTimeout(hidePreloader, 200);
      } else {
        window.addEventListener("load", checkReadyState);
        // Fallback
        const fallbackTimer = setTimeout(hidePreloader, 2000);

        return () => {
          window.removeEventListener("load", checkReadyState);
          clearTimeout(fallbackTimer);
        };
      }
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="preloader" ref={preloaderSection}>
      <div className="loading">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className={`bar bar${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
