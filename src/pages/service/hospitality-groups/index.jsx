import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceHeroSection from "@/components/service/ServiceHeroSeection";
import ServiceDetailSection from "@/components/service/ServiceDetailsService";
import CTASection from "@/components/cta/CtaSection";

const HospitalityGroups = () => {
  const heroData = {
    title: "Hospitality Logistics Solutions",
    sections: [
      {
        subtitle: "Tailored Freight for the Hospitality World",
        paragraph:
          "From pre-opening setups to ongoing resupply, we handle furniture, fixtures, amenities, and sensitive hotel assets with total coordination — across continents and construction schedules.",
      },
      {
        subtitle: "Who We Serve",
        paragraph:
          "Built for global hotel chains, resort developers, boutique properties, and hospitality design firms who demand reliable, deadline-driven logistics from origin to installation.",
      },
    ],
    features: [
      "FF&E shipping & setup support",
      "Time-sensitive delivery coordination",
      "White-glove service available",
      "Sea, air & road freight expertise",
      "Global vendor consolidation",
      "Customs & compliance support",
    ],
    images: [
      {
        src: "/assets/imgs/service/door-to-door/6.png", // Reused
        alt: "Hospitality Logistics 1",
        col: 8,
      },
      {
        src: "/assets/imgs/service/door-to-door/2.png", // Reused
        alt: "Hospitality Logistics 2",
        col: 4,
      },
    ],
  };

  const serviceDetailData = {
    title: "Seamless Freight for Global Hospitality Projects",
    image: {
      src: "/assets/imgs/service/main.png", // Reused
      alt: "Hospitality logistics details",
      width: 960,
    },
    shape: {
      src: "/assets/imgs/icon/shape-6.png", // Reused
      alt: "Decorative shape",
      width: 51,
    },
    paragraphs: [
      "We specialize in hospitality logistics from project start to grand opening — helping hotel brands and interior teams move furnishings, décor, electronics, and back-of-house systems efficiently and securely.",
      "Our services are tailored to strict timelines, with synchronized vendor pickups, consolidation points, and delivery windows that align with project buildouts and on-site installation crews.",
    ],
  };

  const faqData = {
    title: "Frequently Asked Questions — Hospitality Groups",
    imageSrc: "/assets/imgs/faq/4.png", // Reused
    faqItems: [
      {
        question:
          "Can you manage large FF&E shipments across multiple vendors?",
        answer:
          "Yes. We consolidate items from multiple manufacturers, ensure proper packing, and deliver in sync with project timelines, whether it's local or international.",
      },
      {
        question: "Do you offer white-glove delivery or on-site coordination?",
        answer:
          "Absolutely. We provide white-glove handling for fragile, high-value items and can align with installation contractors and designers on the ground.",
      },
      {
        question:
          "How do you handle delays in construction or last-minute changes?",
        answer:
          "We offer storage, phased shipping, and flexible delivery rescheduling to accommodate shifting construction timelines or vendor availability.",
      },
    ],
  };

  const workflowSteps = [
    {
      titleLine1: "Project",
      titleLine2: "Planning",
      description:
        "We work with your procurement and operations teams to develop a shipping and delivery roadmap based on opening dates and vendor locations.",
    },
    {
      titleLine1: "Consolidation &",
      titleLine2: "Coordination",
      description:
        "We coordinate with all suppliers to consolidate cargo, manage quality checks, and prep for international or domestic transport.",
    },
    {
      titleLine1: "Freight &",
      titleLine2: "Customs Handling",
      description:
        "Our freight experts ensure secure shipping and customs clearance across borders — air, sea, or land.",
    },
    {
      titleLine1: "Final Mile &",
      titleLine2: "Installation Support",
      description:
        "We deliver directly to property sites and offer coordination with on-site crews for unloading, placement, and post-install audits.",
    },
  ];

  return (
    <>
      <Head>
        <title>Hospitality Freight Solutions | Sabit Logistics</title>
        <meta
          name="description"
          content="Freight and logistics for global hotels, resorts, and boutique hospitality groups. From FF&E to final mile delivery — we’ve got it covered."
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

export default HospitalityGroups;
