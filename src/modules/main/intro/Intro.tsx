import classNames from 'classnames';
import styles from '@/modules/main/intro/Intro.module.css';
import Header from '@/components/header/Header';
import Button from '@/components/button/Button';
import Image from 'next/image';
import introPhoto from '/public/introPhoto.png';
import { useTranslations } from 'next-intl';

const Intro = () => {
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
          <Image
            alt='doctora'
            src={introPhoto}
            className={styles.imageWrapper}
          />

          <div className={styles.textBlockWrapper}>
            <div className={styles.textWrapper}>
              <h1 className='header-lg text-align-center'>
                Dra. Nadia Piquer Martin
              </h1>
              <span className='body-lg-l text-align-center'>
                {t('intro.obstetrician')}
              </span>
            </div>
            <Button text={t('intro.button')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
