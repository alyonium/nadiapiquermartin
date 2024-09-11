import classNames from 'classnames';
import styles from '@/modules/recommendations/recommendation/Recommendation.module.css';
import Header from '@/components/header/Header';
import Heading from '@/components/heading/Heading';
import { temp } from '@/temp/recommendationsTempData';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import { getDate } from '@/utils/getDate';

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
        <div className={classNames(styles.marbleContentWrapper, 'content')}>
          <div className={styles.marbleContent}>
            <Heading
              isLine={false}
              trigger={styles.contentWrapper}
              target={styles.marbleContent}
              text={temp[0].name}
            />

            {/*Todo rich text*/}
            <div className={styles.transparentWrapper}>
              <div className='body-lg-l'>{temp[0].text}</div>

              <div>
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
