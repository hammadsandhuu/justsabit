import { useEffect, useRef } from "react";
import Link from "next/link.js";
import Award from "../../../public/assets/imgs/about/award.png";
import Image from "next/image.js";
import animationWordCome from "@/lib/utils/animationWordCome";

const HowItWorkSection = () => {
  const wordAnim = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
  }, []);
  return (
    <>
      <section className="hero__about">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
                <h1 className="hero-title animation__word_come" ref={wordAnim}>
                  A Simple 3-Step Process That Keeps You in Control
                </h1>
                <div className="hero__about-info">
                  <div className="hero__about-btn">
                    <div className="btn_wrapper">
                      <Link
                        href="/service"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> Explore <br />
                        Our Services
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="hero__about-text title-anim">
                    <p>
                      {
                        "We simplify freight forwarding with clear communication, upfront pricing, and real human support—ensuring your shipments move smoothly, transparently, and with care from start to finish."
                      }
                    </p>
                  </div>
                  <div className="hero__about-award">
                    <Image
                      priority
                      width={126}
                      height={82}
                      src={Award}
                      alt="Best Studio Award"
                    />
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

export default HowItWorkSection;
