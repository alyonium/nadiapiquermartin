import { useTranslations } from 'next-intl';
import { price } from '@/const/price';
import PriceItem from '@/modules/main/services/components/priceItem/PriceItem';
import Collapse from '@/components/collapse/Collapse';
import { CollapseSize, PriceItemType } from '@/types/types';
import { PriceType } from '@/types/types';
import styles from '@/modules/main/services/components/gynecological/Gynecological.module.css';

const Gynecological = () => {
  const t = useTranslations('services.gynecological');
  const mt = useTranslations('services');

  return (
    <>
      {price.gynecological.base.map((item: PriceType, index) => (
        <PriceItem
          data={{
            label: t(item.label),
            value: item.value,
            type: PriceItemType.classic,
          }}
          key={index}
        />
      ))}

      <span className='body-md-i text-color-primary1000'>
        {t('vaginalInfections.heading')}:
      </span>

      {price.gynecological.vaginalInfections.map((item, index) => (
        <PriceItem
          data={{
            number: index,
            label: t(item.label),
            value: item.value,
            type: PriceItemType.withNumber,
          }}
          key={index}
        />
      ))}

      <span className='body-md-i text-color-primary1000'>
        {mt('packagesHeading')}:
      </span>

      {price.gynecological.packages.map((item: PriceType, index) => (
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
                    label: t(key),
                    type: PriceItemType.packageItem,
                  }}
                  key={index}
                />
              ))}
              {item.info && item.info.length > 0 && (
                <div className={styles.infoWrapper}>
                  {item.info?.map((key, index) => (
                    <span
                      key={key}
                      className='body-sm-i text-color-primary1000'
                    >
                      * {t(key)}
                    </span>
                  ))}
                </div>
              )}
            </>
          }
        />
      ))}
    </>
  );
};

export default Gynecological;
