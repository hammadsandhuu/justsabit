import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Service21 from "../../../public/assets/imgs/service/2/1.png";
import Service22 from "../../../public/assets/imgs/service/2/2.png";
import Service23 from "../../../public/assets/imgs/service/2/3.png";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
const servicesData = [
  {
    id: 2,
    img: Service22,
    title: "Luxury Automotive",
    description:
      "Boutique logistics for dealerships, manufacturers, and private collectors — from global vehicle shipping to local fleet moves.",
    list: [
      "Global vehicle shipping",
      "Fleet management",
      "Collector car transport",
      "Custom logistics plans",
      "Secure handling",
      "Timely delivery",
    ],
  },
  {
    id: 3,
    img: Service23,
    title: "Diplomatic Missions",
    description:
      "Secure, discreet supply chain solutions built to support diplomatic, consular, and government agency needs.",
    list: [
      "High security protocols",
      "Confidential handling",
      "Government compliance",
      "Discreet transport",
      "24/7 monitoring",
      "Trusted partnerships",
    ],
  },
  {
    id: 4,
    img: Service21,
    title: "Hospitality Groups",
    description:
      "End-to-end freight expertise for global hotel brands, luxury resorts, and boutique hospitality properties.",
    list: [
      "Luxury item handling",
      "Customs clearance",
      "Global delivery network",
      "White-glove service",
      "Inventory management",
      "On-time shipments",
    ],
  },
  {
    id: 5,
    img: Service22,
    title: "Mega Projects",
    description:
      "Scalable, compliant logistics systems designed for high-volume infrastructure, construction, and energy developments.",
    list: [
      "Infrastructure logistics",
      "High-volume shipments",
      "Energy sector expertise",
      "Regulatory compliance",
      "Project planning",
      "Risk management",
    ],
  },
  {
    id: 6,
    img: Service23,
    title: "Oil & Gas",
    description:
      "Logistics expertise for fuels, lubricants, and critical energy supply chains.",
    list: [
      "Fuel transport",
      "Lubricant logistics",
      "Critical supply chains",
      "Safety protocols",
      "Emergency response",
      "Regulatory adherence",
    ],
  },
  {
    id: 7,
    img: Service21,
    title: "Food & Commodities",
    description:
      "We move rice, packaged foods, perishables, and FMCG products with precision and care.",
    list: [
      "Perishable goods handling",
      "FMCG transport",
      "Temperature-controlled shipping",
      "Quality assurance",
      "Timely deliveries",
      "Supply chain monitoring",
    ],
  },
  {
    id: 8,
    img: Service22,
    title: "Furniture & Fixtures",
    description:
      "White-glove transport and consolidation services for furniture brands, suppliers, and interior projects.",
    list: [
      "White-glove delivery",
      "Consolidation services",
      "Fragile item handling",
      "Custom packaging",
      "Inventory tracking",
      "On-site assembly support",
    ],
  },
  {
    id: 9,
    img: Service23,
    title: "Materials & Manufacturing",
    description:
      "Logistics for raw materials, chemicals, tech infrastructure, and packaging components.",
    list: [
      "Raw materials transport",
      "Chemical logistics",
      "Packaging components",
      "Supply chain optimization",
      "Inventory management",
      "Quality control",
    ],
  },
];

const Sectors = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation__services2 = gsap.utils.toArray(
          ".animation__service-2 .service__item-2"
        );
        gsap.set(animation__services2, {
          opacity: 0,
          x: -30,
        });

        if (animation__services2) {
          if (device_width < 1023) {
            animation__services2.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 1,
                x: 0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.to(".animation__service-2 .service__item-2", {
              scrollTrigger: {
                trigger: ".animation__service-2",
                start: "top center+=200",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="service__area-2 pt-130 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-text text-anim">
                <p>
                  We are passionate to create connected brands and services, and
                  campaigns to enable stable and successful relationships
                  between businesses and customers.
                </p>
                <div className="btn_wrapper">
                  <Link
                    href="/https://ship-with-sabit.vercel.app/"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span> Book Free <br /> 15-Minute Call
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  Elevating your brand through innovative and reliable logistics
                  solutions
                </h2>
              </div>
            </div>
          </div>

          <div className="row pt-140">
            <div className="col-xxl-12">
              <div className="service__list-2 animation__service-2">
                {servicesData.map(({ id, img, title, description, list }) => (
                  <div key={id} className="service__item-2">
                    <div>
                      <h3 className="service__title-2">{title}</h3>
                      <p>{description}</p>
                      {list.length > 0 && (
                        <ul>
                          {list.map((item, idx) => (
                            <li key={idx}>+ {item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sectors;
