'use client';

import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import styles from '@/modules/main/services/Services.module.css';
import Heading from '@/components/heading/Heading';
import Collapse from '@/components/collapse/Collapse';
import ModalWindow from '@/components/modalWindow/ModalWindow';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { servicesOptions } from '@/api/service';
import { useParams } from 'next/navigation';
import ServicesRichTextRenderer from '@/components/richTextRenderer/ServicesRichTextRenderer/ServicesRichTextRenderer';

const Services = () => {
  const t = useTranslations('main.services');
  const { locale } = useParams<{
    locale: string;
  }>();

  const { data } = useSuspenseQuery(servicesOptions(locale));

  return (
    <div
      id='services'
      className={classNames('content-wrapper', styles.contentWrapper)}
    >
      <div className={classNames('content', styles.content)}>
        <Heading
          trigger={styles.contentWrapper}
          target={styles.content}
          text={t('heading')}
        />

        <div className={styles.collapseWrapper}>
          {data.data.map((item) => (
            <Collapse
              // slice(0,3) не магический, он нужен просто чтобы id нормальный собрать, просто title вставить нельзя, тк в нем содержатся пробелы и с пробелами открывание коллапса работает неверно. item.id добавляю, потому что вырезанные кусочки (slice(0,3)) title не уникальные и не могут быть id для коллапса
              id={`${item.attributes.title.slice(0, 3)}${item.id}`}
              key={item.id}
              heading={
                (
                  <>
                    {item.attributes.title}{' '}
                    <span className='body-lg-i'>
                      {item.attributes.subtitle}
                    </span>
                  </>
                ) as unknown as string
              }
              content={
                <ServicesRichTextRenderer content={item.attributes.content} />
              }
            />
          ))}
        </div>

        <div className={classNames(styles.buttonWrapper, 'buttonWrapper')}>
          <span className='body-md-l'>{t('payment')}</span>

          <ModalWindow
            button={<Button text={t('button')} type={ButtonType.secondary} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
