import { useEffect } from "react";
import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";

gsap.registerPlugin(ScrollTrigger);

const CounterSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      const counters = [
        { selector: ".count1", end: 98, suffix: "%" },
        { selector: ".count2", end: 100, suffix: "k+" },
        { selector: ".count3", end: 72, suffix: "%" },
        { selector: ".count4", end: 40, suffix: "+" },
      ];

      const tHero = gsap.context(() => {
        // Set initial state
        gsap.set(".counter_animation .counter__anim", { y: -100, opacity: 0 });

        if (device_width < 1023) {
          const counterArray = gsap.utils.toArray(
            ".counter_animation .counter__anim"
          );
          counterArray.forEach((item) => {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                },
              })
              .to(item, {
                y: 0,
                opacity: 1,
                ease: "bounce",
                duration: 1.5,
              });
          });
        } else {
          gsap.to(".counter_animation .counter__anim", {
            scrollTrigger: {
              trigger: ".counter_animation",
              start: "top center+=300",
            },
            y: 0,
            opacity: 1,
            ease: "bounce",
            duration: 1.5,
            stagger: 0.3,
          });
        }

        // Safe animation of counters with suffix
        counters.forEach(({ selector, end, suffix }) => {
          const el = document.querySelector(selector);
          if (!el) return; // skip if element not found

          const counterObj = { val: 0 }; // must use a new object for each

          gsap.to(counterObj, {
            val: end,
            duration: 2,
            ease: Power1.easeOut,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
            },
            onUpdate: () => {
              el.textContent = `${Math.round(counterObj.val)}${suffix}`;
            },
          });
        });
      });

      return () => tHero.revert();
    }
  }, []);

  return (
    <section className="counter__area pb-5">
      <div className="container g-0 line pt-150">
        <span className="line-3"></span>
        <div className="row">
          <div className="col-xxl-12">
            <div className="counter__wrapper counter_animation">
              <div className="counter__item counter__anim">
                <h2 className="counter__number count1">0%</h2>
                <p>
                  Happy
                  <br />
                  Customers
                </p>
                <span className="counter__border"></span>
              </div>
              <div className="counter__item counter__anim">
                <h2 className="counter__number count2">0k+</h2>
                <p>
                  Successful
                  <br />
                  Shipments Advised
                </p>
                <span className="counter__border"></span>
              </div>
              <div className="counter__item counter__anim">
                <h2 className="counter__number count3">0%</h2>
                <p>
                  Switch to SABIT
                  <br />
                  After One Call
                </p>
                <span className="counter__border"></span>
              </div>
              <div className="counter__item counter__anim">
                <h2 className="counter__number count4">0+</h2>
                <p>
                  Years Of
                  <br />
                  Freight Advisory Experience
                </p>
                <span className="counter__border"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
