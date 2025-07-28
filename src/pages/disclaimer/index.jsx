import RootLayout from "@/components/common/layout/RootLayout";
import CTASection from "@/components/cta/CtaSection";
import DisclaimerSection from "@/components/portfolio/disclaimer";
import SEOHead from "@/components/common/SEOHead";

const DisclaimerPage = () => {
  return (
    <>
      <SEOHead
        title="Disclaimer | SABIT Global Shipping & Logistics"
        description="Review SABIT’s legal disclaimer regarding liability, accuracy of information, and terms for using our global shipping and logistics website."
        url="https://www.justsabit.com/disclaimer"
        image="https://www.justsabit.com/assets/images/disclaimer-banner.jpg"
      />
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <DisclaimerSection />
          <CTASection />
        </RootLayout>
      </main>
    </>
  );
};

export default DisclaimerPage;
