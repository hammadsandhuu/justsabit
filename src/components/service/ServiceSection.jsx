import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const [activeList, setActiveList] = useState(1);
  const serviceList = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let listItem = serviceList.current.children;
      console.log(listItem);
      for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener("mousemove", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveList(parseInt(service_id));

          if (service_id != 1) {
            setActiveList(0);
          }
        });

        listItem[i].addEventListener("mouseout", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveList(parseInt(service_id));
        });
      }

      let tHero = gsap.context(() => {
        let home1_services = gsap.utils.toArray(".animation_home1_service");
        let service__number = gsap.utils.toArray(
          ".animation_home1_service .service__number span"
        );
        let service__title = gsap.utils.toArray(
          ".animation_home1_service .service__title"
        );
        let service__text = gsap.utils.toArray(
          ".animation_home1_service .service__text p"
        );
        let service__link = gsap.utils.toArray(
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

          let home1ServiceTl = gsap.timeline({
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
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
          home1ServiceTl.to(
            service__text[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
          home1ServiceTl.to(
            service__link[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area pt-110 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="sec-title-wrapper wrap">
                <h2 className="sec-sub-title title-anim">
                  {"Don't"} Believe Us?
                </h2>
                <h3 className="sec-title title-anim">
                  {"Here's"} - <br /> Who Have
                </h3>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="service__top-text text-anim">
                <p>
                  From{" "}
                  <span>Door-to-Door, FOB, EXW, to Customs Clearance </span> and
                  Transport—our freight services ensure reliability, efficiency,
                  and control, tailored to meet your business logistics needs.
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
              {/* <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                <div className="service__img-wrapper">
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={doorTodoor}
                    alt="Service Image"
                    className={
                      activeImg == 1
                        ? "service__img img-1 active"
                        : "service__img img-1"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service12}
                    alt="Service Image"
                    className={
                      activeImg == 2
                        ? "service__img img-2 active"
                        : "service__img img-2"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service13}
                    alt="Service Image"
                    className={
                      activeImg == 3
                        ? "service__img img-3 active"
                        : "service__img img-3"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service14}
                    alt="Service Image"
                    className={
                      activeImg == 4
                        ? "service__img img-4 active"
                        : "service__img img-4"
                    }
                  />

                  <span
                    className={
                      activeShape == 1
                        ? "shapes shape-box-1 current"
                        : "shapes shape-box-1"
                    }
                  ></span>
                  <span
                    className={
                      activeShape == 2
                        ? "shapes shape-box-2 current"
                        : "shapes shape-box-2"
                    }
                  ></span>
                  <span
                    className={
                      activeShape == 3
                        ? "shapes shape-box-3 current"
                        : "shapes shape-box-3"
                    }
                  ></span>
                  <span
                    className={
                      activeShape == 4
                        ? "shapes shape-box-4 current"
                        : "shapes shape-box-4"
                    }
                  ></span>
                </div>
              </div> */}
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="service__list" ref={serviceList}>
                  <Link
                    href="/door-to-door"
                    className={activeList == 1 ? "active" : ""}
                    data-service="1"
                  >
                    <div className="service__item animation_home1_service">
                      <div className="service__number">
                        <span>01</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Door-to-Door Sea and Air Shipping
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                          Hassle-free Door-to-Door shipping with all-inclusive,
                          customizable logistics—perfect for busy teams needing
                          efficient freight.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/exw-shipping"
                    className={activeList == 3 ? "active" : ""}
                    data-service="3"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>02</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          EXW Shipping with Origin-Side Support
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                          EXW gives you destination control; we handle pickup,
                          export, and shipping—perfect for importers needing
                          origin support.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/flexible-fob-shipping"
                    className={activeList == 2 ? "active" : ""}
                    data-service="2"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>03</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Flexible FOB <br />
                          Shipping
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                          FOB shipping lets you manage local logistics while we
                          securely handle international port-to-port or airport
                          transport.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/additional-services"
                    className={activeList == 4 ? "active" : ""}
                    data-service="4"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>04</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Reliable Customs & Transport Solutions
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                          We provide customs clearance and transport, ensuring
                          smooth, compliant, timely delivery with tailored
                          vehicle solutions.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
