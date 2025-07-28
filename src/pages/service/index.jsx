import RootLayout from "@/components/common/layout/RootLayout";
import BrandSection from "@/components/brand/BrandSection";
import CTASection from "@/components/cta/CtaSection";
import Services from "@/components/service/Services";
import SEOHead from "@/components/common/SEOHead";
import { servicesData } from "@/data/services";

const ServicesPage = () => {
  return (
    <>
      <SEOHead
        title="International Shipping Services | Freight Forwarding, Customs & Door-to-Door Logistics"
        description="Explore SABIT Logistics' full range of global freight services — including air & sea cargo, customs clearance, EXW & FOB shipping, and door-to-door delivery."
        url="https://www.justsabit.com/services"
        image="https://www.justsabit.com/assets/images/services-cover.jpg"
        keywords="freight forwarding, international shipping, customs clearance, door to door logistics, sea freight, air freight, ex works shipping, FOB shipping, import export logistics, global cargo services"
      />
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <Services servicesData={servicesData} />
          <BrandSection />
          <CTASection />
        </RootLayout>
      </main>
    </>
  );
};

export default ServicesPage;
