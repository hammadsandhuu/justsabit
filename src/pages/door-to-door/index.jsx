import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceHeroSection from "@/components/service/ServiceHeroSeection";
import ServiceDetailSection from "@/components/service/ServiceDetailsService";
import CTASection from "@/components/cta/CtaSection";

const Index = () => {
  const heroData = {
    title: "Door-to-Door Sea and Air Shipping",
    sections: [
      {
        subtitle: "Our Role",
        paragraph:
          "We oversee everything—pickup, customs clearance, international transport, and final delivery—based on your needs.",
      },
      {
        subtitle: "Who Is It For?",
        paragraph:
          "Perfect for businesses and busy teams who don’t have time to deal with dozens of moving parts. Let our vetted partners handle the chaos—so you don’t have to.",
      },
    ],
    features: [
      "End-to-end service",
      "Customized solutions",
      "Air and sea",
      "Hassle-free shipping",
      "Expert logistics support",
      "Time-saving process",
    ],
    images: [
      {
        src: "/assets/imgs/service/door-to-door/6.png",
        alt: "Development Image 1",
        col: 8,
      },
      {
        src: "/assets/imgs/service/door-to-door/2.png",
        alt: "Development Image 2",
        col: 4,
      },
    ],
  };
  const serviceDetailData = {
    title: "One Service, Every Step — Shipping You Can Rely On",
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
      "Our Door-to-Door service offers an all-inclusive, worry-free logistics solution. From pickup to final delivery, including customs clearance and international transport, we manage everything through our trusted network. This service is ideal for busy professionals and businesses looking for a seamless, fully managed shipping experience tailored to their specific needs.",
      "This service removes the typical headaches of international shipping. With one point of contact and a dedicated logistics partner, you gain visibility and control without managing the day-to-day details. It’s a hands-off solution built for teams who value speed, reliability, and stress-free freight coordination from origin to destination.",
    ],
  };
  const faqData = {
    title: "Frequently Asked Questions — Door to Door",
    imageSrc: "/assets/imgs/faq/4.png",
    faqItems: [
      {
        question: "What if my shipment needs special handling or packaging?",
        answer:
          "No problem at all. During your discovery call, if you haven’t already selected the option on the 7-step form, just let us know. We’ll go over what handling you require and match you with a provider experienced in it – whether its fragile, dangerous, luxury goods, or temperature sensitive.",
      },
      {
        question: "Can I track my shipments?",
        answer:
          "Yes. Once we connect you with the correct shipping agent, they will provide you with updates throughout the journey—at your pace, from pickup to final delivery.",
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
        <title>Door-To-Door Shipping with sabit</title>
        <meta name="description" content="Service Details Dark Description" />
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

export default Index;
