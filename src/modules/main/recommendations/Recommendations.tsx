'use client';

import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import styles from '@/modules/main/recommendations/Recommendations.module.css';
import Heading from '@/components/heading/Heading';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import Recommendation from '@/modules/main/recommendations/components/recommendation/Recommendation';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSuspenseQuery } from '@tanstack/react-query';
import { recommendationsOptions } from '@/api/recommendation';

const Recommendations = () => {
  const t = useTranslations('main.recommendations');
  const { locale } = useParams<{
    locale: string;
  }>();

  const { data } = useSuspenseQuery(recommendationsOptions(locale));
  const pathname = usePathname();

  return (
    <div
      id='recommendations'
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
          {data.data
            ?.slice(0, 3)
            .map((item) => <Recommendation key={item.id} data={item} />)}
        </div>

        <Link href={`${pathname}/recommendations`}>
          <Button text={t('button')} type={ButtonType.secondary} />
        </Link>
      </div>
    </div>
  );
};

export default Recommendations;
