import RootLayout from "@/components/common/layout/RootLayout";
import CounterSection from "@/components/counter/CounterSection";
import CTASection from "@/components/cta/CtaSection";
import FeatureSection from "@/components/feature/FeatureSection";
import AboutHeroSection from "@/components/hero/AboutHeroSection";
import AboutStorySection from "@/components/story/AboutStorySection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
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
          <AboutHeroSection />
          <AboutStorySection />
          <CounterSection />
          <WorkflowSection />
          <FeatureSection />
          <TestimonialSection />
          <CTASection />
        </RootLayout>
      </main>
    </div>
  );
};

export default Index;
