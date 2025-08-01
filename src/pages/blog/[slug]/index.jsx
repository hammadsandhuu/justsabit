import Head from "next/head";
import { useRouter } from "next/router";
import { blogs } from "@/data/blogs";
import RootLayout from "@/components/common/layout/RootLayout";
import CTASection from "@/components/cta/CtaSection";
import BlogDetailSection from "@/components/blog/BlogDetailSection";
import BlogRelatedSection from "@/components/blog/BlogRelatedSection";
import { generateSlug } from "@/lib/utils/generateSlug";

export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug || generateSlug(blog.title) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blog = blogs.find(
    (b) => (b.slug || generateSlug(b.title)) === params.slug
  );
  return { props: { blog } };
}

export default function BlogPage({ blog }) {
  const router = useRouter();

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <>
      <Head>
        <title>{blog.title} | Blog</title>
        <meta name="description" content={`Read about ${blog.title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer3" defaultMode="dark">
          <BlogDetailSection blog={blog} />
          {/* <BlogRelatedSection /> */}
          <CTASection />
        </RootLayout>
      </main>
    </>
  );
}
