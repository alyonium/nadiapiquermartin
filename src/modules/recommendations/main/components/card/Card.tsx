import classNames from 'classnames';
import styles from '@/modules/recommendations/main/components/card/Card.module.css';
import { RecommendationType } from '@/temp/recommendationsTempData';
import { getDate } from '@/utils/getDate';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';

type CardProps = {
  data: RecommendationType;
};

const Card = ({ data }: CardProps) => {
  return (
    <div
      className={classNames(
        styles.cardWrapper,
        'transparent-wrapper box-shadow'
      )}
    >
      <span className='body-lg-r text-color-primary1000'>{data.name}</span>
      <span className='body-lg-l text-color-primary1000'>{data.text}</span>
      <div className={styles.buttonWrapper}>
        <span className='body-lg-l text-color-primary1000'>
          {' '}
          {getDate(data.date)}
        </span>
        <Button text={'Перейти к рекомендации'} type={ButtonType.secondary} />
      </div>
    </div>
  );
};

export default Card;
