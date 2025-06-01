import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import dec1 from "../../../public/assets/imgs/1.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";

const disclaimers = [
  {
    title: "General Disclaimer",
    content:
      'SABIT ("We", "Our", "Us") is a platform that connects clients to vetted logistics providers and freight forwarder(s). We are not a shipper, freight forwarder or logistics provider ourselves. Instead, we specialize in qualifying clients and connecting them with appropriate service providers based on their needs. SABIT is not involved in the physical transportation, customs clearance, or handling of goods.',
  },
  {
    title: "Our Role",
    content:
      "SABIT serves as an intermediary platform that helps clients navigate the logistics and shipping process. While we facilitate connections with freight forwarder(s) and logistics service providers, we do not engage directly in shipping, handling, or customs procedures. Any shipping services, documentation, or logistics management will be handled directly by the freight forwarder(s) once a connection is made.",
  },
  {
    title: "Freight Forwarders",
    content:
      'The term "freight forwarder(s)" on this website refers to the logistics professionals who provide the actual transportation, customs clearance, and other essential services for your shipment. SABIT does not engage in any direct freight forwarding services. Our platform connects you to freight forwarder(s) based on your specific needs, which may include a variety of a vetted service provider(s).',
  },
  {
    title: "Discovery Call",
    content:
      "It is important to note that SABIT will recommend specific freight forwarder(s) during a discovery call after qualifying your shipment and business needs. This recommendation is made based on our professional understanding of your logistics requirements, but SABIT does not endorse or affiliate with any particular provider publicly on this website. The final decision and transaction will be between you and the recommended freight forwarder(s).",
  },
  {
    title: "No Direct Freight Forwarding Services",
    content:
      "SABIT does not handle any physical goods, documents, payments, or shipments. We are not involved in the execution of freight forwarding, customs, or logistics services. All contractual and transactional dealings, including payments, customs documents, and final delivery, are to be conducted directly with the freight forwarder(s) recommended during your discovery call.",
  },
  {
    title: "No Financial Transactions or Official Documentation",
    content:
      "SABIT does not process or handle any financial transactions or official shipping documents. This includes bills of lading, invoices, customs documents, and shipping contracts. These are managed directly between you and the freight forwarder(s), once a connection is made through our platform.",
  },
  {
    title: "Limitation of Liability",
    content:
      "While SABIT provides valuable connections to freight forwarder(s) and logistics service providers, SABIT is not liable for the services or outcomes provided by these freight forwarder(s). Any issues, delays, damages, or complications arising from the shipping process, including transport, customs, and delivery, are the responsibility of the freight forwarder(s) you engage with.",
  },
  {
    title: "Service Scope",
    content:
      "The scope of services provided through SABIT is strictly connecting clients with appropriate service providers based on their needs. We are not responsible for managing or controlling the logistics or performance of the shipping process once a freight forwarder(s) is engaged.",
  },
  {
    title: "No Guarantee of Service Results",
    content:
      "SABIT facilitates connections but does not guarantee the outcome of any shipment or transaction. We do not control the actions of freight forwarder(s), and we are not responsible for any delays or issues that arise during the logistics process. Clients should review all agreements directly with the freight forwarder(s) before proceeding with shipments.",
  },
];

const DisclaimerSection = () => {
  return (
    <section className="portfolio__area-2">
      <div className="container g-0 line pt-100 pb-140">
        <div className="row">
          <div className="col-xxl-12">
            <div className="sec-title-wrapper text-anim">
              <div>
                <h2 className="title-anim sec-title-33 text-white">
                  SABIT <span>Disclaimer</span>
                </h2>
              </div>
              <p className="sec-text">
                Important information about our platform and how we operate as a
                logistics intermediary.
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
          {disclaimers.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="portfolio__slide-2">
                <div className="slide-img">
                  <Link href="/portfolio-details">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={dec1}
                      alt={`Disclaimer Slide ${index + 1}`}
                    />
                  </Link>
                </div>
                <div className="slide-content">
                  <h5 className="sec-title w-50 ">
                    <Link href="/portfolio-details">{item.title}</Link>
                  </h5>
                  <p>{item.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination circle-pagination right"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default DisclaimerSection;
