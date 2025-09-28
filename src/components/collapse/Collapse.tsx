'use client';

import { TriangleDownIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';
import styles from '@/components/collapse/Collapse.module.css';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import gsap from 'gsap';

type CollapseProps = {
  id: string;
  heading: ReactNode;
  content: ReactNode;
  className?: string;
  size?: 'small' | 'large';
};

const Collapse = ({
  id,
  heading,
  content,
  className,
  size = 'large',
}: CollapseProps) => {
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
    <div
      className={classNames(
        styles.collapseWrapper,
        className,
        size === 'small' && styles.smallCollapseWrapper,
        'box-shadow'
      )}
    >
      <div
        onClick={toggleCollapse}
        className={classNames(
          styles.trigger,
          size === 'small' && styles.smallTrigger
        )}
      >
        <span
          className={classNames(
            size === 'large' ? 'body-lg-r' : 'body-md-r',
            size === 'small' && styles.smallHeading
          )}
        >
          {heading}
        </span>
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
