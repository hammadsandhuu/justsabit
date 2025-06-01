import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceHeroSection from "@/components/service/ServiceHeroSeection";
import ServiceDetailSection from "@/components/service/ServiceDetailsService";
import CTASection from "@/components/cta/CtaSection";

const DiplomaticMissions = () => {
  const heroData = {
    title: "Diplomatic Missions Logistics",
    sections: [
      {
        subtitle: "Specialized, Secure, and Discreet",
        paragraph:
          "We provide sensitive logistics support for embassies, consulates, and government agencies. Our services cover documentation, customs protocols, and international transport — all handled with utmost confidentiality.",
      },
      {
        subtitle: "Who We Serve",
        paragraph:
          "Perfect for diplomatic posts, defense attachés, international delegations, and government-backed operations that require precision, security, and compliance.",
      },
    ],
    features: [
      "Discreet handling & secure transport",
      "Customs clearance for diplomatic cargo",
      "Air and sea freight options",
      "End-to-end compliance",
      "24/7 mission-critical support",
      "Confidential documentation management",
    ],
    images: [
      {
        src: "/assets/imgs/service/door-to-door/6.png", // Reused
        alt: "Diplomatic Mission Logistics 1",
        col: 8,
      },
      {
        src: "/assets/imgs/service/door-to-door/2.png", // Reused
        alt: "Diplomatic Mission Logistics 2",
        col: 4,
      },
    ],
  };

  const serviceDetailData = {
    title: "Mission-Ready Logistics — Trusted by Governments",
    image: {
      src: "/assets/imgs/service/main.png", // Reused
      alt: "Diplomatic logistics support",
      width: 960,
    },
    shape: {
      src: "/assets/imgs/icon/shape-6.png", // Reused
      alt: "Decorative shape",
      width: 51,
    },
    paragraphs: [
      "Sabit’s diplomatic logistics service is built on trust, discretion, and global compliance. From sensitive cargo to routine diplomatic pouch delivery, we manage every step with clearance-aware precision and secure transport partners.",
      "We understand the nuances of diplomatic shipments, including tax exemptions, international treaty requirements, and protocol clearances. Our vetted handlers and centralized coordination make this a streamlined, stress-free experience.",
    ],
  };

  const faqData = {
    title: "Frequently Asked Questions — Diplomatic Missions",
    imageSrc: "/assets/imgs/faq/4.png", // Reused
    faqItems: [
      {
        question: "Do you handle classified or sensitive shipments?",
        answer:
          "Yes. We follow strict protocols for secure and discreet transport, including working with authorized handlers and ensuring documentation is sealed and tracked at all times.",
      },
      {
        question: "Can you manage customs for diplomatic cargo?",
        answer:
          "Absolutely. We specialize in diplomatic exemption handling and provide support to ensure compliance with international agreements and host country regulations.",
      },
      {
        question: "Is there support available for urgent deliveries?",
        answer:
          "Yes. We offer mission-critical response capabilities and can arrange urgent international transport with appropriate government-level clearances.",
      },
    ],
  };

  const workflowSteps = [
    {
      titleLine1: "Request",
      titleLine2: "Initiation",
      description:
        "We receive your mission request and assess the nature of the cargo, sensitivity level, and delivery protocol.",
    },
    {
      titleLine1: "Secure",
      titleLine2: "Preparation",
      description:
        "Our team prepares the cargo, validates documents, and implements chain-of-custody procedures as required.",
    },
    {
      titleLine1: "Regulatory",
      titleLine2: "Clearance",
      description:
        "We manage exemptions, treaties, and customs approvals for a frictionless international or local transit.",
    },
    {
      titleLine1: "Final",
      titleLine2: "Delivery",
      description:
        "Shipments are delivered with confirmation and handled in accordance with diplomatic protocol and clearance procedures.",
    },
  ];

  return (
    <>
      <Head>
        <title>Diplomatic Logistics | Sabit Logistics</title>
        <meta
          name="description"
          content="Secure and discreet logistics for embassies, consulates, and government agencies. Trusted for sensitive, time-critical missions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <ServiceHeroSection {...heroData} />
          <ServiceDetailsWorkflow steps={workflowSteps} />
          <ServiceDetailSection {...serviceDetailData} />
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

export default DiplomaticMissions;
