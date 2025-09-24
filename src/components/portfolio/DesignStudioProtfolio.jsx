import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Import images
import Portfilio21 from "../../../public/assets/imgs/portfolio/2/1.jpg";
import Portfilio22 from "../../../public/assets/imgs/portfolio/2/2.jpg";
import Portfilio23 from "../../../public/assets/imgs/portfolio/2/3.jpg";
import Portfilio24 from "../../../public/assets/imgs/portfolio/2/4.jpg";

// Steps data (Dynamic)
const steps = [
  {
    step: "Step 01",
    title: "Pickup & Loading in USA",
    description:
      "We arrange vehicle pickup anywhere in the USA, inspect its condition, and load it safely into the shipping container.",
    image: Portfilio21,
  },
  {
    step: "Step 02",
    title: "Sealed Container Transport",
    description:
      "Your vehicle is secured inside a sealed container, offering maximum protection during ocean transport.",
    image: Portfilio22,
  },
  {
    step: "Step 03",
    title: "Customs Clearance & Updates",
    description:
      "We manage all customs paperwork and keep you updated with real-time notifications until your shipment arrives.",
    image: Portfilio23,
  },
  {
    step: "Step 04",
    title: "Delivery to Your Door in Saudi",
    description:
      "Once in Saudi Arabia, we handle the final clearance and deliver your vehicle directly to your home or pickup point.",
    image: Portfilio24,
  },
];

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
            {/* Dynamic Steps */}
            {steps.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="slide-content">
                    <span
                      style={{
                        display: "block",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#bbb",
                        marginBottom: "6px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      {item.step}
                    </span>
                    <h2 className="sec-title w-75">{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination circle-pagination right"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DesignStudioProtfolio;
