// 2. Optimized Cursor Animation with Throttling
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorAnimation = ({ cursor1, cursor2 }) => {
  const animationFrameRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        // Throttled mousemove handler
        function mousemoveHandler(e) {
          mousePos.current = { x: e.clientX, y: e.clientY };

          // Cancel previous frame
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }

          // Use RAF for smooth 60fps animation
          animationFrameRef.current = requestAnimationFrame(() => {
            try {
              gsap.to(".cursor1", {
                x: mousePos.current.x,
                y: mousePos.current.y,
                duration: 0.1,
                ease: "power2.out",
              });

              gsap.to(".cursor2", {
                x: mousePos.current.x,
                y: mousePos.current.y,
                duration: 0.3,
                ease: "power2.out",
              });
            } catch (error) {
              console.log(error);
            }
          });
        }

        document.addEventListener("mousemove", mousemoveHandler, {
          passive: true,
        });

        // Cleanup function
        return () => {
          document.removeEventListener("mousemove", mousemoveHandler);
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
        };
      });

      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <div className="cursor1" ref={cursor1}></div>
      <div className="cursor2" ref={cursor2}></div>
    </>
  );
};

export default CursorAnimation;
