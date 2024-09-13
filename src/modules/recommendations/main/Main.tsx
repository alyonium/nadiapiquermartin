'use client';

import classNames from 'classnames';
import styles from '@/modules/recommendations/main/Main.module.css';
import Header from '@/components/header/Header';
import Heading from '@/components/heading/Heading';
import Card from '@/modules/recommendations/main/components/card/Card';
import { useSuspenseQuery } from '@tanstack/react-query';
import { recommendationsOptions } from '@/api/recommendation';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

const Main = () => {
  const t = useTranslations('recommendations.list');
  const { locale } = useParams<{
    locale: string;
  }>();

  const { data } = useSuspenseQuery(recommendationsOptions(locale));

  return (
    <>
      <div
        className={classNames(
          'content-wrapper backgroundMarble',
          styles.contentWrapper
        )}
      >
        <Header
          isBlue={true}
          getNewPathnameForLocale={(newLocale) =>
            `/${newLocale}/recommendations`
          }
        />
        <div className={classNames(styles.marbleContentWrapper)}>
          <div className={classNames(styles.marbleContent, 'content')}>
            <Heading
              isLine={false}
              trigger={styles.contentWrapper}
              target={styles.marbleContent}
              text={t('heading')}
            />

            {data.data.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
