import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ServiceSection from "@/components/service/ServiceSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import BrandSection from "@/components/brand/BrandSection";
import BlogSection from "@/components/blog/BlogSection";
import CTASection from "@/components/cta/CtaSection";
import CounterSection from "@/components/counter/CounterSection";
import WorkflowSection from "@/components/workflow/WorkfLowSection";
import BlogImg1 from "../../public/assets/imgs/blogs/7.png";
import BlogImg2 from "../../public/assets/imgs/blogs/5.png";
import TestimonialSection from "@/components/testimonial/TestimonialSection";

const DigitalAgency = () => {
  const blogData = [
    {
      image: BlogImg1,
      category: "Sabit Does",
      date: "02 May 2019",
      title:
        "Understanding FOB (Free on Board): A Complete Guide for Importers",
      link: "/blog/what-is-fob",
    },
    {
      image: BlogImg2,
      category: "Our Services",
      date: "02 May 2019",
      title: "Door-to-Door Shipping: The Easiest Way to Import Goods",
      link: "/blog/what-is-door-to-door-shipping",
    },
  ];
  return (
    <div>
      <Head>
        <title>Home - just-sabit</title>
        <meta name="description" content="Digital Agency Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer3" defaultMode="dark">
          <HeroSection />
          <AboutSection />
          <BrandSection />
          <ServiceSection />
          <CounterSection />
          <WorkflowSection />
          <PortfolioSection />
          <TestimonialSection />
          <BlogSection blogs={blogData} />;
          <CTASection />
        </RootLayout>
      </main>
    </div>
  );
};

export default DigitalAgency;
