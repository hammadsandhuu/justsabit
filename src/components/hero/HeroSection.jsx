import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link.js";
import ArrowDownBig from "../../../public/assets/imgs/icon/arrow-down-big.png";
import Image from "next/image.js";

const HeroSection = () => {
  const heroTitle = useRef();
  const heroSubTitle = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth <= 768;
      let tHero = gsap.context(() => {
        gsap.set(".experience", {
          y: 50,
          opacity: 0,
        });

        let split_hero__title = new SplitText(heroTitle.current, {
          type: isMobile ? "words" : "chars",
        });

        let split_hero__subtitle = new SplitText(heroSubTitle.current, {
          type: "words",
        });

        gsap.from(split_hero__title[isMobile ? "words" : "chars"], {
          duration: 1,
          x: 70,
          autoAlpha: 0,
          stagger: 0.1,
        });

        gsap.from(split_hero__subtitle.words, {
          duration: 1,
          x: 50,
          autoAlpha: 0,
          stagger: 0.05,
        });

        gsap.to(".experience", {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        });
      });

      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="hero__area">
        {/* Background Video */}
        <video
          className="hero__bg-video"
          autoPlay
          loop
          muted
          playsInline
          src="assets/video/1.mp4" // 🔁 Replace with your video path
          type="video/mp4"
        ></video>

        {/* Content Container */}
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__content animation__hero_one">
                <Link href="/service">
                  Talk to Our Advisory — Book Your Free 15-Min Call Now
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>

                <div className="hero__title-wrapper">
                  <h1 className="hero__title" ref={heroTitle}>
                    Freight Without Frustrations
                  </h1>
                  <p className="hero__sub-title" ref={heroSubTitle}>
                    Complex cargo. Critical sectors. Human support. We move the
                    worlds most demanding freight with
                    <span> white-glove precision </span>
                    and <span> 40 years of trusted advisory.</span>
                  </p>
                </div>

                <Image
                  priority
                  width={170}
                  style={{ height: "auto" }}
                  src={ArrowDownBig}
                  alt="Arrow Down Icon"
                />

                <div className="experience">
                  <h2 className="title">25k+</h2>
                  <p>
                    Projects completed <br />
                    successfully
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
