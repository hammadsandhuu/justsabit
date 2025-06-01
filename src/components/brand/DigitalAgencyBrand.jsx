import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Brand1 from "../../../public/assets/imgs/brand/1.png";
import Brand2 from "../../../public/assets/imgs/brand/2.png";
import Brand3 from "../../../public/assets/imgs/brand/3.png";
import Brand4 from "../../../public/assets/imgs/brand/4.png";
import Brand5 from "../../../public/assets/imgs/brand/5.png";
import Brand6 from "../../../public/assets/imgs/brand/6.png";
import Brand7 from "../../../public/assets/imgs/brand/7.png";
import Brand8 from "../../../public/assets/imgs/brand/8.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyBrand = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      setTimeout(() => {
        let tHero = gsap.context(() => {
          gsap.set(".fade_bottom", { y: 30, opacity: 0 });

          if (device_width < 1023) {
            const fadeArray = gsap.utils.toArray(".fade_bottom");
            fadeArray.forEach((item, i) => {
              let fadeTl = gsap.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                },
              });
              fadeTl.to(item, {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
              });
            });
          } else {
            gsap.to(".fade_bottom", {
              scrollTrigger: {
                trigger: ".fade_bottom",
                start: "top center+=300",
                markers: false,
              },
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1,
              stagger: {
                each: 0.2,
              },
            });
          }
        });
        return () => tHero.revert();
      }, 100);
    }
  }, []);
  return (
    <>
      <section className="brand__area">
        <div className="container g-0  pt-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <h2 className="brand__title-3 title-anim">
                Trusted by Leaders Across 8 Global Sectors
              </h2>
            </div>
            <div className="col-xxl-12">
              <div className="brand__list">
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={80}
                    height={80}
                    src={Brand1}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={80}
                    height={80}
                    src={Brand2}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={80}
                    height={80}
                    src={Brand3}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={80}
                    height={80}
                    src={Brand4}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={80}
                    height={80}
                    src={Brand5}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={80}
                    height={80}
                    src={Brand6}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={80}
                    height={80}
                    src={Brand7}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={80}
                    height={80}
                    src={Brand8}
                    alt="Brand Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyBrand;
