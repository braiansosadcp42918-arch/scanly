import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import QRGenerator from '@/components/QRGenerator';
import FeaturesSection from '@/components/FeaturesSection';
import TemplatesSection from '@/components/TemplatesSection';
import FAQSection from '@/components/FAQSection';
import AdBanner from '@/components/AdBanner';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        {/* Ad Slot — Top banner */}
        <AdBanner className="mb-8" slot="top-banner" />
        <QRGenerator />
        {/* Ad Slot — Mid-page separator */}
        <AdBanner className="my-8" slot="mid-separator" />
        <FeaturesSection />
        <TemplatesSection />
        {/* Ad Slot — Bottom section */}
        <AdBanner className="my-8" slot="bottom-section" />
        <FAQSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
