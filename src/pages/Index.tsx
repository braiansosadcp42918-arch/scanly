import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import QRGenerator from '@/components/QRGenerator';
import FeaturesSection from '@/components/FeaturesSection';
import TemplatesSection from '@/components/TemplatesSection';
import FAQSection from '@/components/FAQSection';
import AdBanner from '@/components/AdBanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AdBanner className="mb-8" />
        <QRGenerator />
        <AdBanner className="my-8" />
        <FeaturesSection />
        <TemplatesSection />
        <AdBanner className="my-8" />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
