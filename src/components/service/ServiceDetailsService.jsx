import Image from "next/image";

const ServiceDetailSection = ({ title, image, shape, paragraphs = [] }) => {
  return (
    <section className="service__detail">
      <div className="container g-0 line pb-140">
        <div className="line-3"></div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="sec-title-wrapper">
              <h2 className="sec-title title-anim">{title}</h2>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
            <div className="service__detail-circle">
              <span></span>
            </div>
          </div>
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
            <div className="service__detail-img">
              {image?.src && (
                <Image
                  priority
                  height={1000}
                  width={image.width || 960}
                  style={{ height: "auto" }}
                  src={image.src}
                  alt={image.alt || "Service image"}
                />
              )}
              {shape?.src && (
                <Image
                  priority
                  height={1000}
                  width={shape.width || 51}
                  style={{ height: "auto" }}
                  src={shape.src}
                  alt={shape.alt || "Shape image"}
                  className="sd-shape"
                />
              )}
            </div>
            <div className="service__detail-content">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;
