import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceHeroSection from "@/components/service/ServiceHeroSeection";
import ServiceDetailSection from "@/components/service/ServiceDetailsService";
import CTASection from "@/components/cta/CtaSection";

const FoodAndCommodities = () => {
  const heroData = {
    title: "Food & Commodities Logistics",
    sections: [
      {
        subtitle: "Precision in Every Shipment",
        paragraph:
          "From grains and packaged foods to perishables and FMCG products, we provide specialized handling and timely delivery to keep your supply chain fresh and reliable.",
      },
      {
        subtitle: "Who We Serve",
        paragraph:
          "Ideal for food producers, distributors, retailers, and FMCG brands that require temperature-controlled, compliant, and efficient freight management.",
      },
    ],
    features: [
      "Cold chain management",
      "Perishable goods handling",
      "Customized packaging solutions",
      "Air and sea freight",
      "Compliance with food safety standards",
      "Real-time tracking & monitoring",
    ],
    images: [
      {
        src: "/assets/imgs/service/door-to-door/6.png", // Reused
        alt: "Food and Commodities Logistics 1",
        col: 8,
      },
      {
        src: "/assets/imgs/service/door-to-door/2.png", // Reused
        alt: "Food and Commodities Logistics 2",
        col: 4,
      },
    ],
  };

  const serviceDetailData = {
    title: "Reliable Logistics for Food and FMCG Products",
    image: {
      src: "/assets/imgs/service/main.png", // Reused
      alt: "Food and commodities logistics detail",
      width: 960,
    },
    shape: {
      src: "/assets/imgs/icon/shape-6.png", // Reused
      alt: "Decorative shape",
      width: 51,
    },
    paragraphs: [
      "Our food and commodities logistics services ensure your products maintain quality from origin to destination. We specialize in cold chain logistics, quick transit, and packaging tailored to sensitive and perishable items.",
      "Whether you’re shipping rice, frozen goods, or fast-moving consumer products, our end-to-end management and compliance with international food safety regulations keep your supply chain efficient and dependable.",
    ],
  };

  const faqData = {
    title: "Frequently Asked Questions — Food & Commodities",
    imageSrc: "/assets/imgs/faq/4.png", // Reused
    faqItems: [
      {
        question: "Do you offer temperature-controlled shipping?",
        answer:
          "Yes, we provide cold chain logistics including refrigerated containers, temperature monitoring, and specialized packaging.",
      },
      {
        question: "How do you handle compliance with food safety regulations?",
        answer:
          "We adhere strictly to global food safety standards and documentation requirements to ensure your shipments meet all regulatory demands.",
      },
      {
        question: "Can you support rush or emergency shipments?",
        answer:
          "Absolutely. We offer expedited air freight options and 24/7 monitoring for time-sensitive deliveries.",
      },
    ],
  };

  const workflowSteps = [
    {
      titleLine1: "Product",
      titleLine2: "Assessment",
      description:
        "We evaluate your product’s specific handling, temperature, and packaging needs to design the best logistics plan.",
    },
    {
      titleLine1: "Routing &",
      titleLine2: "Packaging",
      description:
        "Selecting optimal routes and customized packaging solutions to maintain product integrity and freshness.",
    },
    {
      titleLine1: "Shipment",
      titleLine2: "Execution",
      description:
        "Coordinating air and sea freight with temperature monitoring and compliance checks throughout transit.",
    },
    {
      titleLine1: "Delivery &",
      titleLine2: "Verification",
      description:
        "Final delivery with quality checks, temperature logs, and real-time updates to ensure safe receipt.",
    },
  ];

  return (
    <>
      <Head>
        <title>Food & Commodities Logistics | Sabit Logistics</title>
        <meta
          name="description"
          content="Specialized logistics for food, perishables, and FMCG products with cold chain management and timely delivery."
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

export default FoodAndCommodities;
