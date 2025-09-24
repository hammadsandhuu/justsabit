import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Portfilio21 from "../../../public/assets/imgs/portfolio/2/1.jpg";
import Portfilio22 from "../../../public/assets/imgs/portfolio/2/2.jpg";
import Portfilio23 from "../../../public/assets/imgs/portfolio/2/3.jpg";
import Portfilio24 from "../../../public/assets/imgs/portfolio/2/4.jpg";
import Portfilio25 from "../../../public/assets/imgs/portfolio/2/5.jpg";
import Portfilio26 from "../../../public/assets/imgs/portfolio/2/5.jpg";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";

const DesignStudioProtfolio = () => {
  return (
    <>
      <section className="portfolio__area-2">
        <div className="container g-0 line pt-100 pb-140">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper text-anim">
                <div>
                  <h2 className="title-anim sec-title-33 text-white">
                    How We Ship<span> Your Car</span>
                  </h2>
                </div>
                <p className="sec-text">
                  From inspection to final delivery, we follow a secure and
                  reliable process to ensure your car arrives safely from the
                  USA to Saudi Arabia.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__slider-2">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            spaceBetween={0}
            effect={"fade"}
            slidesPerView={1}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (i, className) {
                return `
                  <button class="${className}">
                    <svg class="circle-progress"><circle class="circle-origin" r="24.5" cx="25" cy="25"></circle></svg><span></span>
                  </button>
                `;
              },
            }}
          >
            <div className="swiper-wrapper">
              {/* Step 1 */}
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Portfilio21}
                      alt="Vehicle Inspection"
                    />
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      Vehicle <span>Inspection</span>
                    </h2>
                    <p>
                      Before loading, we document and inspect your car’s
                      condition to ensure a transparent shipping process.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Step 2 */}
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Portfilio22}
                      alt="Protective Packing"
                    />
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      Protective <span>Packing</span>
                    </h2>
                    <p>
                      Cars are carefully wrapped and secured with protective
                      materials to avoid scratches or damage during shipping.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Step 3 */}
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Portfilio23}
                      alt="Loading & Securing"
                    />
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      Loading <span>& Securing</span>
                    </h2>
                    <p>
                      Vehicles are loaded into containers or onto RoRo vessels
                      and strapped securely to prevent movement.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Step 4 */}
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Portfilio24}
                      alt="Customs Clearance"
                    />
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      Customs <span>Clearance</span>
                    </h2>
                    <p>
                      Our experts handle all export paperwork, permits, and
                      customs clearance for a smooth shipping experience.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Step 5 */}
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Portfilio25}
                      alt="Ocean Shipping"
                    />
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      Ocean <span>Shipping</span>
                    </h2>
                    <p>
                      Your car is shipped safely by sea with full insurance and
                      tracking from the USA to Saudi Arabia.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Step 6 */}
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Portfilio26}
                      alt="Delivery"
                    />
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      Final <span>Delivery</span>
                    </h2>
                    <p>
                      On arrival, we inspect again and deliver your car safely
                      to your pickup point or doorstep in Saudi Arabia.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>

            <div className="swiper-pagination circle-pagination right"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DesignStudioProtfolio;
