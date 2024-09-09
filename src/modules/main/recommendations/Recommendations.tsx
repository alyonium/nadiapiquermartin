import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import styles from '@/modules/main/recommendations/Recommendations.module.css';
import Heading from '@/components/heading/Heading';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import Recommendation from '@/modules/main/recommendations/components/recommendation/Recommendation';
import {
  temp,
  RecommendationType,
} from '@/modules/main/recommendations/tempData';

const Recommendations = () => {
  const t = useTranslations('recommendations');

  return (
    <div
      className={classNames(
        'content-wrapper backgroundMarble',
        styles.contentWrapper
      )}
    >
      <div className={classNames('content', styles.content)}>
        <Heading
          trigger={styles.contentWrapper}
          target={styles.content}
          text={t('heading')}
        />

        <div className={styles.recommendationWrapper}>
          {temp.map((item: RecommendationType) => (
            <Recommendation key={item.name} data={item} />
          ))}
        </div>

        <a href='https://maps.app.goo.gl/rvdg9PoqHQVow2KS9'>
          <Button text={t('button')} type={ButtonType.secondary} />
        </a>
      </div>
    </div>
  );
};

export default Recommendations;
