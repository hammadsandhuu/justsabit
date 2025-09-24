import { useEffect } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";

gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

const WorkflowSection = ({ steps }) => {
  // Default data if no steps are passed
  const defaultSteps = [
    {
      step: "step 01",
      number: "01",
      title: "Fill Out a Quick Form",
      desc: "Tell us about your shipment, challenges, and needs. It takes less than 2 minutes.",
    },
    {
      step: "step 02",
      number: "02",
      title: "Book a Free Call",
      desc: "Speak with our advisory team. If we can help, we’ll recommend the next steps.",
    },
    {
      step: "step 03",
      number: "03",
      title: "Trusted Logistics",
      desc: "We connect you with a pre-screened, experienced freight agent suited to your needs.",
    },
  ];

  const data = steps && steps.length > 0 ? steps : defaultSteps;

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".fade_left", { x: -20, opacity: 0 });
        gsap.to(".fade_left", {
          scrollTrigger: {
            trigger: ".fade_left",
            start: "top center+=300",
          },
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
          stagger: {
            each: 0.2,
          },
        });
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <section className="workflow__area">
      <div className="container g-0 line pt-140 pb-140">
        <div className="line-3"></div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="sec-title-wrapper">
              <h2 className="sec-sub-title title-anim">Workflow</h2>
              <h3 className="sec-title title-anim">How We Work</h3>
            </div>
          </div>

          <div className="col-xxl-12 workflow__slider">
            <Swiper
              modules={[FreeMode]}
              spaceBetween={0}
              slidesPerView={1}
              freeMode={true}
              loop={true}
              speed={2000}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="workflow__slide fade_left">
                    <h4 className="workflow__step">{item.step}</h4>
                    <h5 className="workflow__number">{item.number}</h5>
                    <h6 className="workflow__title">{item.title}</h6>
                    <p>{item.desc}</p>
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

export default WorkflowSection;
