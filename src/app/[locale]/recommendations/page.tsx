import Footer from '@/components/footer/Footer';
import Main from '@/modules/recommendations/main/Main';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { recommendationsOptions } from '@/api/recommendation';

const RecommendationsPage = async (props: {
  params: { locale: string };
  searchParams: { search: string };
}) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    recommendationsOptions(props.params.locale, props.searchParams.search)
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main />
      <Footer />
    </HydrationBoundary>
  );
};

export default RecommendationsPage;
