import { useEffect, useCallback } from "react";
import $ from "jquery";
import { Power2, gsap } from "gsap";
import {
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  SplitText,
} from "@/plugins";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const CommonAnimation = ({ children }) => {
  // Debounced refresh function for ScrollTrigger
  const refreshScrollTrigger = useCallback(() => {
    if (typeof window !== "undefined") {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Button hover effects
      const initButtonHoverEffects = () => {
        $(".btn-hover").off("mouseenter mouseout"); // Remove existing listeners

        $(".btn-hover").on("mouseenter", function (e) {
          var x = e.pageX - $(this).offset().left;
          var y = e.pageY - $(this).offset().top;

          $(this).find("span").css({
            top: y,
            left: x,
          });
        });

        $(".btn-hover").on("mouseout", function (e) {
          var x = e.pageX - $(this).offset().left;
          var y = e.pageY - $(this).offset().top;

          $(this).find("span").css({
            top: y,
            left: x,
          });
        });
      };

      // Initialize animations with proper error handling
      const initAnimations = () => {
        let tHero = gsap.context(() => {
          try {
            // Button parallax animations
            const initButtonParallax = () => {
              const all_btns = gsap.utils.toArray(".btn_wrapper");
              const btn_wrappers =
                all_btns.length > 0
                  ? all_btns
                  : gsap.utils.toArray("#btn_wrapper");
              const all_btn_circles = gsap.utils.toArray(".btn-item");

              btn_wrappers.forEach((btn, i) => {
                if (!btn || !all_btn_circles[i]) return;

                $(btn).off("mousemove mouseleave"); // Remove existing listeners

                $(btn).mousemove(function (e) {
                  callParallax(e);
                });

                function callParallax(e) {
                  parallaxIt(e, all_btn_circles[i], 80);
                }

                function parallaxIt(e, target, movement) {
                  if (!target) return;

                  var $this = $(btn);
                  var relX = e.pageX - $this.offset().left;
                  var relY = e.pageY - $this.offset().top;

                  gsap.to(target, {
                    duration: 0.5,
                    x: ((relX - $this.width() / 2) / $this.width()) * movement,
                    y:
                      ((relY - $this.height() / 2) / $this.height()) * movement,
                    ease: Power2.easeOut,
                  });
                }

                $(btn).mouseleave(function (e) {
                  if (all_btn_circles[i]) {
                    gsap.to(all_btn_circles[i], {
                      duration: 0.5,
                      x: 0,
                      y: 0,
                      ease: Power2.easeOut,
                    });
                  }
                });
              });
            };

            // Button scroll animations
            const initButtonScrollAnimations = () => {
              let arr1 = gsap.utils.toArray("#btn_wrapper");
              let arr2 = gsap.utils.toArray(".btn_wrapper");
              const all_buttons = arr1.concat(arr2);

              all_buttons.forEach((btn) => {
                if (!btn || btn.classList.contains("hero__button")) return;

                gsap.fromTo(
                  btn,
                  {
                    opacity: 0,
                    y: -70,
                  },
                  {
                    scrollTrigger: {
                      trigger: btn,
                      start: "top center+=150",
                      markers: false,
                      once: true, // Only animate once for better performance
                    },
                    opacity: 1,
                    y: 0,
                    ease: "bounce.out",
                    duration: 1.5,
                  }
                );
              });
            };

            // Title animations with SplitText
            const initTitleAnimations = () => {
              let splitTitleLines = gsap.utils.toArray(".title-anim");

              splitTitleLines.forEach((splitTextLine) => {
                if (!splitTextLine) return;

                const tl = gsap.timeline({
                  scrollTrigger: {
                    trigger: splitTextLine,
                    start: "top 90%",
                    end: "bottom 60%",
                    scrub: false,
                    markers: false,
                    toggleActions: "play none none none",
                    once: true, // Better performance
                  },
                });

                try {
                  const itemSplitted = new SplitText(splitTextLine, {
                    type: "words, lines",
                  });

                  gsap.set(splitTextLine, { perspective: 400 });
                  itemSplitted.split({ type: "lines" });

                  tl.from(itemSplitted.lines, {
                    duration: 1,
                    delay: 0.3,
                    opacity: 0,
                    rotationX: -80,
                    force3D: true,
                    transformOrigin: "top center -50",
                    stagger: 0.1,
                  });
                } catch (error) {
                  console.warn("SplitText error for title:", error);
                  // Fallback animation without SplitText
                  tl.from(splitTextLine, {
                    duration: 1,
                    delay: 0.3,
                    opacity: 0,
                    y: 50,
                  });
                }
              });
            };

            // Text paragraph animations
            const initTextAnimations = () => {
              let splitTextLines = gsap.utils.toArray(".text-anim p");

              splitTextLines.forEach((splitTextLine) => {
                if (!splitTextLine) return;

                const tl = gsap.timeline({
                  scrollTrigger: {
                    trigger: splitTextLine,
                    start: "top 90%",
                    end: "bottom 60%",
                    scrub: false,
                    markers: false,
                    toggleActions: "play none none none",
                    once: true, // Better performance
                  },
                });

                try {
                  const itemSplitted = new SplitText(splitTextLine, {
                    type: "lines",
                  });

                  gsap.set(splitTextLine, { perspective: 400 });
                  itemSplitted.split({ type: "lines" });

                  tl.from(itemSplitted.lines, {
                    duration: 1,
                    delay: 0.5,
                    opacity: 0,
                    rotationX: -80,
                    force3D: true,
                    transformOrigin: "top center -50",
                    stagger: 0.1,
                  });
                } catch (error) {
                  console.warn("SplitText error for text:", error);
                  // Fallback animation without SplitText
                  tl.from(splitTextLine, {
                    duration: 1,
                    delay: 0.5,
                    opacity: 0,
                    y: 30,
                  });
                }
              });
            };

            // Initialize all animations
            initButtonParallax();
            initButtonScrollAnimations();
            initTitleAnimations();
            initTextAnimations();

            // Refresh ScrollTrigger after all animations are set up
            ScrollTrigger.refresh();
          } catch (error) {
            console.error("Animation initialization error:", error);
          }
        });

        return tHero;
      };

      // Initialize button hover effects immediately
      initButtonHoverEffects();

      // Initialize animations with a small delay to ensure DOM is ready
      const animationContext = setTimeout(() => {
        const context = initAnimations();

        // Store context for cleanup
        window.animationContext = context;
      }, 50);

      // Refresh ScrollTrigger when window loads (for lazy-loaded content)
      const handleLoad = () => {
        refreshScrollTrigger();
      };

      // Refresh on resize (debounced)
      let resizeTimeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          refreshScrollTrigger();
        }, 250);
      };

      window.addEventListener("load", handleLoad);
      window.addEventListener("resize", handleResize);

      // Cleanup function
      return () => {
        clearTimeout(animationContext);
        clearTimeout(resizeTimeout);

        // Remove event listeners
        window.removeEventListener("load", handleLoad);
        window.removeEventListener("resize", handleResize);

        // Clean up jQuery events
        $(".btn-hover").off("mouseenter mouseout");
        $(".btn_wrapper, #btn_wrapper").off("mousemove mouseleave");

        // Revert GSAP context
        if (window.animationContext) {
          window.animationContext.revert();
          window.animationContext = null;
        }

        // Kill all ScrollTriggers
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [refreshScrollTrigger]);

  // Refresh animations when children change (for dynamic content)
  useEffect(() => {
    const timer = setTimeout(() => {
      refreshScrollTrigger();
    }, 100);

    return () => clearTimeout(timer);
  }, [children, refreshScrollTrigger]);

  return <>{children}</>;
};

export default CommonAnimation;
