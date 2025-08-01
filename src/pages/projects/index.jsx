import RootLayout from "@/components/common/layout/RootLayout";
import CTASection from "@/components/cta/CtaSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import PortfolioHeroSection from "@/components/portfolio/PortfolioHeroSection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import SEOHead from "@/components/common/SEOHead";

const ProjectPage = () => {
  return (
    <>
      <SEOHead
        title="Top Global Shipping Projects | SABIT Logistics Portfolio"
        description="Explore SABIT’s featured logistics and freight forwarding projects. See how we deliver results with door-to-door, sea, and air shipping worldwide."
        url="https://www.justsabit.com/projects"
        image="https://www.justsabit.com/assets/images/portfolio-cover.jpg"
      />
      <main>
        <RootLayout header="header1" footer="footer3" defaultMode="dark">
          <PortfolioHeroSection />
          <PortfolioSection />
          <TestimonialSection />
          <CTASection />
        </RootLayout>
      </main>
    </>
  );
};

export default ProjectPage;
