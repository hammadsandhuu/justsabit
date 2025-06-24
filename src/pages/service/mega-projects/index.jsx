import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceHeroSection from "@/components/service/ServiceHeroSeection";
import ServiceDetailSection from "@/components/service/ServiceDetailsService";
import CTASection from "@/components/cta/CtaSection";

const MegaProjects = () => {
  const heroData = {
    title: "Mega Project Logistics",
    sections: [
      {
        subtitle: "Built for Scale, Backed by Precision",
        paragraph:
          "From offshore rigs and power plants to new city districts and public infrastructure — we handle high-volume, time-sensitive, and regulation-heavy logistics with unmatched oversight.",
      },
      {
        subtitle: "Who We Serve",
        paragraph:
          "Perfect for engineering firms, EPC contractors, and energy developers who need consistent, large-scale freight movement with full regulatory compliance.",
      },
    ],
    features: [
      "Heavy cargo & project freight",
      "Customs & regulatory handling",
      "On-site delivery coordination",
      "Air, sea & multimodal transport",
      "Compliance with global standards",
      "Centralized logistics control",
    ],
    images: [
      {
        src: "/assets/imgs/service/door-to-door/6.png", // Reused
        alt: "Mega Projects Logistics 1",
        col: 8,
      },
      {
        src: "/assets/imgs/service/door-to-door/2.png", // Reused
        alt: "Mega Projects Logistics 2",
        col: 4,
      },
    ],
  };

  const serviceDetailData = {
    title: "Industrial-Grade Logistics for Complex Mega Projects",
    image: {
      src: "/assets/imgs/service/main.png", // Reused
      alt: "Mega project freight detail",
      width: 960,
    },
    shape: {
      src: "/assets/imgs/icon/shape-6.png", // Reused
      alt: "Decorative shape",
      width: 51,
    },
    paragraphs: [
      "Our Mega Project logistics solutions are engineered for durability and precision. We work with construction managers, engineers, and developers to mobilize equipment, parts, and components across borders with exact timing and heavy-duty compliance.",
      "From oversized components to phased delivery of critical path materials, our systems are made to scale with the project. We also offer embedded logistics teams and site-based coordination when needed.",
    ],
  };

  const faqData = {
    title: "Frequently Asked Questions — Mega Projects",
    imageSrc: "/assets/imgs/faq/4.png", // Reused
    faqItems: [
      {
        question: "Can you handle oversized or overweight shipments?",
        answer:
          "Yes. We specialize in breakbulk, flat rack, and other project freight solutions for oversized loads, including permitting and escorts when required.",
      },
      {
        question: "Do you manage logistics during all project phases?",
        answer:
          "Absolutely. From mobilization and construction to commissioning and maintenance, we offer full-cycle logistics support aligned with your project schedules.",
      },
      {
        question: "What compliance or documentation support do you offer?",
        answer:
          "We handle country-specific permits, customs documents, and safety certifications to ensure smooth transit and on-time delivery every step of the way.",
      },
    ],
  };

  const workflowSteps = [
    {
      titleLine1: "Scope",
      titleLine2: "Analysis",
      description:
        "We review your cargo types, site locations, volume, compliance needs, and scheduling to develop a full-scale logistics blueprint.",
    },
    {
      titleLine1: "Routing &",
      titleLine2: "Permits",
      description:
        "Our team handles global route planning, permit acquisition, and carrier coordination for both standard and non-standard cargo.",
    },
    {
      titleLine1: "Freight",
      titleLine2: "Execution",
      description:
        "We manage sea, air, and land transport using the best carriers and partners for timely and secure delivery.",
    },
    {
      titleLine1: "On-Site &",
      titleLine2: "Final Coordination",
      description:
        "Deliveries are synchronized with site readiness and construction phases — including heavy-lift, craning, and staging support.",
    },
  ];

  return (
    <>
      <Head>
        <title>Mega Project Logistics | Sabit Logistics</title>
        <meta
          name="description"
          content="Scalable, regulation-compliant logistics for large-scale infrastructure, energy, and construction projects worldwide."
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

export default MegaProjects;
