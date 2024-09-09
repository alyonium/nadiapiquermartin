import {
  temp,
  Review,
  StarRating,
} from '@/modules/main/reviews/components/Review/tempData';
import styles from '@/modules/main/reviews/components/review/Review.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import aboutPhoto from '/public/aboutPhoto.png';
import star from '/public/star.png';
import emptyStar from '/public/emptyStar.png';

const getRating = (num) => {
  if (num === StarRating.ONE) {
    return (
      <div>
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
        <Image
          src={emptyStar}
          className={styles.googleImg}
          alt='empty star'
          width={16}
          height={16}
        />
        <Image
          src={emptyStar}
          className={styles.googleImg}
          alt='empty star'
          width={16}
          height={16}
        />
        <Image
          src={emptyStar}
          className={styles.googleImg}
          alt='empty star'
          width={16}
          height={16}
        />
        <Image
          src={emptyStar}
          className={styles.googleImg}
          alt='empty star'
          width={16}
          height={16}
        />
      </div>
    );
  }
  if (num === StarRating.TWO) {
    return (
      <div>
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
        <Image
          src={emptyStar}
          className={styles.googleImg}
          alt='empty star'
          width={16}
          height={16}
        />
        <Image
          src={emptyStar}
          className={styles.googleImg}
          alt='empty star'
          width={16}
          height={16}
        />
        <Image
          src={emptyStar}
          className={styles.googleImg}
          alt='empty star'
          width={16}
          height={16}
        />
      </div>
    );
  }
  if (num === StarRating.THREE) {
    return (
      <div>
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
        <Image
          src={emptyStar}
          className={styles.googleImg}
          alt='empty star'
          width={16}
          height={16}
        />
        <Image
          src={emptyStar}
          className={styles.googleImg}
          alt='empty star'
          width={16}
          height={16}
        />
      </div>
    );
  }
  if (num === StarRating.FOUR) {
    return (
      <div>
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
        <Image
          src={emptyStar}
          className={styles.googleImg}
          alt='empty star'
          width={16}
          height={16}
        />
      </div>
    );
  }
  if (num === StarRating.FIVE) {
    return (
      <div>
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
        <Image
          src={star}
          className={styles.googleImg}
          alt='star'
          width={16}
          height={16}
        />
      </div>
    );
  }
  return '';
};

const getDate = (timestamp: string) => {
  const date = new Date(timestamp);

  return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
};
const Review = () => {
  return (
    <>
      {temp.map((item: Review) => (
        <div
          key={item.reviewId}
          className={classNames(
            styles.contentWrapper,
            'transparent-wrapper box-shadow'
          )}
        >
          <div className={styles.nameWrapper}>
            <Image
              src={aboutPhoto}
              className={styles.googleImg}
              alt={item.reviewer.displayName}
              width={32}
              height={32}
            />
            <span className='body-md-r text-color-primary1000'>
              {item.reviewer.displayName}
            </span>
          </div>
          <div className={styles.ratingWrapper}>
            <span>{getRating(item.starRating)}</span>
            <span className='label-sm text-color-primary1000'>
              {getDate(item.createTime)}
            </span>
          </div>

          <span className='body-md-l  text-color-primary1000'>
            {item.comment}
          </span>
        </div>
      ))}
    </>
  );
};

export default Review;
