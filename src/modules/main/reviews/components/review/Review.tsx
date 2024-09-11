import { ReviewType, StarRating } from '@/modules/main/reviews/tempData';
import styles from '@/modules/main/reviews/components/review/Review.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import aboutPhoto from '/public/aboutPhoto.webp';
import star from '/public/star.webp';
import emptyStar from '/public/emptyStar.webp';
import { getDate } from '@/utils/getDate';

const getRating = (num: StarRating) => {
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

type ReviewProps = {
  data: ReviewType;
};

const Review = ({ data }: ReviewProps) => {
  return (
    <div
      className={classNames(
        styles.contentWrapper,
        'transparent-wrapper box-shadow'
      )}
    >
      <div className={styles.nameWrapper}>
        <Image
          src={aboutPhoto}
          className={styles.googleImg}
          alt={data.reviewer.displayName}
          width={32}
          height={32}
        />
        <span className='body-md-r text-color-primary1000'>
          {data.reviewer.displayName}
        </span>
      </div>
      <div className={styles.ratingWrapper}>
        <span>{getRating(data.starRating)}</span>
        <span className='label-sm text-color-primary1000'>
          {getDate(data.createTime)}
        </span>
      </div>

      <span className='body-md-l  text-color-primary1000 text-overflow'>
        {data.comment}
      </span>
    </div>
  );
};

export default Review;
