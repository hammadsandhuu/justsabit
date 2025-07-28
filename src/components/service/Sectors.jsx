import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Sectors = ({ sectorsData = [] }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation__services2 = gsap.utils.toArray(
          ".animation__service-2 .service__item-2"
        );
        gsap.set(animation__services2, {
          opacity: 0,
          x: -30,
        });

        if (animation__services2) {
          if (device_width < 1023) {
            animation__services2.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 1,
                x: 0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.to(".animation__service-2 .service__item-2", {
              scrollTrigger: {
                trigger: ".animation__service-2",
                start: "top center+=200",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="service__area-2 pt-130 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-text text-anim">
                <p>
                  We are passionate to create connected brands and services, and
                  campaigns to enable stable and successful relationships
                  between businesses and customers.
                </p>
                <div className="btn_wrapper">
                  <Link
                    href="https://ship-with-sabit.vercel.app/"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span> Book Free <br /> 15-Minute Call
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  Elevating your brand through innovative and reliable logistics
                  solutions
                </h2>
              </div>
            </div>
          </div>

          <div className="row pt-140">
            <div className="col-xxl-12">
              <div className="service__list-2 animation__service-2">
                {sectorsData.map(
                  ({ id, slug, title, description, features }) => (
                    <div key={id} className="service__item-2">
                      <div>
                        <Link href={`/service/sector/${slug}`}>
                          <h3 className="service__title-2">{title}</h3>
                        </Link>
                        <p>{description}</p>
                        {features.length > 0 && (
                          <ul>
                            {features.map((item, idx) => (
                              <li key={idx}>+ {item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sectors;
