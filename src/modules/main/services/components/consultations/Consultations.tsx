import { useTranslations } from 'next-intl';
import PriceItem from '@/modules/main/services/components/priceItem/PriceItem';
import { PriceItemType } from '@/types/types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { priceOptions } from '@/api/price';

const Consultations = () => {
  const t = useTranslations('main.services.consultations');
  const { data } = useSuspenseQuery(priceOptions);

  return (
    <>
      {data.data.attributes.prices.consultations.map((item) => (
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
