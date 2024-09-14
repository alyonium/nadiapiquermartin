import Recommendation from '@/modules/recommendations/recommendation/Recommendation';
import Footer from '@/components/footer/Footer';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { recommendationSingle } from '@/api/recommendation';

const RecommendationPage = async (props: {
  params: { recommendationId: string; locale: string };
}) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    recommendationSingle(props.params.recommendationId, props.params.locale)
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Recommendation />
      <Footer />
    </HydrationBoundary>
  );
};

export default RecommendationPage;
