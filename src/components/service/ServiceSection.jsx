import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = ({ serviceData }) => {
  const [activeList, setActiveList] = useState(1);
  const serviceList = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const listItem = serviceList.current?.children;
      if (!listItem) return;

      for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener("mousemove", function () {
          const service_id = this.getAttribute("data-service");
          setActiveList(parseInt(service_id));
          if (service_id !== "1") {
            setActiveList(0);
          }
        });

        listItem[i].addEventListener("mouseout", function () {
          const service_id = this.getAttribute("data-service");
          setActiveList(parseInt(service_id));
        });
      }

      const tHero = gsap.context(() => {
        const home1_services = gsap.utils.toArray(".animation_home1_service");
        const service__number = gsap.utils.toArray(
          ".animation_home1_service .service__number span"
        );
        const service__title = gsap.utils.toArray(
          ".animation_home1_service .service__title"
        );
        const service__text = gsap.utils.toArray(
          ".animation_home1_service .service__text p"
        );
        const service__link = gsap.utils.toArray(
          ".animation_home1_service .service__link p"
        );

        home1_services.forEach((service, i) => {
          gsap.set(
            [
              service__number[i],
              service__title[i],
              service__text[i],
              service__link[i],
            ],
            { opacity: 0, x: -50 }
          );

          const home1ServiceTl = gsap.timeline({
            scrollTrigger: {
              trigger: service,
              start: "top center+=300",
              end: "bottom bottom",
              markers: false,
            },
          });

          home1ServiceTl.to(service__number[i], {
            x: 0,
            opacity: 1,
            duration: 1.2,
          });
          home1ServiceTl.to(
            service__title[i],
            { x: 0, opacity: 1, duration: 1.2 },
            "-=1"
          );
          home1ServiceTl.to(
            service__text[i],
            { x: 0, opacity: 1, duration: 1.2 },
            "-=1"
          );
          home1ServiceTl.to(
            service__link[i],
            { x: 0, opacity: 1, duration: 1.2 },
            "-=1"
          );
        });
      });

      return () => tHero.revert();
    }
  }, []);

  return (
    <section className="service__area pt-110 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
            <div className="sec-title-wrapper wrap">
              <h3 className="sec-title title-anim">
                {"What "} <br /> We Help With
              </h3>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
            <div className="service__top-text text-anim">
              <p>
                From <span> EXW to FOB, Door-to-Door, and Customs</span>, we
                help you choose the right freight method — by air or sea — and
                the right partners to make it happen.
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
            <div className="service__top-btn">
              <div className="btn_wrapper">
                <Link
                  href="/service"
                  className="btn-item wc-btn-secondary btn-hover"
                >
                  <span></span> View <br />
                  all services <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="service__list-wrapper">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="service__list" ref={serviceList}>
                {serviceData?.map((service, index) => (
                  <Link
                    key={service.id}
                    href={`/service/${service.slug}`}
                    className={activeList === service.id ? "active" : ""}
                    data-service={service.id}
                  >
                    <div className="service__item animation_home1_service">
                      <div className="service__number">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">{service.title}</h4>
                      </div>
                      <div className="service__text">
                        <p>{service.description}</p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
