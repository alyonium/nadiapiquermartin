import classNames from 'classnames';
import styles from '@/modules/recommendations/main/components/card/Card.module.css';
import { RecommendationType } from '@/types/recommendations';
import { getDate } from '@/utils/getDate';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import RecommendationRichTextRenderer from '@/components/richTextRenderer/RecommendationRichTextRenderer/RecommendationRichTextRenderer';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

type CardProps = {
  data: RecommendationType;
};

const Card = ({ data }: CardProps) => {
  const t = useTranslations('recommendations.list');
  const pathname = usePathname();

  return (
    <div
      className={classNames(
        styles.cardWrapper,
        'transparent-wrapper box-shadow'
      )}
    >
      <span className='body-lg-r text-color-primary1000'>
        {data.attributes.title}
      </span>
      <span
        className={classNames(
          styles.textOverflow,
          'body-lg-l text-color-primary1000 text-overflow text-rendered-card'
        )}
      >
        <RecommendationRichTextRenderer content={data.attributes.content} />
      </span>
      <div className={styles.buttonWrapper}>
        <span className='body-lg-l text-color-primary1000'>
          {getDate(data.attributes.createdAt)}
        </span>
        <Link href={`${pathname}/${data.attributes.slug}`}>
          <Button text={t('button')} type={ButtonType.secondary} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
