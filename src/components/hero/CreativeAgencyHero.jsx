import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import Home7sh1 from "../../../public/assets/imgs/home-7/sh-1.jpg";
import Home7sh2 from "../../../public/assets/imgs/home-7/sh-2.jpg";
import Home7sh3 from "../../../public/assets/imgs/home-7/sh-3.jpg";
import Home7sh4 from "../../../public/assets/imgs/home-7/sh-4.jpg";
import Home7scroll from "../../../public/assets/imgs/home-7/scroll.png";
import Home7shape6 from "../../../public/assets/imgs/home-7/shape-6.png";
import Image from "next/image.js";

const CreativeAgencyHero = () => {
  const creativeSection = useRef();
  const solutionSection = useRef();
  const heroContentSection = useRef();
  const heroThumAnim = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let split_creative = new SplitText(creativeSection.current, {
          type: "words,chars",
          linesClass: "split-parent",
        });
        let split_solution = new SplitText(solutionSection.current, {
          type: "words,chars",
          linesClass: "split-parent",
        });
        let split_herocontent = new SplitText(heroContentSection.current, {
          type: "words,chars",
          linesClass: "split-parent",
        });

        gsap.from(split_creative.chars, {
          duration: 1,
          x: 70,
          autoAlpha: 0,
          stagger: 0.05,
        });
        gsap.from(
          split_solution.chars,
          { duration: 1, x: 70, autoAlpha: 0, stagger: 0.05 },
          "-=1.5"
        );
        gsap.from(
          split_herocontent.words,
          { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 },
          "-=1"
        );
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <style jsx>{`
        .service__hero-2 {
          position: relative;
          background: url("/assets/imgs/bg/usa-car-bg-1.PNG") center/cover
            no-repeat;
          z-index: 1;
          overflow: hidden;
        }
        .service__hero-2::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3); /* adjust darkness */
          z-index: -1;
        }
        @media (max-width: 991px) {
          .service__hero-left-2 {
            display: none;
          }
        }
      `}</style>
      <section className="service__hero-2">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="service__hero-inner-2">
                {/* Left Images (Hidden on small screens) */}
                <div className="service__hero-left-2">
                  <Image
                    priority
                    width={240}
                    style={{ height: "auto" }}
                    src={Home7sh1}
                    alt="Image"
                    className="image-1"
                  />
                  <Image
                    priority
                    width={240}
                    style={{ height: "auto" }}
                    src={Home7sh2}
                    alt="Image"
                    className="image-2"
                  />
                  <Image
                    priority
                    width={240}
                    style={{ height: "auto" }}
                    src={Home7sh3}
                    alt="Image"
                    className="image-3"
                  />
                  <Image
                    priority
                    width={240}
                    style={{ height: "auto" }}
                    src={Home7sh4}
                    alt="Image"
                    className="image-4"
                  />
                </div>

                {/* Right Content */}
                <div
                  className="service__hero-right-2 hero7__thum-anim"
                  ref={heroThumAnim}
                >
                  <h1 className="title creative" ref={creativeSection}>
                    Ship Your Car from the{" "}
                    <span className="solution" ref={solutionSection}>
                      USA to KSA
                    </span>
                  </h1>
                  <p className="animate_content" ref={heroContentSection}>
                    From pickup in the US to delivery in Saudi, SABIT handles
                    every step with proactive WhatsApp updates and containerized
                    protection.
                  </p>
                  <Image
                    priority
                    style={{ width: "auto", height: "auto" }}
                    src={Home7scroll}
                    alt="scroll Image"
                    className="scroll"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Image
          priority
          width={132}
          height={132}
          src={Home7shape6}
          alt="Shape Image"
          className="shape-1"
        /> */}
      </section>
    </>
  );
};

export default CreativeAgencyHero;


// <style jsx>{`
//   .service__hero-2 {
//     position: relative;
//     background-image: url("/assets/imgs/bg/usa-car-bg-1.PNG");
//     background-position: center center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     z-index: 1;
//     overflow: hidden;
//   }

//   /* Dark overlay */
//   .service__hero-2::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.3); /* adjust darkness */
//     z-index: -1;
//   }

//   @media (max-width: 991px) {
//     .service__hero-left-2 {
//       display: none;
//     }
//   }
// `}</style>;