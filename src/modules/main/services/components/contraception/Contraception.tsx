import PriceItem from '@/modules/main/services/components/priceItem/PriceItem';
import { useTranslations } from 'next-intl';
import { PriceItemType, PriceType } from '@/types/types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { priceOptions } from '@/api/price';

const Contraception = () => {
  const t = useTranslations('main.services.contraception');
  const { data } = useSuspenseQuery(priceOptions);

  return (
    <>
      <span className='body-md-i text-color-primary1000'>
        {t('installHID.heading')}:
      </span>

      {data.data.attributes.prices.contraception.HID.install.map(
        (item: PriceType, index) => (
          <PriceItem
            data={{
              number: index,
              label: t(item.label),
              value: item.value,
              type: PriceItemType.withNumber,
            }}
            key={index}
          />
        )
      )}

      <span className='body-md-i text-color-primary1000'>
        {t('replaceHID.heading')}:
      </span>

      {data.data.attributes.prices.contraception.HID.replace.map(
        (item: PriceType, index) => (
          <PriceItem
            data={{
              number: index,
              label: t(item.label),
              value: item.value,
              type: PriceItemType.withNumber,
            }}
            key={index}
          />
        )
      )}

      {data.data.attributes.prices.contraception.HID.base.map(
        (item: PriceType, index) => (
          <PriceItem
            data={{
              label: t(item.label),
              value: item.value,
              type: PriceItemType.classic,
              info: item?.info?.map((item) => t(item)),
            }}
            key={index}
            labelClassName={'body-md-i'}
          />
        )
      )}

      {data.data.attributes.prices.contraception.implant.install.map(
        (item: PriceType, index) => (
          <PriceItem
            data={{
              label: t(item.label),
              value: item.value,
              type: PriceItemType.classic,
              info: item?.info?.map((item) => t(item)),
            }}
            key={index}
            labelClassName={'body-md-i'}
          />
        )
      )}

      {data.data.attributes.prices.contraception.implant.remove.map(
        (item: PriceType, index) => (
          <PriceItem
            key={index}
            data={{
              label: t(item.label),
              value: item.value,
              type: PriceItemType.classic,
              info: item?.info?.map((item) => t(item)),
            }}
            labelClassName={'body-md-i'}
          />
        )
      )}

      {data.data.attributes.prices.contraception.implant.replace.map(
        (item: PriceType, index) => (
          <PriceItem
            key={index}
            data={{
              label: t(item.label),
              value: item.value,
              type: PriceItemType.classic,
              info: item?.info?.map((item) => t(item)),
            }}
            labelClassName={'body-md-i'}
          />
        )
      )}

      {data.data.attributes.prices.contraception.injectionDepoProgevera.map(
        (item: PriceType, index) => (
          <PriceItem
            key={index}
            data={{
              label: t(item.label),
              value: item.value,
              type: PriceItemType.classic,
              info: item?.info?.map((item) => t(item)),
            }}
            labelClassName={'body-md-i'}
          />
        )
      )}
    </>
  );
};

export default Contraception;
