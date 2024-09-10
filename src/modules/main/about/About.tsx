import { useTranslations } from 'next-intl';
import styles from '@/modules/main/about/About.module.css';
import Heading from '@/components/heading/Heading';
import Image from 'next/image';
import aboutPhoto from '/public/aboutPhoto.png';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import classNames from 'classnames';
import ModalWindow from '@/components/modalWindow/ModalWindow';

const About = () => {
  const t = useTranslations('about');

  return (
    <div
      id='about'
      className={classNames('content-wrapper', styles.contentWrapper)}
    >
      <div className={classNames('content', styles.content)}>
        <div className={styles.textBlockWrapper}>
          <Heading
            trigger={styles.contentWrapper}
            target={styles.content}
            text={t('heading')}
          />

          <div className={styles.imageBlockWrapper}>
            <div className={classNames(styles.ellipse, 'ellipse')} />

            <Image
              alt='doctora'
              src={aboutPhoto}
              className={classNames(styles.imageWrapper, 'imageWrapper')}
            />
          </div>

          <div className={styles.textWrapper}>
            <span className='body-md-l text-align-center'>
              {t.rich('about1', {
                italic: (chunks) => <span className='body-md-i'>{chunks}</span>,
              })}
            </span>
            <span className='body-md-l text-align-center'>
              {t.rich('about2', {
                italic: (chunks) => <span className='body-md-i'>{chunks}</span>,
              })}
            </span>
            <span className='body-md-l text-align-center'>
              {t.rich('about3', {
                italic: (chunks) => <span className='body-md-i'>{chunks}</span>,
              })}
            </span>
            <span className='body-md-l text-align-center'>
              {t.rich('about4', {
                italic: (chunks) => <span className='body-md-i'>{chunks}</span>,
              })}
            </span>
          </div>

          <ModalWindow
            button={<Button text={t('button')} type={ButtonType.secondary} />}
          />
        </div>

        <div className={styles.rightBlockWrapper}>
          <div className={classNames(styles.ellipse, 'ellipse')} />

          <Image
            alt='doctora'
            src={aboutPhoto}
            className={classNames(styles.imageWrapper, 'imageWrapper')}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
