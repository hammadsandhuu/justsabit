import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceHeroSection from "@/components/service/ServiceHeroSeection";
import ServiceDetailSection from "@/components/service/ServiceDetailsService";
import CTASection from "@/components/cta/CtaSection";

const OilAndGas = () => {
  const heroData = {
    title: "Oil & Gas Logistics",
    sections: [
      {
        subtitle: "Energy Supply Chain Experts",
        paragraph:
          "We handle the complex and regulated logistics needs of the oil & gas sector, from upstream equipment transport to refined product distribution — safely and on schedule.",
      },
      {
        subtitle: "Who We Serve",
        paragraph:
          "Ideal for refineries, energy companies, drilling contractors, and fuel suppliers requiring a partner who understands hazardous materials, regulatory compliance, and time-critical delivery.",
      },
    ],
    features: [
      "Hazardous materials (HAZMAT) expertise",
      "Heavy & oversized equipment transport",
      "Compliant global shipping",
      "Critical parts & rig resupply",
      "Permits & customs handling",
      "Time-sensitive coordination",
    ],
    images: [
      {
        src: "/assets/imgs/service/door-to-door/6.png", // Reused
        alt: "Oil and Gas Logistics 1",
        col: 8,
      },
      {
        src: "/assets/imgs/service/door-to-door/2.png", // Reused
        alt: "Oil and Gas Logistics 2",
        col: 4,
      },
    ],
  };

  const serviceDetailData = {
    title: "Energy-Grade Logistics for Oil & Gas Operations",
    image: {
      src: "/assets/imgs/service/main.png", // Reused
      alt: "Oil and Gas logistics detail",
      width: 960,
    },
    shape: {
      src: "/assets/imgs/icon/shape-6.png", // Reused
      alt: "Decorative shape",
      width: 51,
    },
    paragraphs: [
      "From oil rigs to fuel terminals, our logistics services are built for mission-critical, compliant energy freight. We transport drilling components, refinery parts, HAZMAT cargo, and sensitive fuels across land and sea with precision.",
      "We know downtime is costly. That’s why we coordinate every shipment to support your operational uptime — from rig restocking to fuel lane replenishment and emergency part dispatch.",
    ],
  };

  const faqData = {
    title: "Frequently Asked Questions — Oil & Gas",
    imageSrc: "/assets/imgs/faq/4.png", // Reused
    faqItems: [
      {
        question: "Can you transport hazardous materials?",
        answer:
          "Yes. We are trained and certified in HAZMAT logistics and follow strict international regulations for handling, labeling, and documentation.",
      },
      {
        question: "Do you provide support to remote drilling sites?",
        answer:
          "Absolutely. We deliver to offshore platforms, desert rigs, and remote installations with precise coordination and resupply planning.",
      },
      {
        question:
          "How do you ensure compliance with energy-sector regulations?",
        answer:
          "Our team stays current with IATA, IMDG, ADR, and other regulatory frameworks to ensure every shipment is legally and safely transported.",
      },
    ],
  };

  const workflowSteps = [
    {
      titleLine1: "Cargo",
      titleLine2: "Assessment",
      description:
        "We evaluate the materials, size, hazard class, and delivery urgency to determine the safest and most efficient logistics strategy.",
    },
    {
      titleLine1: "Permit &",
      titleLine2: "Compliance",
      description:
        "We secure the necessary permits and ensure compliance with local and international laws — including customs and HAZMAT documentation.",
    },
    {
      titleLine1: "Specialized",
      titleLine2: "Transport",
      description:
        "We arrange specialized freight solutions: tankers, flatbeds, containers, or chartered flights for urgent components.",
    },
    {
      titleLine1: "Monitoring &",
      titleLine2: "Delivery",
      description:
        "Real-time tracking, direct communication, and proactive issue resolution until cargo is delivered and signed off.",
    },
  ];

  return (
    <>
      <Head>
        <title>Oil & Gas Logistics | Sabit Logistics</title>
        <meta
          name="description"
          content="End-to-end logistics for the oil & gas industry — including HAZMAT, critical resupply, heavy cargo, and global compliance."
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

export default OilAndGas;
