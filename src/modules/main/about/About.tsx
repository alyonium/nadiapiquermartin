import { useTranslations } from 'next-intl';
import styles from '@/modules/main/about/About.module.css';
import Heading from '@/components/heading/Heading';
import Image from 'next/image';
import aboutPhoto from '/public/aboutPhoto.png';
import ellipse from '/public/ellipse.png';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import classNames from 'classnames';

const About = () => {
  const t = useTranslations();

  return (
    <div className='content-wrapper'>
      <div className={classNames('content', styles.blockWrapper)}>
        <div className={styles.textBlockWrapper}>
          <Heading text={t('about.heading')} />

          <div className={styles.textWrapper}>
            <span className='body-md-l text-align-center'>
              {t.rich('about.about1', {
                italic: (chunks) => <span className='body-md-i'>{chunks}</span>,
              })}
            </span>
            <span className='body-md-l text-align-center'>
              {t.rich('about.about2', {
                italic: (chunks) => <span className='body-md-i'>{chunks}</span>,
              })}
            </span>
            <span className='body-md-l text-align-center'>
              {t.rich('about.about3', {
                italic: (chunks) => <span className='body-md-i'>{chunks}</span>,
              })}
            </span>
            <span className='body-md-l text-align-center'>
              {t.rich('about.about4', {
                italic: (chunks) => <span className='body-md-i'>{chunks}</span>,
              })}
            </span>
          </div>

          <Button text={t('about.button')} type={ButtonType.secondary} />
        </div>

        <div>
          {/*надо придумать что с ним делать, т.к он провоцирует скролл и из-за*/}
          {/*него сайдменю отображается неправильно*/}

          {/*<div style={{ position: 'relative' }}>*/}
          {/*  <Image alt='ellipse' src={ellipse} className={styles.ellipse} />*/}
          {/*</div>*/}

          <Image
            alt='doctora'
            src={aboutPhoto}
            className={styles.imageWrapper}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
