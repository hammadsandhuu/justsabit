import RootLayout from "@/components/common/layout/RootLayout";
import SEOHead from "@/components/common/SEOHead";
import CTASection from "@/components/cta/CtaSection";
import ServiceHeroSection from "@/components/service/ServiceHeroSeection";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceDetailSection from "@/components/service/ServiceDetailsService";
import { servicesData } from "@/data/services";

export async function getStaticPaths() {
  const paths = servicesData.map((service) => ({
    params: { slug: service.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return { notFound: true };
  }
  return { props: { service } };
}

export default function ServicePage({ service }) {
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

  const ogImage = images?.[0]?.src || "https://www.justsabit.com/og-image.jpg";
  const ogImageAlt = `${title} - SABIT Logistics Service`;

  return (
    <>
      <SEOHead
        title={meta?.title || title}
        description={meta?.description || description}
        url={`https://www.justsabit.com/services/${slug}`}
        image={ogImage}
        imageAlt={ogImageAlt}
        keywords={meta?.keywords || ""}
      />
      <main>
        <RootLayout>
          <ServiceHeroSection {...service} />
          <ServiceDetailsWorkflow steps={workflow_steps} />
          {service_detail && <ServiceDetailSection {...service_detail} />}
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
