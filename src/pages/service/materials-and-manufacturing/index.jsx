import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceHeroSection from "@/components/service/ServiceHeroSeection";
import ServiceDetailSection from "@/components/service/ServiceDetailsService";
import CTASection from "@/components/cta/CtaSection";

const MaterialsAndManufacturing = () => {
  const heroData = {
    title: "Materials & Manufacturing Logistics",
    sections: [
      {
        subtitle: "Streamlined Raw Materials Supply",
        paragraph:
          "We specialize in transporting raw materials, chemicals, technology infrastructure, and packaging components with reliability and compliance.",
      },
      {
        subtitle: "Who We Serve",
        paragraph:
          "Ideal for manufacturers, suppliers, and tech companies seeking just-in-time delivery and secure handling of sensitive materials.",
      },
    ],
    features: [
      "Secure transport of chemicals and raw materials",
      "Compliance with safety regulations",
      "Timely delivery for manufacturing continuity",
      "Specialized handling and packaging",
      "Global freight solutions",
      "Real-time tracking and visibility",
    ],
    images: [
      {
        src: "/assets/imgs/service/door-to-door/6.png", // Reused
        alt: "Materials and manufacturing logistics 1",
        col: 8,
      },
      {
        src: "/assets/imgs/service/door-to-door/2.png", // Reused
        alt: "Materials and manufacturing logistics 2",
        col: 4,
      },
    ],
  };

  const serviceDetailData = {
    title: "Reliable Logistics for Manufacturing and Materials",
    image: {
      src: "/assets/imgs/service/main.png", // Reused
      alt: "Materials and manufacturing logistics detail",
      width: 960,
    },
    shape: {
      src: "/assets/imgs/icon/shape-6.png", // Reused
      alt: "Decorative shape",
      width: 51,
    },
    paragraphs: [
      "Our logistics solutions ensure your raw materials and components arrive on time and intact, minimizing downtime in your manufacturing processes.",
      "With expertise in handling hazardous materials and complex supply chains, we support manufacturing operations globally with secure, compliant freight management.",
    ],
  };

  const faqData = {
    title: "Frequently Asked Questions — Materials & Manufacturing",
    imageSrc: "/assets/imgs/faq/4.png", // Reused
    faqItems: [
      {
        question: "Can you handle hazardous chemicals?",
        answer:
          "Yes, we have certified processes and equipment for the safe and compliant transport of hazardous materials.",
      },
      {
        question: "Do you offer just-in-time delivery services?",
        answer:
          "Absolutely. We coordinate schedules to support your manufacturing timelines and minimize inventory costs.",
      },
      {
        question: "How do you ensure the security of valuable components?",
        answer:
          "We provide secure packaging, monitored transport, and strict chain-of-custody protocols.",
      },
    ],
  };

  const workflowSteps = [
    {
      titleLine1: "Assessment &",
      titleLine2: "Planning",
      description:
        "Analyzing material types, regulatory needs, and delivery timelines to design an efficient logistics plan.",
    },
    {
      titleLine1: "Packaging &",
      titleLine2: "Handling",
      description:
        "Implementing specialized packaging and handling procedures to protect sensitive and hazardous materials.",
    },
    {
      titleLine1: "Transport &",
      titleLine2: "Tracking",
      description:
        "Coordinating secure transport routes with real-time monitoring and compliance checks.",
    },
    {
      titleLine1: "Delivery &",
      titleLine2: "Support",
      description:
        "Ensuring timely delivery with documentation and support for any last-mile needs.",
    },
  ];

  return (
    <>
      <Head>
        <title>Materials & Manufacturing Logistics | Sabit Logistics</title>
        <meta
          name="description"
          content="Secure, compliant logistics for raw materials, chemicals, tech infrastructure, and packaging components."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <ServiceHeroSection {...heroData} />
          <ServiceDetailsWorkflow steps={workflowSteps} />
          {/* <ServiceDetailSection {...serviceDetailData} /> */}
          <ServiceDetailsFaq
            title={faqData.title}
            faqItems={faqData.faqItems}
            imageSrc={faqData.imageSrc}
          />
          <CTASection />
        </RootLayout>
      </main>
    </>
  );
};

export default MaterialsAndManufacturing;
