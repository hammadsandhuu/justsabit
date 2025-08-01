import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import CTASection from "@/components/cta/CtaSection";
import BlogSection from "@/components/blog/BlogSection";
import { blogs } from "@/data/blogs";
import { generateSlug } from "@/lib/utils/generateSlug";
import SEOHead from "@/components/common/SEOHead";

const index = () => {
  const blogData = blogs.map((blog) => ({
    image: blog.mainImage,
    category: blog.category,
    date: blog.date,
    title: blog.title,
    link: `/blog/${blog.slug || generateSlug(blog.title)}`,
  }));
  return (
    <>
      <SEOHead
        title="Insights & Updates | SABIT Global Shipping Blog"
        description="Stay informed with the latest logistics trends, shipping news, and global trade insights from SABIT’s expert team. Explore our official blog."
        url="https://www.justsabit.com/blog"
        image="https://www.justsabit.com/assets/images/blog-banner.jpg"
        keywords="logistics blog, global shipping news, freight insights, supply chain trends, international trade updates, SABIT blog, shipping articles, freight logistics news"
      />

      <main>
        <RootLayout header="header1" footer="footer3" defaultMode="dark">
          <BlogSection blogs={blogData} />;
          <CTASection />
        </RootLayout>
      </main>
    </>
  );
};

export default index;
