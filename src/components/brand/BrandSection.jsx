import { FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Image from "next/image";

import Brand1 from "../../../public/assets/imgs/brand/1.png";
import Brand2 from "../../../public/assets/imgs/brand/2.png";
import Brand3 from "../../../public/assets/imgs/brand/3.png";
import Brand4 from "../../../public/assets/imgs/brand/4.png";
import Brand5 from "../../../public/assets/imgs/brand/5.png";
import Brand6 from "../../../public/assets/imgs/brand/6.png";
import Brand7 from "../../../public/assets/imgs/brand/7.png";
import Brand8 from "../../../public/assets/imgs/brand/8.png";

const brands = [
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  Brand7,
  Brand8,
  // Duplicate for seamless loop
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  Brand7,
  Brand8,
];

const BrandSection = () => {
  return (
    <section className="brand__area pt-140">
      <div className="container g-0">
        <span className="line-3"></span>
        <div className="row">
          <div className="col-xxl-12">
            <h2 className="brand__title-3 title-anim">
              Trusted by Leaders Across 8 Global Sectors
            </h2>
          </div>
          <div className="col-xxl-12">
            <Swiper
              modules={[FreeMode, Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              freeMode={true}
              speed={4000} // smoother transition
              autoplay={{
                delay: 0, // continuous
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              allowTouchMove={false}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
                1400: { slidesPerView: 8 },
              }}
            >
              {brands.map((brand, index) => (
                <SwiperSlide key={index}>
                  <div className="brand__item">
                    <Image
                      priority
                      width={80}
                      height={80}
                      src={brand}
                      alt={`Brand Logo ${index + 1}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
