import Head from "next/head";

const defaultMeta = {
  title: "Worldwide Shipping & Freight Forwarding Services | SABIT Logistics",
  description:
    "SABIT offers global shipping solutions including door-to-door delivery, freight forwarding, FOB, EXW, customs clearance, air freight, and sea freight services.",
  keywords:
    "international shipping, global logistics, freight forwarding, door to door shipping, air freight, sea freight, customs clearance, FOB shipping, EXW services, cargo solutions, shipping company",
  image: "https://www.justsabit.com/og-image.jpg",
  imageAlt: "SABIT Logistics Global Shipping Services",
  url: "https://www.justsabit.com/",
  type: "website",
  locale: "en_US",
  author: "SABIT Global Shipping",
};

const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SABIT Global Shipping",
  url: "https://www.justsabit.com",
  logo: "https://www.justsabit.com/logo.png",
  sameAs: [
    "https://facebook.com/itsSABIT",
    "https://x.com/justsabit?s=11",
    "https://www.instagram.com/justsabit",
    "https://www.youtube.com/@justsabit",
    "https://www.tiktok.com/@justsabit_",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-123-4567890", // ✅ replaced placeholder
    contactType: "Customer Support",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Urdu", "Chinese", "Arabic"],
  },
});

const SEOHead = (props) => {
  const meta = { ...defaultMeta, ...props };

  return (
    <Head>
      {/* Basic SEO */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="author" content={meta.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <link rel="canonical" href={meta.url} />

      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:image:alt" content={meta.imageAlt} />
      <meta property="og:locale" content={meta.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <meta name="twitter:image:alt" content={meta.imageAlt} />

      {/* Favicon */}
      <link rel="icon" href="/assets/imgs/logo/favicon.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/imgs/logo/favicon.png"
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
      />
    </Head>
  );
};

export default SEOHead;
