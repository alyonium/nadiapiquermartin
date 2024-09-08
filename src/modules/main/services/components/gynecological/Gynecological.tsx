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
        <PriceItem key={index} label={t(item.label)} value={item.value} />
      ))}

      <span className='body-md-i text-color-primary1000'>
        {t('vaginalInfections.heading')}:
      </span>

      {price.gynecological.vaginalInfections.map((item, index) => (
        <PriceItem
          key={index}
          label={t(item.label)}
          value={item.value}
          number={index}
          type={PriceItemType.withNumber}
        />
      ))}

      <span className='body-md-i text-color-primary1000'>
        {mt('packagesHeading')}:
      </span>

      {price.gynecological.packages.map((item: PriceType) => (
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
              {item.info?.length > 0 && (
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
