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
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import { blogs } from "@/data/blogs";
import { generateSlug } from "@/lib/utils/generateSlug";
import SEOHead from "@/components/common/SEOHead";
import { servicesData } from "@/data/services";

const Home = () => {
  const blogData = blogs.map((blog) => ({
    image: blog.mainImage,
    category: blog.category,
    date: blog.date,
    title: blog.title,
    link: `/blog/${blog.slug || generateSlug(blog.title)}`,
  }));

  return (
    <>
      <SEOHead />
      <main>
        <RootLayout>
          <HeroSection />
          <BrandSection />
          <AboutSection />
          <ServiceSection serviceData={servicesData} />
          <CounterSection />
          <WorkflowSection />
          <PortfolioSection />
          <TestimonialSection />
          <BlogSection blogs={blogData} />
          <CTASection />
        </RootLayout>
      </main>
    </>
  );
};

export default Home;
