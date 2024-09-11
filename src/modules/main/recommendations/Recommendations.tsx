'use client';

import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import styles from '@/modules/main/recommendations/Recommendations.module.css';
import Heading from '@/components/heading/Heading';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import Recommendation from '@/modules/main/recommendations/components/recommendation/Recommendation';
import { temp, RecommendationType } from '@/temp/recommendationsTempData';
import { useRouter } from 'next/navigation';

const Recommendations = () => {
  const t = useTranslations('recommendations');
  const { push } = useRouter();

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

        <a onClick={() => push(`/recommendations`)}>
          <Button text={t('button')} type={ButtonType.secondary} />
        </a>
      </div>
    </div>
  );
};

export default Recommendations;
