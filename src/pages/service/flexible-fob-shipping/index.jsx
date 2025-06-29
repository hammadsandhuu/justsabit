import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceHeroSection from "@/components/service/ServiceHeroSeection";
import ServiceDetailSection from "@/components/service/ServiceDetailsService";
import CTASection from "@/components/cta/CtaSection";

const Index = () => {
  const heroData = {
    title: "Port-to-Port Shipping Option",
    sections: [
      {
        subtitle: "Your Role",
        paragraph:
          "You or your supplier handles local transportation, documentation, and customs clearance at both origin and destination.",
      },
      {
        subtitle: "Our Role",
        paragraph:
          "We help coordinate with your supplier to catch the vessel or aircraft, and step in fully once your cargo is loaded onto the vessel or aircraft, managing secure and efficient transport to the destination port or airport",
      },
      {
        subtitle: "Who Is It For?",
        paragraph:
          "Perfect for businesses with trusted on-ground teams that want control over pre-loading logistics while outsourcing long haul international transport.",
      },
    ],
    features: [
      "Shared responsibilities",
      "Cost transparency",
      "Local team control",
      "Negotiation leverage",
      "Port-to-port delivery",
      "Custom clearance flexibility",
    ],
    images: [
      {
        src: "/assets/imgs/service/fob/1.png",
        alt: "Development Image 1",
        col: 8,
      },
      {
        src: "/assets/imgs/service/fob/2.png",
        alt: "Development Image 2",
        col: 4,
      },
    ],
  };
  const serviceDetailData = {
    title:
      "We Turn Complex Global Shipping Into Simple, Clear, Manageable Steps",
    image: {
      src: "/assets/imgs/service/main.png",
      alt: "Service detail image",
      width: 960,
    },
    shape: {
      src: "/assets/imgs/icon/shape-6.png",
      alt: "Service shape image",
      width: 51,
    },
    paragraphs: [
      "Global shipping often feels complicated and risky. Our FOB service simplifies it by letting you manage local logistics while we handle international freight. This clear division of responsibility ensures smoother operations, fewer surprises, and better control over your supply chain.",
      "We guide you through every step, from cargo readiness to final delivery. Our structured process minimizes confusion and keeps your team aligned. With transparent communication and expert handling, you can confidently move goods worldwide without the usual shipping stress or delays.",
    ],
  };
  const faqData = {
    title: "Frequently Asked Questions — FOB Shipping",
    imageSrc: "/assets/imgs/faq/1.png",
    faqItems: [
      {
        question: "What does FOB shipping include?",
        answer:
          "We arrange the international transport of your cargo once it’s loaded onto the vessel or aircraft. That includes securing space and handling sea/air freight from port to port or airport to airport.",
      },
      {
        question: "What am I responsible for under FOB?",
        answer:
          "You’re responsible for origin-side logistics: getting the cargo to the departure port, including inland transport and customs clearance at both origin and destination.",
      },
      {
        question: "Who is this service best for?",
        answer:
          "FOB works well if you already have trusted local contacts for ground transport and customs — and just need secure international shipping in between.",
      },
      {
        question: "Can I switch to EXW or Door-to-Door later?",
        answer:
          "Yes. If you want us to manage more steps of the process later, we can help upgrade your service accordingly.",
      },
    ],
  };
  const workflowSteps = [
    {
      titleLine1: "What's",
      titleLine2: "Included",
      description:
        "Under FOB (Free on Board) terms, your supplier handles delivery to the origin port, and from there — our vetted agents take over. We manage the rest.",
    },
    {
      titleLine1: "Booking & ",
      titleLine2: "Documentation",
      description:
        "Once you confirm your shipment details, we coordinate space with the right airline or steamship line. We also double-check all commercial documents to ensure compliance with export/import regulations.",
    },
    {
      titleLine1: "International ",
      titleLine2: "Freight Movement",
      description:
        "From the origin port to the destination port — our agents handle the entire shipping leg. Whether it’s an airfreight pallet or a full ocean container, we ensure secure, compliant movement with proactive updates throughout.",
    },
    {
      titleLine1: "Real-Time ",
      titleLine2: "Visibility",
      description:
        "You’ll receive timely tracking and shipping updates — including vessel/flight departure, arrival ETA, and any possible transit delays. Our goal is to keep you informed and in control at every step.",
    },
  ];

  return (
    <>
      <Head>
        <title>What is Flexible FOB Shipping</title>
        <meta name="description" content="Service Details Dark Description" />
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

export default Index;
