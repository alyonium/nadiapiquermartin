import classNames from 'classnames';
import styles from '@/modules/recommendations/main/Main.module.css';
import Header from '@/components/header/Header';
import Heading from '@/components/heading/Heading';
import Card from '@/modules/recommendations/main/components/card/Card';
import { RecommendationType, temp } from '@/temp/recommendationsTempData';

const Main = () => {
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
              text={'Рекомендации'}
            />

            {temp.map((item: RecommendationType, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
