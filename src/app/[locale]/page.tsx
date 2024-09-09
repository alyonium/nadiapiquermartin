import Intro from '@/modules/main/intro/Intro';
import About from '@/modules/main/about/About';
import Education from '@/modules/main/education/Education';
import Services from '@/modules/main/services/Services';
import Reviews from '@/modules/main/reviews/Reviews';
import Office from '@/modules/main/office/Office';
import Recommendations from '@/modules/main/recommendations/Recommendations';
import Contacts from '@/modules/main/contacts/Contacts';

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Education />
      <Services />
      <Reviews />
      <Office />
      <Recommendations />
      <Contacts />
    </>
  );
};

export default Home;
