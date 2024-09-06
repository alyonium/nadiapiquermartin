import { useTranslations } from 'next-intl';
import { price } from '@/const/price';
import PriceItem from '@/modules/main/services/components/priceItem/PriceItem';
import Collapse from '@/components/collapse/Collapse';
import { CollapseSize } from '@/types/types';

const Gynecological = () => {
  const t = useTranslations('services.gynecological');

  return (
    <>
      {price.gynecological.map((item) => (
        <PriceItem label={t(item.label)} value={item.value} />
      ))}

      <span className='body-md-i text-color-primary1000'>
        {t('vaginalInfections.heading')}:
      </span>

      {price.vaginalInfections.map((item, index) => (
        <PriceItem label={t(item.label)} value={item.value} number={index} />
      ))}

      <span className='body-md-i text-color-primary1000'>
        {t('packages.heading')}:
      </span>

      {price.packages.map((item) => {
        return (
          <Collapse
            heading={t(item.label)}
            price={item.value}
            size={CollapseSize.small}
            content={<div>content</div>}
          />
        );
      })}
    </>
  );
};

export default Gynecological;
