import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceHeroSection from "@/components/service/ServiceHeroSeection";
import ServiceDetailSection from "@/components/service/ServiceDetailsService";
import CTASection from "@/components/cta/CtaSection";

const Index = () => {
  const heroData = {
    title: "From Supplier Pickup to Port Delivery",
    sections: [
      {
        subtitle: "Our Role",
        paragraph:
          "We manage everything from pickup to export clearance and international transportation.",
      },
      {
        subtitle: "Your Role",
        paragraph:
          "Once the cargo arrives at the destination port, you take over: handling import clearance and delivery at destination.",
      },
      {
        subtitle: "Who Is It For?",
        paragraph:
          "Ideal for businesses that want strong logistics support early on, while keeping flexibility at the destination end. If you’re importing into a familiar market or have your own agent there—EXW is the sweet spot.",
      },
    ],
    features: [
      "Origin pickup",
      "Export handling",
      "Destination flexibility",
      "Transit coordination",
      "Own agent option",
      "Cost savings",
    ],
    images: [
      {
        src: "/assets/imgs/service/exw/1.png",
        alt: "Development Image 1",
        col: 8,
      },
      {
        src: "/assets/imgs/service/exw/4.png",
        alt: "Development Image 2",
        col: 4,
      },
    ],
  };
  const serviceDetailData = {
    title: "Origin to Port, We Simplify Every Step for You",
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
      "We manage every step at the origin, starting with cargo pickup directly from your supplier’s location. Our team handles local transport and ensures all export documentation and customs requirements are met, so your shipment leaves the country without delays or complications.",
      "Once cleared, your goods are shipped efficiently to the destination seaport or airport. This service is ideal for businesses wanting to control the destination process while outsourcing the complex origin side. We simplify Ex Works logistics, giving you flexibility and confidence in every shipment.",
    ],
  };
  const faqData = {
    title: "Frequently Asked Questions — Ex Works (EXW)",
    imageSrc: "/assets/imgs/faq/5.png",
    faqItems: [
      {
        question: "What does EXW mean in shipping?",
        answer:
          "EXW (Ex Works) means the seller makes the goods available at their premises. We handle pickup, origin clearance, and shipping to your destination port or airport.",
      },
      {
        question: "Who handles customs at the destination?",
        answer:
          "You (or your appointed agent) are responsible for customs clearance and final delivery at the destination.",
      },
      {
        question: "Do I need a clearing agent at the destination?",
        answer:
          "Yes, unless you plan to manage it yourself. Many clients use their own clearing agents to keep costs down and control delivery.",
      },
      {
        question: "Can you still help if I don’t have an agent?",
        answer:
          "Yes—if needed, we can connect you with one of our vetted partners at your destination. Just let us know during your consultation.",
      },
    ],
  };
  const workflowSteps = [
    {
      titleLine1: "Planning and",
      titleLine2: "sketching",
      description:
        "Modern and unique design practically point of view, it risks not meeting the huge expectations",
    },
    {
      titleLine1: "Team",
      titleLine2: "working",
      description:
        "Modern and unique design practically point of view, it risks not meeting the huge expectations",
    },
    {
      titleLine1: "Flowchart and",
      titleLine2: "wireframe",
      description:
        "Modern and unique design practically point of view, it risks not meeting the huge expectations",
    },
    {
      titleLine1: "User experience",
      titleLine2: "Testing",
      description:
        "Modern and unique design practically point of view, it risks not meeting the huge expectations",
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
