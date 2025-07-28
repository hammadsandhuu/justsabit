import RootLayout from "@/components/common/layout/RootLayout";
import BrandSection from "@/components/brand/BrandSection";
import CTASection from "@/components/cta/CtaSection";
import Sectors from "@/components/service/Sectors";
import SEOHead from "@/components/common/SEOHead";
import { sectorsData } from "@/data/sectors";

const SectorsPage = () => {
  return (
    <>
      <SEOHead
        title="Top Logistics Sectors We Serve | SABIT Global Shipping"
        description="Discover the key industries SABIT supports with tailored logistics solutions, including e-commerce, automotive, pharmaceuticals, heavy equipment, and more."
        url="https://www.justsabit.com/sectors"
        image="https://www.justsabit.com/assets/images/sectors-cover.jpg"
        keywords="industry logistics, shipping sectors, e-commerce shipping, pharma logistics, industrial freight, global supply chain, tailored shipping solutions"
      />
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <Sectors sectorsData={sectorsData} />
          <BrandSection />
          <CTASection />
        </RootLayout>
      </main>
    </>
  );
};

export default SectorsPage;
