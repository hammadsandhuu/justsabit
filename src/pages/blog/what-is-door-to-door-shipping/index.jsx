import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import CTASection from "@/components/cta/CtaSection";
import BlogDetailSection from "@/components/blog/BlogDetailSection";
import BlogRelatedSection from "@/components/blog/BlogRelatedSection";

const Index = () => {
    const blogData = {
      title: "Door-to-Door Shipping:The Easiest Way to Import Goods",
      category: "Logistics, Shipping",
      date: "31 May 2025",
      author: "SABIT Team",
      readTime: "5 min read",
      mainImage: "/assets/imgs/blogs/details/2.png",
      content: [
        {
          type: "paragraph",
          text: "Door-to-door shipping is the most convenient and stress-free method for importers who want a complete logistics solution. It ensures goods are picked up from the seller’s location and delivered directly to the buyer’s address.",
        },
        {
          type: "paragraph",
          text: "This end-to-end service covers everything—from pickup, export customs, international freight, import clearance, to last-mile delivery—allowing businesses to focus on growth rather than logistics.",
        },
        {
          type: "image",
          src: "/assets/imgs/blogs/details/4.png",
          alt: "Door-to-Door Delivery Illustration",
        },
        {
          type: "heading",
          text: "Who Should Choose Door-to-Door Shipping?",
        },
        {
          type: "paragraph",
          text: "This option is ideal for businesses new to international trade or those who prefer a hands-off approach. If you want a hassle-free experience without dealing with multiple logistics providers, door-to-door is for you.",
        },
        {
          type: "heading",
          text: "Advantages of Door-to-Door Shipping",
        },
        {
          type: "list",
          items: [
            "End-to-end service from pickup to delivery",
            "No need to coordinate with multiple freight providers",
            "Reduced risk of miscommunication or delays",
            "Simplified cost structure with fewer hidden charges",
          ],
        },
        {
          type: "heading",
          text: "How It Differs From FOB or EXW",
        },
        {
          type: "paragraph",
          text: "Unlike FOB or EXW, where the buyer manages part of the shipping journey, door-to-door shipping covers everything. It’s a premium service but saves time and complexity—especially useful for small to medium-sized businesses.",
        },
        {
          type: "image",
          src: "/assets/imgs/blogs/details/6.png",
          alt: "Comparison of Shipping Methods",
        },
        {
          type: "heading",
          text: "How SABIT Makes Door-to-Door Shipping Simple",
        },
        {
          type: "paragraph",
          text: "With SABIT, you get access to vetted logistics providers who handle the entire shipping process for you. Our platform helps you compare, book, and track shipments—ensuring your goods arrive safely and on time.",
        },
      ],
      tags: ["door-to-door", "shipping", "logistics", "import", "SABIT"],
    };
      
  return (
    <>
      <Head>
        <title>{blogData.title} | Blog</title>
        <meta name="description" content={`Read about ${blogData.title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <BlogDetailSection blog={blogData} />
          <BlogRelatedSection/>
          <CTASection />
        </RootLayout>
      </main>
    </>
  );
};

export default Index;
