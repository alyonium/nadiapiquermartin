import { useTranslations } from 'next-intl';
import { price } from '@/const/price';
import PriceItem from '@/modules/main/services/components/priceItem/PriceItem';

const Consultations = () => {
  const t = useTranslations('services.consultations');

  return (
    <>
      {price.consultations.map((item) => (
        <PriceItem label={t(item.label)} value={item.value} />
      ))}
    </>
  );
};

export default Consultations;
