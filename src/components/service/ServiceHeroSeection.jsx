import { useEffect, useRef } from "react";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import Link from "next/link";

const ServiceHeroSection = ({
  title,
  sections = [],
  features = [],
  images = [],
}) => {
  const charAnim = useRef();

  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  return (
    <section className="development__area">
      <div className="container g-0 line pt-130 pb-150">
        <div className="line-3"></div>
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
            <div className="sec-title-wrapper">
              <h2 className="sec-title animation__char_come" ref={charAnim}>
                {title}
              </h2>
            </div>
            <div className="btn_wrapper pleft">
              <Link
                href="/contact"
                className="wc-btn-primary btn-hover btn-item"
              >
                <span></span> Book Free <br /> 15-Minute Call
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
            <div className="development__wrapper">
              <div className="development__content">
                {sections?.map((section, idx) => (
                  <div key={idx}>
                    <h6 className="text-white mb-2 mt-4">{section.subtitle}</h6>
                    <p>{section.paragraph}</p>
                  </div>
                ))}
              </div>
              <ul>
                {features.map((item, idx) => (
                  <li key={idx}>+ {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {images.map((img, idx) => (
            <div
              key={idx}
              className={`col-xxl-${img.col || 6} col-xl-${
                img.col || 6
              } col-lg-${img.col || 6} col-md-${img.col || 6}`}
            >
              <div className="development__img">
                <Image
                  priority
                  width={872}
                  height={400}
                  style={{ width: "auto", height: "auto" }}
                  src={img?.src}
                  alt={img?.alt || "Development Image"}
                  data-speed={img.speed || "auto"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
