import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import styles from '@/modules/main/reviews/Reviews.module.css';
import Heading from '@/components/heading/Heading';
import Review from '@/modules/main/reviews/components/review/Review';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import { data, ReviewType } from '@/modules/main/reviews/reviewsData';

const Reviews = () => {
  const t = useTranslations('main.reviews');

  return (
    <div
      id='reviews'
      className={classNames(
        'content-wrapper backgroundMarble',
        styles.contentWrapper
      )}
    >
      <div className={classNames('content', styles.content)}>
        <Heading
          trigger={styles.contentWrapper}
          target={styles.content}
          text={t('heading')}
        />

        <span className='body-md-l text-color-primary1000 text-align-center'>
          {t('subheading')}
        </span>

        <div className={styles.reviewWrapper}>
          {data.map((item: ReviewType) => (
            <Review key={item.reviewLink} data={item} />
          ))}
        </div>

        <div className={classNames(styles.buttonWrapper, 'buttonWrapper')}>
          <span className='body-md-l text-color-primary1000'>
            {t('linkToGoogle')}{' '}
            <a
              className='body-md-r link'
              rel='stylesheet'
              href='https://maps.app.goo.gl/rvdg9PoqHQVow2KS9'
            >
              Google
            </a>
          </span>

          <a href='https://maps.app.goo.gl/rvdg9PoqHQVow2KS9'>
            <Button text={t('button')} type={ButtonType.secondary} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
