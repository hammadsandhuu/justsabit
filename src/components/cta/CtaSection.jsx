import Link from "next/link";

const CTASection = () => {
  return (
    <>
      <section className="cta__area">
        <div className="container line pb-110">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content">
                <p className="cta__sub-title">
                  Ready to Fix Your Freight Headaches?
                </p>
                <h2 className="cta__title title-anim">
                  Talk to our advisory team. It’s free and fast <br /> — no
                  pressure.
                </h2>
                <div className="btn_wrapper">
                  <Link
                    href="https://tally.so/r/wb2851"
                    className="wc-btn-primary btn-hover btn-item"
                    target="_blank"
                  >
                    <span></span> Place <br /> your Shipment
                    <i className="fa-solid fa-arrow-right"></i>
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

export default CTASection;
