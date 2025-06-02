import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Portfilio1 from "../../../public/assets/imgs/work/1.png";
import Portfilio2 from "../../../public/assets/imgs/work/2.png";
import Portfilio3 from "../../../public/assets/imgs/work/3.png";
import Portfilio4 from "../../../public/assets/imgs/work/4.png";
import Portfilio5 from "../../../public/assets/imgs/work/5.png";
import Portfilio6 from "../../../public/assets/imgs/work/6.png";
import Portfilio8 from "../../../public/assets/imgs/work/8.png";
import Portfilio9 from "../../../public/assets/imgs/work/9.png";
import Portfilio10 from "../../../public/assets/imgs/work/10.png";

// Portfolio data array
const portfolioItems = [
  { title: "Factory Freight Flow", image: Portfilio1 },
  { title: "Fresh Load Protocol", image: Portfilio2 },
  { title: "Portside Precision Flow", image: Portfilio3 },
  { title: "Heavy Cargo Move", image: Portfilio4 },
  { title: "Furniture Equipment Loadout", image: Portfilio5 },
  { title: "Diplomatic Grade Seal", image: Portfilio6 },
  { title: "Protected Auto Haul", image: Portfilio8 },
  { title: "Single Car Load", image: Portfilio9 },
  { title: "Time Critical Air", image: Portfilio10 },
];

const PortfolioSection = () => {
  return (
    <section className="portfolio__area-3">
      <div className="container pt-100 pb-150">
        <div className="row">
          <div className="col-xxl-12">
            <div className="sec-title-wrapper">
              <h2 className="sec-sub-title title-anim">
                Featured <br />
                Work
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-12 portfolio__slider-3">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              effect="fade"
              loop={true}
              speed={1500}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{ prevEl: ".pp-prev", nextEl: ".pp-next" }}
              pagination={{ el: ".swiper-pagination", type: "fraction" }}
            >
              {portfolioItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="portfolio__slide-3"
                    style={{ position: "relative" }}
                  >
                    <Link href="/">
                      <h3 className="portfolio__title-3">
                        {item.title
                          .split(" ")
                          .map((word, i) =>
                            i === 1 ? <span key={i}>{word} </span> : `${word} `
                          )}
                      </h3>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto", display: "block" }}
                          src={item.image}
                          alt="Portfolio Image"
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            zIndex: 1,
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>

              <div className="swiper-btn">
                <div style={{ cursor: "pointer" }} className="pp-prev">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div style={{ cursor: "pointer" }} className="pp-next">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
