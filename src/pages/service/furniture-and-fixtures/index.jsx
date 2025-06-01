import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceHeroSection from "@/components/service/ServiceHeroSeection";
import ServiceDetailSection from "@/components/service/ServiceDetailsService";
import CTASection from "@/components/cta/CtaSection";

const FurnitureAndFixtures = () => {
  const heroData = {
    title: "Furniture & Fixtures Logistics",
    sections: [
      {
        subtitle: "White-Glove Service",
        paragraph:
          "We offer premium transport and consolidation solutions tailored for furniture brands, suppliers, and large interior projects, ensuring your goods arrive pristine.",
      },
      {
        subtitle: "Who We Serve",
        paragraph:
          "Perfect for manufacturers, retailers, and interior designers who require careful handling, assembly support, and seamless delivery coordination.",
      },
    ],
    features: [
      "White-glove delivery",
      "Assembly & installation support",
      "Consolidation services",
      "Custom packaging",
      "Damage protection",
      "Real-time shipment tracking",
    ],
    images: [
      {
        src: "/assets/imgs/service/door-to-door/6.png", // Reused
        alt: "Furniture logistics 1",
        col: 8,
      },
      {
        src: "/assets/imgs/service/door-to-door/2.png", // Reused
        alt: "Furniture logistics 2",
        col: 4,
      },
    ],
  };

  const serviceDetailData = {
    title: "Premium Logistics for Furniture and Fixtures",
    image: {
      src: "/assets/imgs/service/main.png", // Reused
      alt: "Furniture and fixtures logistics detail",
      width: 960,
    },
    shape: {
      src: "/assets/imgs/icon/shape-6.png", // Reused
      alt: "Decorative shape",
      width: 51,
    },
    paragraphs: [
      "Our Furniture & Fixtures logistics service ensures safe, white-glove handling from factory to showroom or project site. We offer careful packaging, consolidation, and installation support tailored to your project’s scale and requirements.",
      "We understand the value of your products and coordinate every step to minimize damage risk, streamline deliveries, and keep your timelines on track.",
    ],
  };

  const faqData = {
    title: "Frequently Asked Questions — Furniture & Fixtures",
    imageSrc: "/assets/imgs/faq/4.png", // Reused
    faqItems: [
      {
        question: "Do you offer assembly or installation services?",
        answer:
          "Yes, we provide optional assembly and installation services as part of our white-glove delivery offerings.",
      },
      {
        question: "How do you protect fragile or high-value items?",
        answer:
          "We use custom packaging, padding, and secure transport methods to minimize damage during transit.",
      },
      {
        question: "Can you consolidate shipments from multiple suppliers?",
        answer:
          "Absolutely. We specialize in consolidating furniture and fixtures shipments to simplify logistics and reduce costs.",
      },
    ],
  };

  const workflowSteps = [
    {
      titleLine1: "Consultation &",
      titleLine2: "Planning",
      description:
        "We review your project requirements, shipment volume, and delivery sites to craft a tailored logistics plan.",
    },
    {
      titleLine1: "Packaging &",
      titleLine2: "Consolidation",
      description:
        "Custom packaging and shipment consolidation minimize handling and protect your items in transit.",
    },
    {
      titleLine1: "White-Glove",
      titleLine2: "Transport",
      description:
        "Specialized vehicles and trained handlers ensure your furniture and fixtures arrive safely and on time.",
    },
    {
      titleLine1: "Delivery &",
      titleLine2: "Installation",
      description:
        "We coordinate delivery timing, unload carefully, and offer installation support if requested.",
    },
  ];

  return (
    <>
      <Head>
        <title>Furniture & Fixtures Logistics | Sabit Logistics</title>
        <meta
          name="description"
          content="White-glove logistics and consolidation services for furniture brands, suppliers, and interior design projects."
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

export default FurnitureAndFixtures;
