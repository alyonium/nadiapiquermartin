import styles from '@/modules/main/services/components/priceItem/PriceItem.module.css';
import classNames from 'classnames';
type PriceItem = {
  label: string;
  value?: number;
  number?: number;
};

const PriceItem = ({ label, value, number }: PriceItem) => {
  if (number + 1) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.nameWrapper}>
          <span
            className={classNames(
              'body-lg-i text-color-secondary400',
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

  return (
    <div className={styles.wrapper}>
      <span className='body-md-l'>{label} </span>
      <span className='body-md-l'>{value}€</span>
    </div>
  );
};

export default PriceItem;
