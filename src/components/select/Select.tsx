import * as Select from '@radix-ui/react-select';
import styles from '@/components/select/Select.module.css';
import { TriangleDownIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import ruImage from '/public/ru.svg';
import classNames from 'classnames';
import uaImage from '/public/ua.svg';
import esImage from '/public/es.svg';

export const SelectLang = () => {
  const { locale } = useParams<{ locale: string }>();
  const { push } = useRouter();

  return (
    <Select.Root
      onValueChange={(value) => {
        push(`/${value}`);
      }}
      defaultValue={locale}
    >
      <Select.Trigger className={styles.select} aria-label='Language'>
        <Select.Value />
        <Select.Icon>
          <TriangleDownIcon className={styles.arrow} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position='popper'>
          <Select.Viewport className={styles.scrollAreaViewport}>
            <Select.Item value='es' className={styles.itemWrapper}>
              <Select.ItemText>
                <div className={styles.item}>
                  <Image alt='esFlag' src={esImage} className={styles.icon} />
                  <span className={classNames('body-lg-l', styles.label)}>
                    es
                  </span>
                </div>
              </Select.ItemText>
            </Select.Item>
            <Select.Item value='ua' className={styles.itemWrapper}>
              <Select.ItemText>
                <div className={styles.item}>
                  <Image alt='uaFlag' src={uaImage} className={styles.icon} />
                  <span className={classNames('body-lg-l', styles.label)}>
                    ua
                  </span>
                </div>
              </Select.ItemText>
            </Select.Item>
            <Select.Item value='ru' className={styles.itemWrapper}>
              <Select.ItemText>
                <div className={styles.item}>
                  <Image alt='ruFlag' src={ruImage} className={styles.icon} />
                  <span className={classNames('body-lg-l', styles.label)}>
                    ru
                  </span>
                </div>
              </Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
