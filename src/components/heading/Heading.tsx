'use client';

import classNames from 'classnames';
import styles from '@/components/heading/Heading.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type HeadingProps = {
  text: string;
  trigger: string;
  target: string;
};

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Heading = ({ text, trigger, target }: HeadingProps) => {
  useGSAP(() => {
    gsap.fromTo(
      `.${target} .${styles.headingWrapper}`,
      {
        opacity: 0,
        x: -300,
      },
      {
        scrollTrigger: {
          trigger: `.${trigger}`,
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power1',
      }
    );
  });

  return (
    <div className={classNames(styles.headingWrapper, 'heading')}>
      <div className={styles.line} />
      <h2 className='header-lg text-align-center'>{text}</h2>
      <div className={styles.line} />
    </div>
  );
};

export default Heading;
