import { Accordion } from "react-bootstrap";
import Image from "next/image";

const ServiceDetailsFaq = ({
  title,
  faqItems,
  imageSrc,
  imageAlt = "FAQ Image",
}) => {
  return (
    <section className="faq__area">
      <div className="container g-0 line pb-140">
        <div className="line-3"></div>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="faq__img">
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={imageSrc}
                alt={imageAlt}
                data-speed="auto"
                width={600}
                height={500}
              />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="faq__content">
              <h2 className="faq__title title-anim">{title}</h2>
              <div className="faq__list">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion"
                  id="accordionExample"
                >
                  {faqItems.map((item, index) => (
                    <Accordion.Item
                      eventKey={index.toString()}
                      key={index}
                      className="accordion-item"
                    >
                      <Accordion.Header className="accordion-header">
                        {item.question}
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>{item.answer}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsFaq;
