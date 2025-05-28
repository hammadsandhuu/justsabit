import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "@/plugins";
import Image from "next/image";
import ArrowDownSm from "../../../public/assets/imgs/icon/arrow-down-sm.png";
import Hero from "../../../public/assets/imgs/hero/17.png";
import animationCharCome from "@/lib/utils/animationCharCome";

const DigitalMarketingHero = () => {
  const titleLeft = useRef();
  const titleRight = useRef();
  const charAnim = useRef();
  const charAnim2 = useRef();
  const heroTextAnim = useRef();
  const videoCheck = useRef();
  const videoCloseSection = useRef();
  const videoTitle = useRef();
  const heroArea = useRef();
  const wrapper = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let split_creatives = new SplitText(titleLeft.current, { type: "chars" });
      let split_solutions = new SplitText(titleRight.current, {
        type: "chars",
      });
      let split_text_animation = new SplitText(heroTextAnim.current, {
        type: "chars words",
      });
      let tHero = gsap.context(() => {
        let HomeDigital = gsap.timeline();

        HomeDigital.from(split_creatives.chars, {
          duration: 2,
          x: 100,
          autoAlpha: 0,
          stagger: 0.2,
        });
        HomeDigital.from(
          split_solutions.chars,
          { duration: 1, x: 100, autoAlpha: 0, stagger: 0.1 },
          "-=1"
        );
        HomeDigital.from(
          split_text_animation.words,
          { duration: 0.01, x: 50, autoAlpha: 0, stagger: 0.05 },
          "-=1"
        );
      });
      return () => tHero.revert();
    }
  }, []);
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationCharCome(charAnim2.current);
    if (typeof window !== "undefined") {
      let hero__text_animation = heroTextAnim.current;
      let tHero = gsap.context(() => {
        let split_text_animation = new SplitText(hero__text_animation, {
          type: "chars words",
        });
        gsap.from(
          split_text_animation.words,
          { duration: 0.5, x: 50, autoAlpha: 0, stagger: 0.05 },
          "-=1"
        );
        let imageTl_8 = gsap.timeline({
          scrollTrigger: {
            trigger: ".portfolio__big",
            start: "top top+=90",
            pin: true,
            markers: false,
            scrub: 1,
            pinSpacing: false,
            end: "bottom bottom+=150",
          },
        });
        imageTl_8.to(".portfolio__big-inner", {
          width: "100%",
        });
      });
      return () => tHero.revert();
    }
  }, []);
  const openVideo = () => {
    let headerArea = document.querySelector(".header__area-3");
    let video = videoTitle.current;
    let videoClose = videoCloseSection.current;
    if (videoCheck.current.checked) {
      wrapper.current.style.zIndex = "1";
      video.style.display = "none";
      videoClose.style.display = "block";
      heroArea.current.classList.add("start-video");
      headerArea.classList.add("bg-white");
    } else {
      wrapper.current.style.zIndex = "999";
      video.style.display = "block";
      videoClose.style.display = "none";
      heroArea.current.classList.remove("start-video");
      headerArea.classList.remove("bg-white");
    }
  };
  return (
    <>
      <section className="hero__area-3" ref={heroArea}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__inner-3">
                <div className="sec-title-wrapper">
                  <h2 className="sec-sub-title">Explore Our</h2>
                  <h3 className="sec-title title-left" ref={titleLeft}>
                    Ship
                  </h3>
                  <h3 className="sec-title title-right" ref={titleRight}>
                    ping
                  </h3>
                </div>
                <div className="hero__text-3">
                  <div className="grid-column">
                    <h4 className="text-white">Avoid</h4>
                    <ul className="text-white">
                      <li>+ Late Deliveries</li>
                      <li>+ Slow Response</li>
                      <li>+ Hidden charges </li>
                      <li>+ Wrong Paper work</li>
                      <li>+ Constant Follow-Up</li>
                      <li>+ issuess with Customs</li>
                    </ul>
                  </div>
                  <div className="grid-column">
                    <h4 className="text-white mt-2">Expect</h4>
                    <ul className="text-white">
                      <li>+ On-Time Deliveries</li>
                      <li>+ Fast Response</li>
                      <li>+ Full Transparency</li>
                      <li>+ Proactive Support</li>
                      <li>+ Full Compliance Checks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper" ref={wrapper}>
          <div className="video-info">
            <div className="video-intro">
              <input
                id="video_check"
                type="checkbox"
                ref={videoCheck}
                onClick={openVideo}
              />
              <div className="intro-title">
                <h4 className="video-title" ref={videoTitle}>
                  Watch <span>video intro</span>
                </h4>
                <h4
                  className="video-title close-video-title"
                  ref={videoCloseSection}
                >
                  Close <span>video intro</span>
                </h4>
              </div>
              <div className="video">
                <video
                  src="assets/1.mp4"
                  loop
                  muted
                  autoPlay
                  playsInline
                ></video>
              </div>
            </div>
          </div>
        </div>

        <div className="hero3-img-ani">
          <Image
            priority
            width={1195}
            style={{ height: "auto" }}
            src={Hero}
            alt="Hero Image"
            className="hero3-img"
          />
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingHero;
