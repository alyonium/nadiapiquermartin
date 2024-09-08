import { useTranslations } from 'next-intl';
import { price } from '@/const/price';
import { CollapseSize, PriceItemType, PriceType } from '@/types/types';
import PriceItem from '@/modules/main/services/components/priceItem/PriceItem';
import Collapse from '@/components/collapse/Collapse';

const Obstetrics = () => {
  const t = useTranslations('services.obstetrics');
  const mt = useTranslations('services');
  return (
    <>
      {price.obstetrics.base.map((item: PriceType, index) => (
        <PriceItem
          key={index}
          label={t(item.label)}
          value={item.value}
          info={item?.info?.map((item) => t(item))}
        />
      ))}

      <span className='body-md-i text-color-primary1000'>
        {mt('packagesHeading')}:
      </span>

      {price.obstetrics.packages.map((item: PriceType) => (
        <Collapse
          heading={t(item.label)}
          price={item.value}
          size={CollapseSize.small}
          content={
            <>
              {item.content?.map((key, index) => (
                <PriceItem
                  key={index}
                  label={t(key)}
                  number={index}
                  type={PriceItemType.packageItem}
                />
              ))}
              {item.info?.map((key, index) => (
                <span key={key} className='body-sm-i text-color-primary1000'>
                  * {t(key)}
                </span>
              ))}
            </>
          }
        />
      ))}
    </>
  );
};

export default Obstetrics;
