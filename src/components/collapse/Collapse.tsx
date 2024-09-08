'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { TriangleDownIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';
import styles from '@/components/collapse/Collapse.module.css';
import { CollapseSize } from '@/types/types';
import classNames from 'classnames';

type CollapseProps = {
  heading: string;
  content: ReactNode;
  size?: CollapseSize;
  price?: number;
};

const Collapse = ({
  heading,
  content,
  size = CollapseSize.large,
  price,
}: CollapseProps) => {
  if (size === CollapseSize.small) {
    return (
      <Accordion.Root className={styles.smallCollapseWrapper} collapsible>
        <Accordion.Item value={heading}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.smallTrigger}>
              <span className='body-md-r'>{heading}</span>
              <div className={styles.priceWrapper}>
                <span className='body-md-r'>{price}€</span>
                <TriangleDownIcon className={styles.collapseIcon} />
              </div>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content
            className={classNames(
              styles.contentWrapper,
              styles.smallContentWrapper
            )}
          >
            {content}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    );
  }

  return (
    <Accordion.Root
      type='single'
      className={styles.collapseWrapper}
      collapsible
    >
      <Accordion.Item value={heading}>
        <Accordion.Header>
          <Accordion.Trigger className={styles.trigger}>
            <span className='body-lg-r'>{heading}</span>
            <TriangleDownIcon className={styles.collapseIcon} />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={styles.contentWrapper}>
          <div className={styles.line} />
          {content}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default Collapse;
