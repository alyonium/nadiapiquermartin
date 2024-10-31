'use client';

import { TriangleDownIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';
import styles from '@/components/collapse/Collapse.module.css';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import gsap from 'gsap';

type CollapseProps = {
  id: string;
  heading: string;
  content: ReactNode;
};

const Collapse = ({ id, heading, content }: CollapseProps) => {
  const [open, setOpen] = useState<Boolean>(false);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      gsap.to(`#${id}.${styles.contentWrapper}`, {
        height: 'auto',
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
  }, [open, id]);

  return (
    <div className={classNames(styles.collapseWrapper, 'box-shadow')}>
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
