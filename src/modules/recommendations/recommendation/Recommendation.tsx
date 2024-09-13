'use client';

import classNames from 'classnames';
import styles from '@/modules/recommendations/recommendation/Recommendation.module.css';
import Header from '@/components/header/Header';
import Heading from '@/components/heading/Heading';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import { getDate } from '@/utils/getDate';
import Link from 'next/link';
import RichTextRenderer from '@/components/richTextRenderer/RichTextRenderer';
import QRCode from 'react-qr-code';
import { useParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useSuspenseQuery } from '@tanstack/react-query';
import { recommendationSingle } from '@/api/recommendation';
import { localeMap } from '@/utils/localeMap';

const Recommendation = () => {
  const t = useTranslations('recommendations.single');
  const pathname = usePathname();
  const { recommendationId, locale } = useParams<{
    locale: string;
    recommendationId: string;
  }>();

  const { data } = useSuspenseQuery(
    recommendationSingle(recommendationId, locale)
  );

  const handleLocaleChange = (newLocale: string) => {
    const newSlug = data.data[0].attributes.localizations.data.find(
      (el) => el.attributes.locale === localeMap[newLocale]
    )?.attributes.slug;
    if (!newSlug) {
      throw new Error('no slug found');
    }
    return `/${newLocale}/recommendations/${newSlug}`;
  };

  console.log(data);
  return (
    <>
      <div
        className={classNames(
          'content-wrapper backgroundMarble',
          styles.contentWrapper
        )}
      >
        <Header isBlue={true} getNewPathnameForLocale={handleLocaleChange} />
        <div className={styles.marbleContentWrapper}>
          <div className={classNames(styles.marbleContent, 'content')}>
            <Heading
              isLine={false}
              trigger={styles.contentWrapper}
              target={styles.marbleContent}
              text={data.data[0].attributes.title}
            />

            {/*Todo rich text*/}
            <div className={styles.transparentWrapper}>
              <div className='body-lg-l'>
                <RichTextRenderer content={data.data[0].attributes.content} />
              </div>

              <div className={styles.QRwrapper}>
                <QRCode
                  className={styles.QR}
                  bgColor='transparent'
                  fgColor='#23465E'
                  level='L'
                  value={`${process.env.NEXT_PUBLIC_ROOT_URL}${pathname}`}
                />

                <span className='body-lg-l text-color-primary1000'>
                  {getDate(data.data[0].attributes.createdAt)}
                </span>
              </div>
            </div>

            <Link href={`/${locale}/recommendations`}>
              <Button text={t('button')} type={ButtonType.secondary} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommendation;
