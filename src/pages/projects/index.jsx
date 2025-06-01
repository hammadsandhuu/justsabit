import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import CTASection from "@/components/cta/CtaSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import PortfolioHeroSection from "@/components/portfolio/PortfolioHeroSection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";

const index = () => {
  return (
    <>
      <Head>
        <title>Our Top selected projects</title>
        <meta name="description" content="Portfolio V4 dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <PortfolioHeroSection />
          <PortfolioSection />
          <TestimonialSection/>
          <CTASection />
        </RootLayout>
      </main>
    </>
  );
};

export default index;
