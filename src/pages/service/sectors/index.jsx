import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import BrandSection from "@/components/brand/BrandSection";
import CTASection from "@/components/cta/CtaSection";
import Sectors from "@/components/service/Sectors";

const Index = () => {
  return (
    <>
      <Head>
        <title>Our Top Sectors</title>
        <meta name="description" content="Service V3 Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <Sectors />
          <BrandSection />
          <CTASection />
        </RootLayout>
      </main>
    </>
  );
};

export default Index;
