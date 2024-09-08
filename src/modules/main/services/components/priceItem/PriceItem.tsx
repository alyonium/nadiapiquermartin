import styles from '@/modules/main/services/components/priceItem/PriceItem.module.css';
import classNames from 'classnames';
import { PriceItemType } from '@/types/types';
import { spans } from 'next/dist/build/webpack/plugins/profiling-plugin';

type PriceItem = {
  label: string;
  value?: number;
  number?: number;
  type: PriceItemType;
  info?: string[];
};

const PriceItem = ({
  label,
  value,
  number,
  type = PriceItemType.classic,
  info,
}: PriceItem) => {
  if (type === PriceItemType.withNumber) {
    return (
      <div className={styles.priceWrapper}>
        <div className={styles.nameWrapper}>
          <span
            className={classNames(
              'body-md-i text-color-secondary400',
              styles.number
            )}
          >
            0{number + 1}
          </span>
          <span className='body-md-l'>{label} </span>
        </div>
        <span className='body-md-l'>{value}€</span>
      </div>
    );
  }

  if (type === PriceItemType.packageItem) {
    return (
      <div className={styles.priceWrapper}>
        <div className={styles.nameWrapper}>
          <span className='body-md-i text-color-secondary400'>
            0{number + 1}
          </span>
          <span className='body-md-l'>{label}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.priceWrapper}>
        <span className='body-md-l'>{label} </span>
        <span className='body-md-l'>{value}€</span>
      </div>

      {info?.length > 0 && (
        <div className={styles.infoWrapper}>
          {info!.map((item, index) => (
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
