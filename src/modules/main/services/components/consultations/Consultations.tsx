import { useTranslations } from 'next-intl';
import { price } from '@/const/price';
import PriceItem from '@/modules/main/services/components/priceItem/PriceItem';
import { PriceItemType } from '@/types/types';

const Consultations = () => {
  const t = useTranslations('main.services.consultations');

  return (
    <>
      {price.consultations.map((item) => (
        <PriceItem
          data={{
            label: t(item.label),
            value: item.value,
            type: PriceItemType.classic,
          }}
          key={item.label}
        />
      ))}
    </>
  );
};

export default Consultations;
