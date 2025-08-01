import RootLayout from "@/components/common/layout/RootLayout";
import SEOHead from "@/components/common/SEOHead";
import CTASection from "@/components/cta/CtaSection";
import ServiceHeroSection from "@/components/service/ServiceHeroSeection";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceDetailSection from "@/components/service/ServiceDetailsService";
import { sectorsData } from "@/data/sectors";

export async function getStaticPaths() {
  const paths = sectorsData.map((service) => ({
    params: { slug: service.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = sectorsData.find((s) => s.slug === params.slug);
  return { props: { service } };
}

export default function ServicePage({ service }) {
  if (!service) return <p>Service not found</p>;

  const {
    slug,
    title,
    description,
    faq,
    service_detail,
    workflow_steps,
    meta,
    images,
  } = service;

  return (
    <>
      <SEOHead
        title={meta?.title || title}
        description={meta?.description || description}
        url={`https://www.justsabit.com/services/${slug}`}
        image={images?.[0]?.src || ""}
        keywords={meta?.keywords || ""}
      />
      <main>
        <RootLayout header="header1" footer="footer3" defaultMode="dark">
          <ServiceHeroSection {...service} />
          <ServiceDetailsWorkflow steps={workflow_steps} />
          {/* <ServiceDetailSection {...service_detail} /> */}
          <ServiceDetailsFaq
            title={faq.title}
            faqItems={faq.items}
            imageSrc={faq.image_src}
          />
          <CTASection />
        </RootLayout>
      </main>
    </>
  );
}
