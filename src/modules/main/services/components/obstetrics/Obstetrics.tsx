import { useTranslations } from 'next-intl';
import { price } from '@/const/price';
import { CollapseSize, PriceItemType, PriceType } from '@/types/types';
import PriceItem from '@/modules/main/services/components/priceItem/PriceItem';
import Collapse from '@/components/collapse/Collapse';
import { useSuspenseQuery } from '@tanstack/react-query';
import { priceOptions } from '@/api/price';

const Obstetrics = () => {
  const t = useTranslations('main.services.obstetrics');
  const mt = useTranslations('main.services');
  const { data } = useSuspenseQuery(priceOptions);

  return (
    <>
      {data.data.attributes.prices.obstetrics.base.map(
        (item: PriceType, index) => (
          <PriceItem
            data={{
              label: t(item.label),
              value: item.value,
              type: PriceItemType.classic,
              info: item?.info?.map((item) => t(item)),
            }}
            key={index}
          />
        )
      )}

      <span className='body-md-i text-color-primary1000'>
        {mt('packagesHeading')}:
      </span>

      {data.data.attributes.prices.obstetrics.packages.map(
        (item: PriceType, index) => (
          <Collapse
            id={item.label}
            key={index}
            heading={t(item.label)}
            price={item.value}
            size={CollapseSize.small}
            content={
              <>
                {item.content?.map((key, index) => (
                  <PriceItem
                    data={{
                      number: index,
                      label: t(item.label),
                      type: PriceItemType.packageItem,
                    }}
                    key={index}
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
        )
      )}
    </>
  );
};

export default Obstetrics;
