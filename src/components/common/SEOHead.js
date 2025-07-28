import Head from "next/head";

const SEOHead = ({
  title = "Worldwide Shipping & Freight Forwarding Services | SABIT Logistics",
  description = "SABIT offers global shipping solutions including door-to-door delivery, freight forwarding, FOB, EXW, customs clearance, air freight, and sea freight services.",
  keywords = "international shipping, global logistics, freight forwarding, door to door shipping, air freight, sea freight, customs clearance, FOB shipping, EXW services, cargo solutions, shipping company",
  image = "https://www.justsabit.com/og-image.jpg",
  url = "https://www.justsabit.com/",
  type = "website",
}) => {
  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SABIT Global Shipping" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph for Facebook and LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
              telephone: "+92-XXX-XXXXXXX",
              contactType: "Customer Support",
              areaServed: "Worldwide",
              availableLanguage: ["English", "Urdu", "Chinese", "Arabic"],
            },
          }),
        }}
      />
    </Head>
  );
};

export default SEOHead;
