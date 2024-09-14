import Intro from '@/modules/main/intro/Intro';
import About from '@/modules/main/about/About';
import Education from '@/modules/main/education/Education';
import Services from '@/modules/main/services/Services';
// import Reviews from '@/modules/main/reviews/Reviews';
import Office from '@/modules/main/office/Office';
import Recommendations from '@/modules/main/recommendations/Recommendations';
import Contacts from '@/modules/main/contacts/Contacts';
import Footer from '@/components/footer/Footer';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { priceOptions } from '@/api/price';
import { recommendationsOptions } from '@/api/recommendation';

const Home = async (props: { params: { locale: string } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(recommendationsOptions(props.params.locale));
  await queryClient.prefetchQuery(priceOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Intro />
      <About />
      <Education />
      <Services />
      {/*Todo*/}
      {/*<Reviews />*/}
      <Office />
      <Recommendations />
      <Contacts />
      <Footer />
    </HydrationBoundary>
  );
};

export default Home;
