import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Portfilio1 from "../../../public/assets/imgs/work/1.png";
import Portfilio2 from "../../../public/assets/imgs/work/2.png";
import Portfilio3 from "../../../public/assets/imgs/work/3.png";
import Portfilio4 from "../../../public/assets/imgs/work/4.png";
import Portfilio5 from "../../../public/assets/imgs/work/5.png";
import Portfilio6 from "../../../public/assets/imgs/work/6.png";
import Portfilio7 from "../../../public/assets/imgs/work/8.png";
import Portfilio8 from "../../../public/assets/imgs/work/9.png";
import Portfilio9 from "../../../public/assets/imgs/work/10.png";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const PortfolioSection = () => {
  return (
    <>
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
                effectfade="true"
                loop={true}
                speed={1500}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".pp-prev",
                  nextEl: ".pp-next",
                }}
                pagination={{ el: ".swiper-pagination", type: "fraction" }}
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="#">
                        <h3 className="portfolio__title-3">
                          Factory <span>Freight</span> Flow
                        </h3>
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={Portfilio1}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="#">
                        <h3 className="portfolio__title-3">
                          Fresh <span>Load</span> Protocol
                        </h3>
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={Portfilio2}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="#">
                        <h3 className="portfolio__title-3">
                          Portside <span>Precision</span> Flow
                        </h3>
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={Portfilio3}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="#">
                        <h3 className="portfolio__title-3">
                          Heavy <span>Cargo</span> Move
                        </h3>
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={Portfilio4}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="#">
                        <h3 className="portfolio__title-3">
                          Furniture <span>Equipment</span> Loadout
                        </h3>
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={Portfilio5}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="#">
                        <h3 className="portfolio__title-3">
                          Diplomatic <span>Grade</span> Seal
                        </h3>
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={Portfilio6}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="#">
                        <h3 className="portfolio__title-3">
                          Protected <span>Auto</span> Haul
                        </h3>
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={Portfilio7}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="#">
                        <h3 className="portfolio__title-3">
                          Single <span>Car</span> Load
                        </h3>
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={Portfilio8}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="#">
                        <h3 className="portfolio__title-3">
                          Time <span>Critical</span> Air
                        </h3>
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={Portfilio9}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                </div>

                <div className="swiper-pagination"></div>

                <div className="swiper-btn">
                  <div style={{ cursor: "pointer" }} className="pp-prev">
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </div>
                  <div style={{ cursor: "pointer" }} className="pp-next">
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
