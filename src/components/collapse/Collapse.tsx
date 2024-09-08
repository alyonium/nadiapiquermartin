'use client';

import { TriangleDownIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';
import styles from '@/components/collapse/Collapse.module.css';
import { CollapseSize } from '@/types/types';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import gsap from 'gsap';

type CollapseProps = {
  id: string;
  heading: string;
  content: ReactNode;
  size?: CollapseSize;
  price?: number;
};

const Collapse = ({
  id,
  heading,
  content,
  size = CollapseSize.large,
  price,
}: CollapseProps) => {
  const [open, setOpen] = useState<Boolean>(false);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  // по неизвестной мне причине анимация не работает на внутренних аккордионах, сломала уже всю голову. попробовать еще раз

  useEffect(() => {
    if (open) {
      gsap.to(`#${id}.${styles.contentWrapper}`, {
        height: '100%',
        opacity: 1,
        duration: 0.5,
      });
    } else {
      gsap.to(`#${id}.${styles.contentWrapper}`, {
        height: 0,
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [open]);

  // , #${id}.${styles.smallContentWrapper}

  if (size === CollapseSize.small) {
    return (
      <div className={styles.smallCollapseWrapper}>
        <div onClick={toggleCollapse} className={styles.smallTrigger}>
          <span className='body-md-r'>{heading}</span>
          <div className={styles.priceWrapper}>
            <span className='body-md-r'>{price}€</span>
            <TriangleDownIcon
              className={classNames(
                styles.collapseIcon,
                open ? styles.iconOpen : false
              )}
            />
          </div>
        </div>
        <div
          id={id}
          className={classNames(
            styles.contentWrapper,
            styles.smallContentWrapper,
            open ? styles.collapseOpen : false
          )}
        >
          {content}
          <div className={styles.space} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.collapseWrapper}>
      <div onClick={toggleCollapse} className={styles.trigger}>
        <span className='body-lg-r'>{heading}</span>
        <TriangleDownIcon
          className={classNames(
            styles.collapseIcon,
            open ? styles.iconOpen : false
          )}
        />
      </div>
      <div
        id={id}
        className={classNames(
          styles.contentWrapper,
          open ? styles.collapseOpen : false
        )}
      >
        <div className={styles.line} />
        {content}
        <div className={styles.space} />
      </div>
    </div>
  );
};

export default Collapse;
