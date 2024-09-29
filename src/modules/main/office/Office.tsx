'use client';

import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import styles from '@/modules/main/office/Office.module.css';
import Heading from '@/components/heading/Heading';
import ModalWindow from '@/components/modalWindow/ModalWindow';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import { useParams } from 'next/navigation';

const Office = () => {
  const t = useTranslations('main.office');
  const mt = useTranslations('main');
  const { locale } = useParams<{ locale: string }>();

  const getIframeMapLink = () => {
    if (locale === 'ru') {
      return 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12320.37882936045!2d-0.3805626!3d39.4671891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88725b5ae75cb715%3A0x7fd2903312b567b6!2sNadia%20Piquer%20Martin!5e0!3m2!1sru!2ses!4v1725838943300!5m2!1sru!2ses';
    }
    if (locale === 'ua') {
      return 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12320.37882936045!2d-0.3805626!3d39.4671891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88725b5ae75cb715%3A0x7fd2903312b567b6!2sNadia%20Piquer%20Martin!5e0!3m2!1suk!2ses!4v1726392596747!5m2!1suk!2ses';
    }
    if (locale === 'es') {
      return 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12320.37882936045!2d-0.3805626!3d39.4671891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88725b5ae75cb715%3A0x7fd2903312b567b6!2sNadia%20Piquer%20Martin!5e0!3m2!1ses!2ses!4v1726392476920!5m2!1ses!2ses';
    }
  };

  return (
    <div
      id='office'
      className={classNames('content-wrapper', styles.contentWrapper)}
    >
      <div className={classNames('content', styles.content)}>
        <Heading
          trigger={styles.contentWrapper}
          target={styles.content}
          text={t('heading')}
        />

        <div className={styles.contentBlockWrapper}>
          <div className={styles.textBlockWrapper}>
            <div className={styles.textWrapper}>
              <span className='body-lg-l text-color-primary1000'>
                {t('info1')}
              </span>
              <span className='body-lg-l text-color-primary1000'>
                {t('info2')}{' '}
                <a
                  className='body-lg-r link'
                  href='https://maps.app.goo.gl/rvdg9PoqHQVow2KS9'
                >
                  {mt('address')}
                </a>
              </span>
              <span className='body-lg-l text-color-primary1000'>
                {t.rich('info3', {
                  italic: (chunks) => (
                    <span className='body-lg-i'>{chunks}</span>
                  ),
                })}
              </span>
            </div>

            <ModalWindow
              button={<Button text={t('button')} type={ButtonType.secondary} />}
            />
          </div>

          <div className={styles.mapWrapper}>
            <div className={classNames(styles.ellipse, 'ellipse')} />

            <iframe
              src={getIframeMapLink()}
              title='google maps iframe'
              width='600'
              height='450'
              className={styles.map}
              frameBorder='0'
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
