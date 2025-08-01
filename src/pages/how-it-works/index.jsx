import RootLayout from "@/components/common/layout/RootLayout";
import CounterSection from "@/components/counter/CounterSection";
import CTASection from "@/components/cta/CtaSection";
import FeatureSection from "@/components/feature/FeatureSection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import HowItWorkSection from "@/components/workflow/HowItWorkSection";
import WorkflowSection from "@/components/workflow/WorkfLowSection";
import SEOHead from "@/components/common/SEOHead";

const HowItWorksPage = () => {
  return (
    <>
      <SEOHead
        title="How It Works | SABIT Global Shipping & Freight Services"
        description="Discover how SABIT's streamlined global logistics process works – from pickup to delivery. Learn about our air & sea freight, customs clearance, and door-to-door services."
        url="https://www.justsabit.com/how-it-works"
        image="https://www.justsabit.com/assets/images/how-it-works-banner.jpg"
      />
      <main>
        <RootLayout defaultMode="dark" header="header1">
          <HowItWorkSection />
          <WorkflowSection />
          <CounterSection />
          <FeatureSection />
          <CTASection />
          <TestimonialSection />
        </RootLayout>
      </main>
    </>
  );
};

export default HowItWorksPage;
