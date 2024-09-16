'use client';

import classNames from 'classnames';
import styles from '@/modules/recommendations/main/Main.module.css';
import Header from '@/components/header/Header';
import Heading from '@/components/heading/Heading';
import Card from '@/modules/recommendations/main/components/card/Card';
import { useSuspenseQuery } from '@tanstack/react-query';
import { recommendationsOptions } from '@/api/recommendation';
import { useTranslations } from 'next-intl';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { useEffect, useState } from 'react';
import { PaginatedResponse } from '@/types/api';
import { RecommendationType } from '@/types/recommendations';

const Main = () => {
  const t = useTranslations('recommendations.list');
  const { locale } = useParams<{
    locale: string;
  }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { data } = useSuspenseQuery(
    recommendationsOptions(locale, searchParams.get('search') || '')
  );

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  const handleSearch = useDebouncedCallback((searchValue: string) => {
    setIsLoading(true);
    const params = new URLSearchParams(searchParams);
    if (searchValue) {
      params.set('search', searchValue);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

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
            <div className={styles.inputSearchWrapper}>
              <div className={styles.inputSearch}>
                <FontAwesomeIcon
                  className={styles.inputIcon}
                  icon={faMagnifyingGlass}
                />
                <input
                  className='label-md'
                  placeholder={t('search')}
                  defaultValue={searchParams.get('search') || ''}
                  onChange={(e) => {
                    handleSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            <Heading
              isLine={false}
              trigger={styles.contentWrapper}
              target={styles.marbleContent}
              text={t('heading')}
            />

            <Content isLoading={isLoading} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

const Content = ({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data: PaginatedResponse<RecommendationType>;
}) => {
  const t = useTranslations('recommendations.list');

  if (isLoading) {
    return <span className='loader' />;
  }

  if (data.data.length === 0) {
    return (
      <span className='body-lg-l text-color-primary1000'>{t('noResults')}</span>
    );
  }

  return (
    <>
      {data.data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </>
  );
};
export default Main;
