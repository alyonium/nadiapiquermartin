import classNames from 'classnames';
import styles from '@/modules/main/education/Education.module.css';
import Image from 'next/image';
import procedurePhoto from '/public/procedurePhoto.png';
import Heading from '@/components/heading/Heading';
import { useTranslations } from 'next-intl';
import ModalWindow from '@/components/modalWindow/ModalWindow';

const Education = () => {
  const t = useTranslations('education');

  return (
    <div className={classNames('content-wrapper', styles.contentWrapper)}>
      <div className={classNames('content', styles.content)}>
        <Heading
          trigger={styles.contentWrapper}
          target={styles.content}
          text={t('heading')}
        />

        <div className={styles.blockWrapper}>
          <div className={styles.leftBlockWrapper}>
            <div className={classNames(styles.ellipse, 'ellipse')} />

            <Image
              alt='procedure'
              src={procedurePhoto}
              className={classNames(styles.imageWrapper, 'imageWrapper')}
            />
          </div>

          <div className={styles.textBlockWrapper}>
            <div className={styles.textBlockItem}>
              <span className='body-lg-i text-color-secondary400'>01</span>
              <div className={styles.textItem}>
                <span className='body-md-r'>{t('education1')}</span>
                <div className={styles.textItemInfo}>
                  <span className='body-sm-i'>Universitat de València</span>
                  <span className='body-sm-l'>2009 - 2016</span>
                </div>
              </div>
            </div>

            <div className={styles.textBlockItem}>
              <span className='body-lg-i text-color-secondary400'>02</span>
              <div className={styles.textItem}>
                <span className='body-md-r'>{t('education2')}</span>
                <div className={styles.textItemInfo}>
                  <span className='body-sm-i'>
                    Hospital Universitario de la Ribera, Alzira
                  </span>
                  <span className='body-sm-l'>2019 - 2023</span>
                </div>
              </div>
            </div>

            <div className={styles.textBlockItem}>
              <span className='body-lg-i text-color-secondary400'>03</span>
              <div className={styles.textItem}>
                <span className='body-md-r'>{t('education3')}</span>
                <div className={styles.textItemInfo}>
                  <span className='body-sm-i'>
                    Hospital Universitario Cruces, Barakaldo
                  </span>
                  <span className='body-sm-l'>2022</span>
                </div>
              </div>
            </div>

            <div className={styles.textBlockItem}>
              <span className='body-lg-i text-color-secondary400'>04</span>
              <div className={styles.textItem}>
                <span className='body-md-r'>{t('education4')}</span>
                <div className={styles.textItemInfo}>
                  <span className='body-sm-i'>
                    Hospital Universitario Son Espases, Palma de Mallorca
                  </span>
                  <span className='body-sm-l'>2023</span>
                </div>
              </div>
            </div>

            <div className={styles.textBlockItem}>
              <span className='body-lg-i text-color-secondary400'>05</span>
              <div className={styles.textItem}>
                <span className='body-md-r'>{t('education5')}</span>
                <div className={styles.textItemInfo}>
                  <span className='body-sm-i'>Universidad de Alcalá</span>
                  <span className='body-sm-l'>2021 - 2022</span>
                </div>
              </div>
            </div>

            <div className={styles.textBlockItem}>
              <span className='body-lg-i text-color-secondary400'>06</span>
              <div className={styles.textItem}>
                <span className='body-md-r'>{t('education6')}</span>
                <div className={styles.textItemInfo}>
                  <span className='body-sm-i'>València</span>
                  <span className='body-sm-l'>2018 - настоящее время</span>
                </div>
              </div>
            </div>

            <div className={styles.textBlockItem}>
              <span className='body-lg-i text-color-secondary400'>07</span>
              <div className={styles.textItem}>
                <span className='body-md-r'>{t('education7')}</span>
                <div className={styles.textItemInfo}>
                  <span className='body-sm-i'>España</span>
                  <span className='body-sm-l'>2019 - настоящее время</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
