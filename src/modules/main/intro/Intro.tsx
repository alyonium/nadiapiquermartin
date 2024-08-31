import classNames from 'classnames';
import styles from '@/modules/main/intro/Intro.module.css';
import Header from '@/components/header/Header';
import Button from '@/components/button/Button';
import Image from 'next/image';
import introPhoto from '/public/intro-photo.png';
import { useTranslations } from 'next-intl';
import { Trans } from 'next-i18next';

export const Intro = () => {
  const t = useTranslations();

  return (
    <div className={classNames('content-wrapper', styles.blockWrapper)}>
      <div className='content'>
        <Header />

        <div
          className={classNames(
            'transparent-wrapper',
            styles.transparentBlockWrapper
          )}
        >
          <Image alt='123' src={introPhoto} />

          <div className={styles.textBlockWrapper}>
            <div className={styles.textWrapper}>
              <h1 className='header-lg'>Dra. Nadia Piquer Martin</h1>
              <Trans i18nKey='intro.obstetrician'>
                <span className='body-lg-l'>{t('intro.obstetrician')}</span>
              </Trans>
            </div>
            <Button text={t('intro.button')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
