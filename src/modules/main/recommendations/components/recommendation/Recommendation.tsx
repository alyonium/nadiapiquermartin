import classNames from 'classnames';
import styles from '@/modules/main/recommendations/components/recommendation/Recommendation.module.css';
import { getDate } from '@/utils/getDate';
import RecommendationRichTextRenderer from '@/components/richTextRenderer/RecommendationRichTextRenderer/RecommendationRichTextRenderer';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RecommendationType } from '@/types/recommendations';

type RecommendationsProps = {
  data: RecommendationType;
};

const Recommendation = ({ data }: RecommendationsProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname}/recommendations/${data.attributes.slug}`}
      className={classNames(
        styles.contentWrapper,
        'linkWrapper transparent-wrapper box-shadow'
      )}
    >
      <span className='body-lg-r text-color-primary1000'>
        {data.attributes.title}
      </span>
      <span className='label-sm text-color-primary1000'>
        {getDate(data.attributes.createdAt)}
      </span>
      <span
        className={classNames(
          'body-md-l text-color-primary1000 text-overflow text-rendered-card',
          styles.textOverflow
        )}
      >
        <RecommendationRichTextRenderer
          content={data.attributes.content}
          fontSize='md'
        />
      </span>
    </Link>
  );
};

export default Recommendation;
