import Footer from '@/components/footer/Footer';
import FAQ from '@/modules/FAQ/FAQ';
import { HydrationBoundary } from '@tanstack/react-query';

const FAQPage = async () => {
  return (
    <HydrationBoundary>
      <FAQ />
      <Footer />
    </HydrationBoundary>
  );
};

export default FAQPage;
