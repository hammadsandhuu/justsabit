import RootLayout from "@/components/common/layout/RootLayout";
import SEOHead from "@/components/common/SEOHead";
import CounterSection from "@/components/counter/CounterSection";
import CTASection from "@/components/cta/CtaSection";
import FeatureSection from "@/components/feature/FeatureSection";
import AboutHeroSection from "@/components/hero/AboutHeroSection";
import AboutStorySection from "@/components/story/AboutStorySection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import WorkflowSection from "@/components/workflow/WorkfLowSection";

const AboutPage = () => {
  return (
    <>
      <SEOHead
        title="About SABIT Logistics | Your Trusted Global Shipping Partner"
        description="Learn about SABIT Logistics – your global shipping and freight forwarding partner. We specialize in air freight, sea freight, customs clearance, and global cargo handling."
        url="https://www.justsabit.com/about"
        image="https://www.justsabit.com/assets/images/about-banner.jpg"
      />
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
    </>
  );
};

export default AboutPage;
