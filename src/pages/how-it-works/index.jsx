import RootLayout from "@/components/common/layout/RootLayout";
import CounterSection from "@/components/counter/CounterSection";
import CTASection from "@/components/cta/CtaSection";
import FeatureSection from "@/components/feature/FeatureSection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import HowItWorkSection from "@/components/workflow/HowItWorkSection";
import WorkflowSection from "@/components/workflow/WorkfLowSection";
import Head from "next/head";

const Index = () => {
  return (
    <div>
      <Head>
        <title>About - sabit</title>
        <meta name="description" content="About Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout defaultMode="dark">
          <HowItWorkSection />
          <WorkflowSection />
          <CounterSection />
          <FeatureSection />
          <CTASection />
          <TestimonialSection />
        </RootLayout>
      </main>
    </div>
  );
};

export default Index;
