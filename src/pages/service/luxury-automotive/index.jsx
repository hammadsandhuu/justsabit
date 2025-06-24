import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceHeroSection from "@/components/service/ServiceHeroSeection";
import ServiceDetailSection from "@/components/service/ServiceDetailsService";
import CTASection from "@/components/cta/CtaSection";

const LuxuryAutomotive = () => {
  const heroData = {
    title: "Luxury Automotive Logistics",
    sections: [
      {
        subtitle: "Boutique Shipping for Fine Vehicles",
        paragraph:
          "Whether it’s a one-of-a-kind classic or a showroom-ready fleet, we manage the entire logistics process with white-glove precision — including enclosed transport, customs, and real-time coordination.",
      },
      {
        subtitle: "Who We Serve",
        paragraph:
          "Designed for dealerships, manufacturers, collectors, and VIP clients who expect nothing less than perfection in the handling and care of their vehicles.",
      },
    ],
    features: [
      "Enclosed international & domestic transport",
      "Customs compliance",
      "Dedicated vehicle handlers",
      "Collector-grade care",
      "Fleet & individual logistics",
      "Door-to-door coordination",
    ],
    images: [
      {
        src: "/assets/imgs/service/door-to-door/6.png", // same as door-to-door
        alt: "Luxury Vehicle Shipping 1",
        col: 8,
      },
      {
        src: "/assets/imgs/service/door-to-door/2.png", // same as door-to-door
        alt: "Luxury Vehicle Shipping 2",
        col: 4,
      },
    ],
  };

  const serviceDetailData = {
    title: "Specialized Vehicle Logistics with White-Glove Precision",
    image: {
      src: "/assets/imgs/service/main.png", // same as door-to-door
      alt: "Luxury automotive shipping",
      width: 960,
    },
    shape: {
      src: "/assets/imgs/icon/shape-6.png", // same as door-to-door
      alt: "Decorative shape",
      width: 51,
    },
    paragraphs: [
      "We offer tailored logistics solutions for high-value vehicles — from enclosed international transport to seamless local moves. Our team coordinates every leg of the journey with the utmost discretion and precision.",
      "Your vehicles are more than just cargo — they’re assets. We assign specialized handlers, vetted transporters, and real-time tracking to guarantee safe, damage-free delivery for every mile of the journey.",
    ],
  };

  const faqData = {
    title: "Frequently Asked Questions — Luxury Automotive",
    imageSrc: "/assets/imgs/faq/4.png", // same as door-to-door
    faqItems: [
      {
        question: "Do you offer enclosed transport for high-value cars?",
        answer:
          "Absolutely. All luxury and collectible vehicles are shipped in enclosed carriers to ensure complete protection from the elements and road debris.",
      },
      {
        question: "Can you handle international customs for vehicles?",
        answer:
          "Yes. We specialize in cross-border and overseas vehicle shipping, including customs clearance and paperwork for both imports and exports.",
      },
      {
        question: "Is the transport insured?",
        answer:
          "Every shipment is insured, and we offer additional coverage for high-value or irreplaceable vehicles upon request.",
      },
    ],
  };

  const workflowSteps = [
    {
      titleLine1: "Vehicle",
      titleLine2: "Assessment",
      description:
        "We gather detailed specifications, shipping preferences, and location data to plan the right transport solution.",
    },
    {
      titleLine1: "Transport",
      titleLine2: "Coordination",
      description:
        "We select vetted, insured carriers — enclosed or open — and assign handlers with experience in automotive logistics.",
    },
    {
      titleLine1: "Customs &",
      titleLine2: "Documentation",
      description:
        "Our experts manage international paperwork, titles, and customs clearance for a seamless border-crossing process.",
    },
    {
      titleLine1: "Delivery &",
      titleLine2: "Final Handover",
      description:
        "Vehicles are delivered to the final destination with condition checks and client sign-off upon arrival.",
    },
  ];

  return (
    <>
      <Head>
        <title>Luxury Automotive Shipping | Sabit Logistics</title>
        <meta
          name="description"
          content="Boutique logistics for exotic cars, classic vehicles, and fleets. Global and local shipping handled with white-glove care."
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

export default LuxuryAutomotive;
