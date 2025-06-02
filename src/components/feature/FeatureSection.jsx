import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import FeatureIcon1 from "../../../public/assets/imgs/feature/1.png";
import FeatureIcon2 from "../../../public/assets/imgs/feature/2.png";
import FeatureIcon3 from "../../../public/assets/imgs/feature/3.png";
import FeatureIcon4 from "../../../public/assets/imgs/feature/4.png";
import FeatureIcon5 from "../../../public/assets/imgs/feature/5.png";
import FeatureIcon6 from "../../../public/assets/imgs/feature/6.png";
import FeatureIcon7 from "../../../public/assets/imgs/feature/7.png";
import FeatureIcon8 from "../../../public/assets/imgs/feature/8.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      setTimeout(() => {
        let tHero = gsap.context(() => {
          let animation__feature2 = gsap.utils.toArray(
            ".animation__feature2 .feature__item"
          );
          if (device_width < 1023) {
            animation__feature2.forEach((item, i) => {
              gsap.set(item, { opacity: 0, y: 60 });
              let featured2Timeline = gsap.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                },
              });
              featured2Timeline.to(item, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power4.out",
              });
            });
          } else {
            gsap.set(".animation__feature2 .feature__item", {
              opacity: 0,
              y: 40,
            });
            gsap.to(".animation__feature2 .feature__item", {
              scrollTrigger: {
                trigger: ".animation__feature2",
                start: "top center+=200",
              },
              opacity: 1,
              y: 0,
              duration: 2,
              ease: "power4.out",
              stagger: 0.3,
            });
          }
        });
        return () => tHero.revert();
      }, 1000);
    }
  }, []);
  return (
    <>
      <section className="feature__area-2 pt-130">
        <div className="feature__top">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title title-anim">
                    Trusted by Leaders Across 8 Global Sectors
                  </h2>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                <div className="feature__text text-anim">
                  <p>
                    While Sabit is a new advisory platform, Our team legacy
                    spans decades of freight experience with elite brands across
                    hospitality,automotive,luxury goods and development sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feature__btm">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="feature__list animation__feature2">
                  <div className="feature__item">
                    <Image
                      priority
                      width={200}
                      height={100}
                      src={FeatureIcon1}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">Luxury Automotive</h3>
                    <p>
                      Boutique logistics for dealerships, manufacturers, and
                      private collectors — from global vehicle shipping to
                      local fleet moves.
                    </p>
                  </div>
                  <div className="feature__item">
                    <Image
                      priority
                      width={100}
                      height={100}
                      src={FeatureIcon2}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">Diplomatic Missions</h3>
                    <p>
                      Secure, discreet supply chain solutions built to support
                      diplomatic, consular, and government agency needs.
                    </p>
                  </div>
                  <div className="feature__item">
                    <Image
                      priority
                      width={100}
                      height={100}
                      className=""
                      src={FeatureIcon3}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">Hospitality Groups</h3>
                    <p>
                      End-to-end freight expertise for global hotel brands,
                      luxury resorts, and boutique hospitality properties.
                    </p>
                  </div>
                  <div className="feature__item">
                    <Image
                      priority
                      width={100}
                      height={100}
                      src={FeatureIcon4}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">Mega Projects</h3>
                    <p>
                      Scalable, compliant logistics systems designed for
                      high-volume infrastructure, construction, and
                      energy developments.
                    </p>
                  </div>
                  <div className="feature__item">
                    <Image
                      priority
                      width={100}
                      height={100}
                      src={FeatureIcon5}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">Oil & Gas</h3>
                    <p>
                      Logistics expertise for fuels, lubricants, and critical
                      energy supply chains.
                    </p>
                  </div>
                  <div className="feature__item">
                    <Image
                      priority
                      width={100}
                      height={100}
                      src={FeatureIcon6}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">Food & Commodities</h3>
                    <p>
                      We move rice, packaged foods, perishables, and FMCG
                      products with precision and care.
                    </p>
                  </div>
                  <div className="feature__item">
                    <Image
                      priority
                      width={100}
                      height={100}
                      src={FeatureIcon7}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">Furniture & Fixtures</h3>
                    <p>
                      White-glove transport and consolidation services for
                      furniture brands, suppliers, and interior projects.
                    </p>
                  </div>
                  <div className="feature__item">
                    <Image
                      priority
                      width={130}
                      height={100}
                      src={FeatureIcon8}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">
                      Materials & Manufacturing
                    </h3>
                    <p>
                      Logistics for raw materials, chemicals, tech
                      infrastructure, and packaging components.
                    </p>
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

export default FeatureSection;
