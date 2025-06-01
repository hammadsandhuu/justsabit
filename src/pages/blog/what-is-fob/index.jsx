import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import CTASection from "@/components/cta/CtaSection";
import BlogDetailSection from "@/components/blog/BlogDetailSection";
import BlogRelatedSection from "@/components/blog/BlogRelatedSection";

const Index = () => {
    const blogData = {
      title:
        "Understanding FOB (Free on Board): A Complete Guide for Importers",
      category: "Logistics, Shipping",
      date: "31 May 2025",
      author: "SABIT Team",
      readTime: "5 min read",
      mainImage: "/assets/imgs/blogs/details/1.png",
      content: [
        {
          type: "paragraph",
          text: "FOB, or Free on Board, is one of the most commonly used Incoterms in international shipping. It defines the point at which the responsibility and ownership of goods transfer from the seller to the buyer.",
        },
        {
          type: "paragraph",
          text: "Under FOB terms, the seller is responsible for delivering the goods to the port of shipment and loading them onto the vessel. Once loaded, the buyer assumes responsibility, including shipping, insurance, and import duties.",
        },
        {
          type: "image",
          src: "/assets/imgs/blogs/details/3.png",
          alt: "FOB Shipping Process",
        },
        {
          type: "heading",
          text: "When Should You Use FOB?",
        },
        {
          type: "paragraph",
          text: "FOB is ideal for experienced importers who have their own freight forwarders and can manage the shipping process from the port of origin. It provides control and often reduces costs, but requires understanding of customs and logistics.",
        },
        {
          type: "heading",
          text: "Key Benefits of FOB",
        },
        {
          type: "list",
          items: [
            "Greater control over the shipping process",
            "Flexibility to choose your own freight forwarder",
            "Potential cost savings on freight and insurance",
            "Clear transfer of risk and responsibility at the port",
          ],
        },
        {
          type: "heading",
          text: "FOB vs. EXW: What’s the Difference?",
        },
        {
          type: "paragraph",
          text: "While FOB transfers responsibility at the port, EXW (Ex Works) makes the buyer responsible from the seller’s premises. FOB offers more balanced responsibility, whereas EXW is more demanding for buyers.",
        },
        {
          type: "image",
          src: "/assets/imgs/blogs/details/5.png",
          alt: "Comparison Chart of Incoterms",
        },
        {
          type: "heading",
          text: "How SABIT Helps with FOB Shipping",
        },
        {
          type: "paragraph",
          text: "SABIT connects you with vetted freight forwarders who specialize in FOB shipping. Whether it’s choosing the right provider or navigating customs, our platform simplifies the entire process for businesses importing from China or beyond.",
        },
      ],
      tags: ["FOB", "shipping", "logistics", "import", "SABIT"],
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
