'use client';

import classNames from 'classnames';
import styles from '@/modules/FAQ/FAQ.module.css';
import Header from '@/components/header/Header';
import Heading from '@/components/heading/Heading';
import Collapse from '@/components/collapse/Collapse';
import { useTranslations } from 'next-intl';
import { DotFilledIcon } from '@radix-ui/react-icons';

const FAQ = () => {
  const t = useTranslations('FAQ');
  const handleLocaleChange = (newLocale: string) => `/${newLocale}/FAQ/`;

  const data = [
    {
      id: 'medicalResearchResultsHeading',
      heading: 'medicalResearchResultsHeading',
      content: [
        'medicalResearchResult1',
        'medicalResearchResult2',
        'medicalResearchResult3',
      ],
    },
    {
      id: 'followUpConsultationHeading',
      heading: 'followUpConsultationHeading',
      content: [
        'followUpConsultation1',
        'followUpConsultation2',
        'followUpConsultation3',
        'followUpConsultation4',
      ],
    },
    {
      id: 'urgentConsultationHeading',
      heading: 'urgentConsultationHeading',
      content: [
        'urgentConsultation1',
        'urgentConsultation2',
        'urgentConsultation3',
      ],
    },
    {
      id: 'emailConsultationHeading',
      heading: 'emailConsultationHeading',
      content: [
        'emailConsultation1',
        'emailConsultation2',
        'emailConsultation3',
        'emailConsultation4',
      ],
    },
    {
      id: 'prescriptionsHeading',
      heading: 'prescriptionsHeading',
      content: [
        'prescriptions1',
        'prescriptions2',
        'prescriptions3',
        'prescriptions4',
      ],
    },
    {
      id: 'testsHeading',
      heading: 'testsHeading',
      content: ['tests1', 'tests2'],
    },
  ];

  return (
    <div
      className={classNames(
        'content-wrapper backgroundMarble',
        styles.contentWrapper
      )}
    >
      <Header isBlue={true} getNewPathnameForLocale={handleLocaleChange} />

      <div className={styles.marbleContentWrapper}>
        <div className={classNames(styles.marbleContent, 'content')}>
          <Heading
            isLine={false}
            trigger={styles.contentWrapper}
            target={styles.marbleContent}
            text={t('heading')}
          />

          <div className={styles.collapseWrapper}>
            {data.map((item) => (
              <Collapse
                className={styles.collapse}
                key={item.id}
                id={item.id}
                heading={t(item.heading)}
                content={
                  <>
                    {item.content.map((contentItem) => (
                      <span
                        key={contentItem}
                        className='body-lg-l text-color-primary1000'
                      >
                        {t.rich(contentItem, {
                          italic: (chunks) => (
                            <span className='body-lg-i'>{chunks}</span>
                          ),
                          li: (chunks) => (
                            <ul>
                              <li
                                className={`body-lg-l text-color-primary1000`}
                              >
                                <DotFilledIcon fontSize={14} /> {chunks}
                              </li>
                            </ul>
                          ),
                        })}
                      </span>
                    ))}
                  </>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
