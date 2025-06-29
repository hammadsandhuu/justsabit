import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceHeroSection from "@/components/service/ServiceHeroSeection";
import ServiceDetailSection from "@/components/service/ServiceDetailsService";
import CTASection from "@/components/cta/CtaSection";

const Index = () => {
  const heroData = {
    title: "Customs and Transport Made Easy, No Matter the Load",
    sections: [
      {
        subtitle: "Overview",
        paragraph:
          "In addition to the core services, we* offer comprehensive Customs Clearance and Transportation to ensure your goods move seamlessly from origin to destination—no matter the size or complexity. Whether you need specialized flatbed trailers for large shipments or smaller trucks for delicate cargo, we have the equipment and expertise to manage it all.",
      },
      {
        subtitle: "Who Is It For?",
        paragraph:
          "This service is perfect for businesses that want to streamline their logistics process. Whether you’re shipping large, bulky items or smaller, more delicate goods, we take the complexities of customs and transportation off your plate. You can focus on what matters most—your business—while we ensure your shipments move smoothly through every step of the journey.",
      },
    ],
    features: [
      "Expert customs handling",
      "Approvals to avoid costly delay",
      "Smaller trucks for delicate loads",
      "Versatile fleet for any cargo",
      "Safe and timely delivery guaranteed",
      "Paperwork and compliance checks",
    ],
    images: [
      {
        src: "/assets/imgs/service/additional-services/1.png",
        alt: "Development Image 1",
        col: 8,
      },
      {
        src: "/assets/imgs/service/additional-services/4.png",
        alt: "Development Image 2",
        col: 4,
      },
    ],
  };
  const serviceDetailData = {
    title: "We Simplify Customs to Keep Your Cargo Moving Smoothly",
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
      "Our team ensures your cargo moves without delays or compliance issues. We work closely with trusted partners to handle customs procedures accurately and efficiently. From documentation to duties, we simplify the entire process—keeping your goods moving smoothly across borders, regardless of destination or cargo type.",
      "We provide transportation solutions tailored to your shipment’s size, fragility, or urgency. Whether you need flatbeds for oversized machinery or small vans for temperature-sensitive goods, our logistics network ensures safe and timely delivery. Every mile is monitored, and every move is made with precision and care.",
    ],
  };
  const faqData = {
    title: "Frequently Asked Questions — Additional Services",
    imageSrc: "/assets/imgs/faq/7.png",
    faqItems: [
      {
        question: "What does FOB shipping include?",
        answer:
          "We arrange the international transport of your cargo once it’s loaded onto the vessel or aircraft. That includes securing space and handling sea/air freight from port to port or airport to airport.",
      },
      {
        question: "What if my shipment needs special handling or packaging?",
        answer:
          "No problem at all. During your discovery call, if you haven’t already selected the option on the 7-step form, just let us know. We’ll go over what handling you require and match you with a provider experienced in it – whether its fragile, dangerous, luxury goods, or temperature sensitive.",
      },
      {
        question: "Do I need a clearing agent at the destination?",
        answer:
          "Yes, unless you plan to manage it yourself. Many clients use their own clearing agents to keep costs down and control delivery.",
      },
      {
        question: "Who do I contact if there’s an issue during transit?",
        answer:
          "You will always have a direct point of contact with the assigned freight agent. And of course, we’re always available to support you if further coordination is ever needed.",
      },
    ],
  };
  const workflowSteps = [
    {
      titleLine1: "Strategic Route & ",
      titleLine2: "Compliance Planning",
      description:
        "1. Strategic Route & Compliance Planning We assess your cargo and destination to recommend the optimal air or sea route — and prepare all customs documents in advance to avoid border delays.",
    },
    {
      titleLine1: "Partner & ",
      titleLine2: "Fleet Coordination",
      description:
        "Whether it’s flatbeds, reefers, or smaller trucks, we assign the right vetted carrier for the job — ensuring your cargo reaches the port on time, every time.",
    },
    {
      titleLine1: "Port & ",
      titleLine2: "Terminal Interface",
      description:
        "Our on-ground agents coordinate directly at ports, supervising loading/unloading, and ensuring cargo is handled with care, especially sensitive or valuable goods.",
    },
    {
      titleLine1: "Paperwork. ",
      titleLine2: "Approvals. Peace of Mind.",
      description:
        "We handle compliance checks, clearance paperwork, and approvals — removing the friction so you can stay focused on what actually matters: your business.",
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
