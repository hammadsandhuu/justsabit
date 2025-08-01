import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "@/plugins";
import Link from "next/link.js";
import About31 from "../../../public/assets/imgs/about/3.png";
import Image from "next/image.js";

gsap.registerPlugin(ScrollSmoother);

const AboutSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="about__area-3 mt-5">
        <div className="container pt-140 pb-110">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 d-none d-lg-block">
              <div className="about__img-3">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={About31}
                  alt="About Thumbnail"
                  data-speed="auto"
                  className="smootherReset768"
                />
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">Who We Are</h2>
                <h3 className="sec-title title-anim">
                  Shipping Isn’t Complicated. People Just Make It That Way.
                </h3>
              </div>
              <div className="sec-text-wrapper">
                <div className="sec-text text-anim">
                  <p className="py-0 my-0">- Slow updates?</p>
                  <p className="py-0 my-0">- Incompetent agents?</p>
                  <p className="py-0 my-0">- Always following up?</p>
                  <p className="py-0 my-0">- Customs problems?</p>
                  <h5 className="mt-4 mb-2 text-white">
                    That’s why SABIT exists.
                  </h5>
                  <p className="py-0 my-0">
                    We’re an independent freight advisory with 40+ years of
                    experience. We connect you with vetted agents — and support
                    you from start to finish.
                  </p>
                  <div className="btn_wrapper">
                    <Link
                      className="wc-btn-secondary btn-hover btn-item"
                      href="/about"
                    >
                      <span></span> Explore Us{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
