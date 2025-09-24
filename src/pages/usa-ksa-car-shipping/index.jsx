import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DesignStudioProtfolio from "@/components/portfolio/DesignStudioProtfolio";
import DesignStudioAbout from "@/components/about/DesignStudioAbout";
import CreativeAgencyHero from "@/components/hero/CreativeAgencyHero";

const DesignStudioDark = () => {
  return (
    <div>
      <Head>
        <title>Design Studio Dark</title>
        <meta name="description" content="Design Studio Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" defaultMode="dark">
          <CreativeAgencyHero />
          <DesignStudioAbout />
          <DesignStudioProtfolio />
        </RootLayout>
      </main>
    </div>
  );
};

export default DesignStudioDark;
