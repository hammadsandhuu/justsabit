import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import CTASection from "@/components/cta/CtaSection";
import BlogSection from "@/components/blog/BlogSection";
import BlogImg1 from "../../../public/assets/imgs/blogs/7.png";
import BlogImg2 from "../../../public/assets/imgs/blogs/5.png";


const index = () => {
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
    <>
      <Head>
        <title>blog itemss</title>
        <meta name="description" content="Blog V2 Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <BlogSection blogs={blogData} />;
          <CTASection />
        </RootLayout>
      </main>
    </>
  );
};

export default index;
