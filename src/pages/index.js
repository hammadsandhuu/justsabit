import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalMarketingHero from "@/components/hero/DigitalMarketingHero";
import DigitalMarketingAbout from "@/components/about/DigitalMarketingAbout";
import DigitalMarketingService from "@/components/service/DigitalMarketingService";
import DigitalMarketingWorkflow from "@/components/workflow/DigitalMarketingWorkflow";
import DigitalMarketingBlog from "@/components/blog/DigitalMarketingBlog";
import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import DigitalAgencyWorkflow from "@/components/workflow/DigitalAgencyWorkflow";
import DigitalAgencyPortfolio from "@/components/portfolio/DigitalAgencyPortfolio";
import DesignStudioFeature from "@/components/feature/DesignStudioFeature";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Digital Marketing Dark</title>
        <meta name="description" content="Digital Marketing Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer3" defaultMode="dark">
          <DigitalMarketingHero />
          <DesignStudioFeature />
          <DigitalMarketingAbout />
          <DigitalMarketingService />
          <DigitalAgencyWorkflow />
          <DigitalAgencyPortfolio />
          <DigitalMarketingWorkflow />
          {/* <DigitalMarketingPrice /> */}
          <DigitalMarketingBlog />
        </RootLayout>
      </main>
    </div>
  );
}
