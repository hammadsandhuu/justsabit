import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialImage from "../../../public/assets/imgs/testimonial/1.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Image from "next/image";
const testimonials = [
  {
    title: "Diplomatic Car Shipping (Gulf Style)",
    text: "SABIT guided us through every detail of the diplomatic vehicle shipping process. From documentation to agent selection, everything was handled with discretion and precision. It was the smoothest experience we've had in recent years.",
    author: "Diplomatic Affairs Contact",
    role: "GCC Region",
  },
  {
    title: "Construction Project Support (KSA Vision 2030)",
    text: "We had time-sensitive shipments heading to our site outside Riyadh. SABIT matched us with a reliable agent and stayed in the loop the entire time. We didn't need to chase updates — they were already two steps ahead.",
    author: "Project Director",
    role: "Construction Sector (KSA)",
  },
  {
    title: "Luxury Furniture Shipment (UAE Residential Project)",
    text: "In the past, we dealt with rust and moisture damage during long-haul moves. SABIT not only helped us prep the shipment properly, they also connected us with an agent who actually followed those recommendations. Every piece arrived in perfect condition.",
    author: "Procurement Lead",
    role: "Private Villas Contractor (UAE)",
  },
  {
    title: "Cold Chain F&B Logistics (Germany > KSA)",
    text: "We move premium food products into Saudi Arabia and temperature control is non-negotiable. SABIT helped us plan around the climate and introduced us to a cold chain partner who delivered with zero temp deviations.",
    author: "Supply Chain Manager",
    role: "Gourmet Exports (Germany)",
  },
  {
    title: "Pharmaceutical Compliance Freight (France)",
    text: "The SABIT team took our compliance concerns seriously. They recommended a certified partner who understood pharma documentation inside out. We didn't have to babysit the process — which says a lot in this industry.",
    author: "Logistics Manager",
    role: "Healthcare Distribution (France)",
  },
  {
    title: "Hospitality Site Logistics (Italy > Saudi Project)",
    text: "Coordinating delivery phases to a hotel construction site is a juggling act. SABIT helped us plan it in waves, align it with our contractors, and brought in a logistics team that understood both Saudi customs and EU standards.",
    author: "Procurement Coordinator",
    role: "Hospitality Group (Europe–KSA)",
  },
  {
    title: "Diplomatic / Government Vehicle Freight (Africa > GCC)",
    text: "Thanks to SABIT, we were able to move a government vehicle with full compliance and minimal downtime. The agent they referred was experienced with sensitive freight, and SABIT stayed involved until it was signed off and cleared.",
    author: "Senior Administrator",
    role: "North African Embassy",
  },
  {
    title: "Car Shipping for HNWI (UK > KSA)",
    text: "The process was incredibly smooth. SABIT helped prep the paperwork, advised on shipping methods, and introduced me to a trusted shipper. My vehicle arrived early and in perfect condition. You don't get that kind of service often.",
    author: "Private Collector",
    role: "UK–Saudi Corridor",
  },
  {
    title: "Urgent Medical Supplies Freight (Asia > KSA)",
    text: "We had to move critical medical equipment into the Gulf on short notice. SABIT worked fast, lined up a dependable agent, and kept us looped in without overloading us with noise. The shipment cleared quickly and arrived ahead of schedule.",
    author: "Regional Medical Ops Lead",
    role: "Global NGO",
  },
  {
    title: "E-Commerce Freight Advisory (SME Brand)",
    text: "I run a growing e-commerce store, and SABIT helped me break the cycle of unreliable shipping. They referred me to a partner who understands my business, and since then, things just run better — less back and forth, faster turnarounds, no hidden surprises.",
    author: "Founder",
    role: "Online Retail Brand",
  },
];
const TestimonialSection = () => {
  return (
    <>
      <section className="testimonial__area-2">
        <div className="container g-0 line pb-140">
          <span className="line-3"></span>

          <div className="row g-0">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="testimonial__video">
                <Image
                  priority
                  style={{ height: "auto", width: "auto" }}
                  src={testimonialImage}
                  alt="Story Thumbnail"
                  className="w-100"
                />
              </div>
            </div>

            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="testimonial__slider-wrapper-2">
                <div className="testimonial__slider">
                  <Swiper
                    modules={[FreeMode, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    freeMode={true}
                    loop={true}
                    speed={2000}
                    navigation={{
                      nextEl: ".next-button",
                      prevEl: ".prev-button",
                    }}
                  >
                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Amazing digital service
                          </h2>
                          <p className="testimonial__text-2">
                            We were there right at the beginning just when the
                            concept for search engine optimisation taking office
                            and the full of internet. So wewe’ve grown to employ
                            than 50 talented specialists with diverse
                            experiences and broad skill sets of huge markers.
                          </p>
                          <h3 className="testimonial__author">Adam Syndera</h3>
                          <h4 className="testimonial__role">CEO, Agency</h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide ">
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Amazing digital service
                          </h2>
                          <p className="testimonial__text-2">
                            We were there right at the beginning just when the
                            concept for search engine optimisation taking office
                            and the full of internet. So wewe’ve grown to employ
                            than 50 talented specialists with diverse
                            experiences and broad skill sets of huge markers.
                          </p>
                          <h3 className="testimonial__author">Adam Syndera</h3>
                          <h4 className="testimonial__role">CEO, Agency</h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Amazing digital service
                          </h2>
                          <p className="testimonial__text-2">
                            We were there right at the beginning just when the
                            concept for search engine optimisation taking office
                            and the full of internet. So wewe’ve grown to employ
                            than 50 talented specialists with diverse
                            experiences and broad skill sets of huge markers.
                          </p>
                          <h3 className="testimonial__author">Adam Syndera</h3>
                          <h4 className="testimonial__role">CEO, Agency</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="testimonial__pagination">
                  <div style={{ cursor: "pointer" }} className="prev-button">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <div style={{ cursor: "pointer" }} className="next-button">
                    <i className="fa-solid fa-arrow-left"></i>
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

export default TestimonialSection;
