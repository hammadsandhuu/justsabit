import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Portfilio31 from "../../../public/assets/imgs/portfolio/3/1.jpg";
import Portfilio32 from "../../../public/assets/imgs/portfolio/3/2.jpg";
import Portfilio33 from "../../../public/assets/imgs/portfolio/3/3.jpg";
import Portfilio34 from "../../../public/assets/imgs/portfolio/3/4.jpg";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { useEffect, useRef } from "react";
import animationCharCome from "@/lib/utils/animationCharCome";

const PortfolioHeroSection = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="portfolio__area-3 portfolio-v4">
        <div className="container pt-100 pb-150">
          <div className="row pb-150">
            <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Awesome <br />
                  Projects
                </h2>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
              <div className="blog__text">
                <p>
                  Crafting new bright brands, unique visual systems and digital
                  experience focused on a wide range of original collabs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHeroSection;
