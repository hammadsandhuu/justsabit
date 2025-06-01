import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import CTASection from "@/components/cta/CtaSection";
import DisclaimerSection from "@/components/portfolio/disclaimer";

const index = () => {
  return (
    <>
      <Head>
        <title>Disclaimer</title>
        <meta name="description" content="Blog V2 Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <DisclaimerSection/>
          <CTASection />
        </RootLayout>
      </main>
    </>
  );
};

export default index;
