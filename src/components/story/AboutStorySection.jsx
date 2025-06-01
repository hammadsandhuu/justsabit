import Story1 from "../../../public/assets/imgs/story/1.png";
import Story2 from "../../../public/assets/imgs/story/2.png";
import Story3 from "../../../public/assets/imgs/story/4.png";
import Story4 from "../../../public/assets/imgs/story/3.png";
import Image from "next/image";

const AboutStorySection = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            <div className="from-text">
              from <span>1990</span>
            </div>

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Digital Studio</h2>
                <h3 className="sec-title title-anim">Our story</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p className="py-0 my-0">
                    SABIT was built to solve a frustrating truth: Most
                    suppliers, freight forwarders or shippers overpromise,
                    underdeliver, and vanish when things go wrong.
                  </p>
                  <h5 className="mt-4 mb-2 text-white">
                    We do it differently.
                  </h5>
                  <p className="py-0 my-0">
                    SABIT is your trust logistics advisor – a boutique,
                    high-touch freight support platform that equips you with
                    confidence, full visibility, and control at every step of
                    your supply chain.
                  </p>
                  <h5 className="mt-4 mb-2 text-white">
                    We don’t just book shipments.
                  </h5>
                  <p className="py-0 my-0">
                    We work with a curated network of vetted agents worldwide to
                    ensure nothing falls through the cracks – from pickup to
                    final delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Why</h2>
                <h3 className="sec-title title-anim">SABIT Exist?</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                    Our founder created SABIT after seeing the complexities
                    around shipments being delayed, mishandled, and just how
                    much stress clients were coping with from such poor quality
                    standards. We knew it was time to fix freight forwarding for
                    clients who genuinely deserve more.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">What Makes</h2>
                <h3 className="sec-title title-anim">SABIT Different?</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                    Boutique Touch: You’re not another number, or another
                    shipment. We reply fast, rely fast. We stay on top of
                    updates and give proactive support and solutions – just how
                    you expect. Global Reach, Local Care: We operate through
                    vetted agents in China, USA, Europe, and GCC, managing
                    customs, ports, and transportation – while you just deal
                    with one expert point of contact. High Standard Clients,
                    High Quality Results: We work with diplomats, luxury car
                    owners, project managers, E-commerce brands, beauty brands,
                    and companies who value service over shortcuts. No
                    Guesswork: We guide you every step of the way, with clear
                    answers, strategic oversight, and hands-on coordination.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={300}
                  style={{ height: "auto" }}
                  src={Story1}
                  alt="Story Thumbnail"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="story__img-wrapper img-anim">
                <Image
                  priority
                  width={520}
                  style={{ height: "auto" }}
                  src={Story2}
                  alt="Story Thumbnail"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={230}
                  style={{ height: "auto" }}
                  src={Story3}
                  alt="Story Thumbnail"
                />
                <Image
                  priority
                  width={410}
                  style={{ height: "auto" }}
                  src={Story4}
                  alt="Story Thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStorySection;
