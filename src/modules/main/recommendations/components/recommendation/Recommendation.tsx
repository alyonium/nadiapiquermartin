import { RecommendationType } from '@/modules/main/recommendations/tempData';
import classNames from 'classnames';
import styles from '@/modules/main/recommendations/components/recommendation/Recommendation.module.css';
import { getDate } from '@/utils/getDate';

type RecommendationsProps = {
  data: RecommendationType;
};

const Recommendation = ({ data }: RecommendationsProps) => {
  return (
    <a
      href='#'
      className={classNames(
        styles.contentWrapper,
        'transparent-wrapper box-shadow'
      )}
    >
      <span className='body-lg-r text-color-primary1000'>{data.name}</span>
      <span className='label-sm text-color-primary1000'>
        {getDate(data.date)}
      </span>
      <span className='body-md-l  text-color-primary1000 text-overflow'>
        {data.text}
      </span>
    </a>
  );
};

export default Recommendation;
