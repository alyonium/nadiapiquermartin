'use client';

import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import styles from '@/modules/main/services/Services.module.css';
import Heading from '@/components/heading/Heading';
import Collapse from '@/components/collapse/Collapse';
import ModalWindow from '@/components/modalWindow/ModalWindow';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import Consultations from '@/modules/main/services/components/consultations/Consultations';
import Gynecological from '@/modules/main/services/components/gynecological/Gynecological';
import Contraception from '@/modules/main/services/components/contraception/Contraception';
import Obstetrics from '@/modules/main/services/components/obstetrics/Obstetrics';

const Services = () => {
  const t = useTranslations('main.services');

  return (
    <div
      id='services'
      className={classNames('content-wrapper', styles.contentWrapper)}
    >
      <div className={classNames('content', styles.content)}>
        <Heading
          trigger={styles.contentWrapper}
          target={styles.content}
          text={t('heading')}
        />

        <div className={styles.collapseWrapper}>
          <Collapse
            id='consultations'
            heading={t('consultations.heading')}
            content={<Consultations />}
          />

          <Collapse
            id='gynecological'
            heading={
              t.rich('gynecological.heading', {
                italic: (chunks) => <span className='body-lg-i'>{chunks}</span>,
              }) as string
            }
            content={<Gynecological />}
          />

          <Collapse
            id='contraception'
            price={400}
            heading={
              t.rich('contraception.heading', {
                italic: (chunks) => <span className='body-lg-i'>{chunks}</span>,
              }) as string
            }
            content={<Contraception />}
          />

          <Collapse
            id='obstetrics'
            heading={
              t.rich('obstetrics.heading', {
                italic: (chunks) => <span className='body-lg-i'>{chunks}</span>,
              }) as string
            }
            content={<Obstetrics />}
          />
        </div>

        <div className={classNames(styles.buttonWrapper, 'buttonWrapper')}>
          <span className='body-md-l'>{t('payment')}</span>

          <ModalWindow
            button={<Button text={t('button')} type={ButtonType.secondary} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
