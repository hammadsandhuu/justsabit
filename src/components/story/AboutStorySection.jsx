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
                <h2 className="sec-sub-title title-anim">About</h2>
                <h3 className="sec-title title-anim">Our story</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p className="py-0 my-0">
                    SABIT was built to fix a frustrating truth: Most freight
                    agents overpromise, underdeliver — and disappear when things
                    go wrong.
                  </p>
                  <h5 className="mt-4 mb-2 text-white">
                    We do it differently.
                  </h5>
                  <p className="py-0 my-0">
                    We’re a boutique freight advisory platform that gives you
                    clarity, control, and direct access to proven agents.
                  </p>
                  <h5 className="mt-4 mb-2 text-white">
                    We don’t just book shipments.
                  </h5>
                  <p className="py-0 my-0">
                    We connect you to trusted logistics professionals and help
                    you avoid the mistakes most companies don’t see coming.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Why</h2>
                <h3 className="sec-title title-anim">SABIT Exists?</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                    Our founder saw how often shipments were delayed,
                    mishandled, or miscommunicated — even by big names. Clients
                    were chasing updates. Paying for mistakes. Left in the dark.
                    SABIT was created to give those clients the support they
                    actually deserve.
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
                  <h5 className="mt-4 mb-2 text-white">Boutique Support.</h5>
                  <p className="py-0 my-0">
                    You're not a number. We respond fast, stay on top of your
                    shipments, and advise every step of the way.
                  </p>
                  <h5 className="mt-4 mb-2 text-white">
                    Global Access. Local Control.
                  </h5>
                  <p className="py-0 my-0">
                    We work through trusted agents across China, USA, Europe,
                    and the GCC — while you deal with just one point of contact.
                  </p>
                  <h5 className="mt-4 mb-2 text-white">
                    Built for High Standards.
                  </h5>
                  <p className="py-0 my-0">
                    From diplomats to luxury auto dealers to project managers —
                    we support those who can’t afford freight mistakes.
                  </p>
                  <h5 className="mt-4 mb-2 text-white">
                    No Guesswork. Just Answers.
                  </h5>
                  <p className="py-0 my-0">
                    You ask. We advise. With clarity, transparency, and a
                    clear plan forward.
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
