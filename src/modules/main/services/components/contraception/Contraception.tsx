import { price } from '@/const/price';
import PriceItem from '@/modules/main/services/components/priceItem/PriceItem';
import { useTranslations } from 'next-intl';
import { PriceItemType, PriceType } from '@/types/types';

const Contraception = () => {
  const t = useTranslations('services.contraception');

  return (
    <>
      <span className='body-md-i text-color-primary1000'>
        {t('installHID.heading')}:
      </span>

      {price.contraception.HID.install.map((item: PriceType, index) => (
        <PriceItem
          key={index}
          number={index}
          label={t(item.label)}
          value={item.value}
          type={PriceItemType.withNumber}
          info={item?.info?.map((item) => t(item))}
        />
      ))}

      <span className='body-md-i text-color-primary1000'>
        {t('replaceHID.heading')}:
      </span>

      {price.contraception.HID.replace.map((item: PriceType, index) => (
        <PriceItem
          key={index}
          number={index}
          label={t(item.label)}
          value={item.value}
          type={PriceItemType.withNumber}
          info={item?.info?.map((item) => t(item))}
        />
      ))}

      {price.contraception.HID.base.map((item: PriceType, index) => (
        <PriceItem
          key={index}
          label={t(item.label)}
          value={item.value}
          info={item?.info?.map((item) => t(item))}
        />
      ))}

      {price.contraception.implant.install.map((item: PriceType, index) => (
        <PriceItem
          key={index}
          label={t(item.label)}
          value={item.value}
          info={item?.info?.map((item) => t(item))}
        />
      ))}

      {price.contraception.implant.remove.map((item: PriceType, index) => (
        <PriceItem
          key={index}
          label={t(item.label)}
          value={item.value}
          info={item?.info?.map((item) => t(item))}
        />
      ))}

      {price.contraception.implant.replace.map((item: PriceType, index) => (
        <PriceItem
          key={index}
          label={t(item.label)}
          value={item.value}
          info={item?.info?.map((item) => t(item))}
        />
      ))}

      {price.contraception.injectionDepoProgevera.map(
        (item: PriceType, index) => (
          <PriceItem
            key={index}
            label={t(item.label)}
            value={item.value}
            info={item?.info?.map((item) => t(item))}
          />
        )
      )}
    </>
  );
};

export default Contraception;
