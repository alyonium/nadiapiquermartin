'use client';

import classNames from 'classnames';
import styles from '@/modules/recommendations/recommendation/Recommendation.module.css';
import Header from '@/components/header/Header';
import Heading from '@/components/heading/Heading';
import { temp } from '@/temp/recommendationsTempData';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import { getDate } from '@/utils/getDate';
import {
  BlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer';
import Link from 'next/link';

const content: BlocksContent = [
  {
    type: 'paragraph',
    children: [
      {
        type: 'text',
        text: 'Как только женщина, у которой начинаются схватки, прибывает в клинику, ей обеспечивается постоянное наблюдение. Роженицу проводят в специально оборудованную родильную палату, где медицинский персонал следит за её состоянием и прогрессом родов. Врачи и акушеры контролируют частоту и интенсивность схваток, проводят необходимые процедуры и поддерживают связь с роженицей, чтобы она чувствовала себя уверенно и спокойно на протяжении всего процесса.',
      },
      {
        type: 'text',
        text: 'Комфорт и безопасность в родильном зале',
        italic: true,
      },
      {
        type: 'text',
        text: 'В испанских клиниках большое внимание уделяется созданию комфортных условий для роженицы. Родильные палаты оборудованы по последним медицинским стандартам, включая современные системы мониторинга, которые позволяют отслеживать состояние матери и ребенка в реальном времени. Здесь женщина окружена заботой и вниманием медперсонала, который готов в любой момент оказать необходимую помощь. Важным элементом является создание теплой и уютной атмосферы, которая способствует расслаблению и снижению уровня стресса.',
      },
    ],
  },
];

const Recommendation = () => {
  return (
    <>
      <div
        className={classNames(
          'content-wrapper backgroundMarble',
          styles.contentWrapper
        )}
      >
        <Header isBlue={true} />
        <div className={styles.marbleContentWrapper}>
          <div className={classNames(styles.marbleContent, 'content')}>
            <Heading
              isLine={false}
              trigger={styles.contentWrapper}
              target={styles.marbleContent}
              text={temp[0].name}
            />

            {/*Todo rich text*/}
            <div className={styles.transparentWrapper}>
              <div className='body-lg-l'>
                <BlocksRenderer
                  content={content}
                  blocks={{
                    paragraph: ({ children }) => (
                      <p className='body-lg-l text-color-primary1000'>
                        {children}
                      </p>
                    ),
                    link: ({ children, url }) => (
                      <Link href={url}>{children}</Link>
                    ),
                  }}
                  modifiers={{
                    bold: ({ children }) => (
                      <p className='body-lg-r text-color-primary1000'>
                        {children}
                      </p>
                    ),
                    italic: ({ children }) => (
                      <p className='body-lg-i text-color-primary1000'>
                        {children}
                      </p>
                    ),
                  }}
                />
              </div>

              <div className={styles.QRwrapper}>
                <div className={styles.QR}></div>
                <span className='body-lg-l'>{getDate(temp[0].date)}</span>
              </div>
            </div>

            <Button
              text={'Вернуться к списку рекомендаций'}
              type={ButtonType.secondary}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommendation;
