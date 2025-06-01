const ServiceDetailsWorkflow = ({ steps }) => {
  return (
    <section className="workflow__area-6">
      <div className="container g-0 line pb-130">
        <div className="line-3"></div>
        <div className="workflow__wrapper-6">
          <div className="row">
            {steps.map((step, index) => (
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3" key={index}>
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {step.titleLine1} <br />
                    {step.titleLine2}
                  </h6>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsWorkflow;
