import styles from '@/modules/main/services/components/priceItem/PriceItem.module.css';
import classNames from 'classnames';
import { PriceItemType } from '@/types/types';

type PriceItemData =
  | {
      label: string;
      value: number;
      type: PriceItemType.classic;
      info?: string[];
    }
  | {
      label: string;
      value: number;
      number: number;
      type: PriceItemType.withNumber;
    }
  | {
      label: string;
      number: number;
      type: PriceItemType.packageItem;
    };

type PriceItemProps = {
  data: PriceItemData;
};

const PriceItem = ({ data }: PriceItemProps) => {
  if (data.type === PriceItemType.withNumber) {
    return (
      <div className={styles.priceWrapper}>
        <div className={styles.nameWrapper}>
          <span className={classNames('body-md-i text-color-secondary400')}>
            0{data.number + 1}
          </span>
          <span className='body-md-l'>{data.label} </span>
        </div>
        <span className='body-md-l'>{data.value}€</span>
      </div>
    );
  }

  if (data.type === PriceItemType.packageItem) {
    return (
      <div className={styles.priceWrapper}>
        <div className={styles.nameWrapper}>
          <span className='body-md-i text-color-secondary400'>
            0{data.number + 1}
          </span>
          <span className='body-md-l'>{data.label}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.priceWrapper}>
        <span className='body-md-l'>{data.label} </span>
        <span className='body-md-l'>{data.value}€</span>
      </div>

      {data.info && data.info.length > 0 && (
        <div className={styles.infoWrapper}>
          {data.info.map((item, index) => (
            <span key={index} className='body-sm-l text-color-primary1000'>
              * {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceItem;
