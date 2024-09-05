import { useTranslations } from 'next-intl';
import styles from '@/modules/main/about/About.module.css';
import Heading from '@/components/heading/Heading';
import Image from 'next/image';
import aboutPhoto from '/public/aboutPhoto.png';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import classNames from 'classnames';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const t = useTranslations();

  const container = useRef();

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.content-wrapper',
          pin: true,
          start: 'top top',
          end: '+=500',
          scrub: 1,
          snap: {
            snapTo: 'labels',
            duration: { min: 0.2, max: 3 },
            delay: 0.2,
            ease: 'power1.inOut',
          },
        },
      });

      gsap.fromTo(
        `.${styles.textBlockWrapper} .heading`,
        {
          opacity: 0,
          x: -300,
        },
        {
          scrollTrigger: {
            trigger: '.content-wrapper',
            start: '200',
            end: '+=500',
          },
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power1',
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className='content-wrapper'>
      <div className={classNames('content', styles.blockWrapper)}>
        <div className={styles.textBlockWrapper}>
          <Heading text={t('about.heading')} />

          <div className={styles.imageBlockWrapper}>
            <div className={styles.ellipse} />

            <Image
              alt='doctora'
              src={aboutPhoto}
              className={styles.imageWrapper}
            />
          </div>

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

        <div className={styles.rightBlockWrapper}>
          <div className={styles.ellipse} />

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
