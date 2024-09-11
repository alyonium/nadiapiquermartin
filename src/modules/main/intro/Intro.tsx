import classNames from 'classnames';
import styles from '@/modules/main/intro/Intro.module.css';
import Header from '@/components/header/Header';
import Button from '@/components/button/Button';
import Image from 'next/image';
import introPhoto from '/public/introPhoto.webp';
import { useTranslations } from 'next-intl';
import ModalWindow from '@/components/modalWindow/ModalWindow';

const Intro = () => {
  const t = useTranslations('intro');

  return (
    <div
      className={classNames(
        'content-wrapper backgroundBlue',
        styles.contentWrapper
      )}
    >
      <Header />
      <div className='content'>
        <div
          className={classNames(
            'transparent-wrapper',
            styles.transparentBlockWrapper
          )}
        >
          <Image
            alt='doctora'
            src={introPhoto}
            className={classNames(styles.imageWrapper)}
          />

          <div className={styles.textBlockWrapper}>
            <div className={styles.textWrapper}>
              <h1 className='header-lg text-align-center'>
                Dra. Nadia Piquer Martin
              </h1>
              <span className='body-lg-l text-align-center'>
                {t('obstetrician')}
              </span>
            </div>

            <ModalWindow button={<Button text={t('button')} />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
