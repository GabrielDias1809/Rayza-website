import Header from './Header';
import Home from './Home';
import HoWeAre from './HoWeAre';
import Values from './Values';
import Surf from './Surf';
// import Trainers from './Trainers';
// import Trips from './Trips';
import Feedbacks from './Feedbacks';
import Footer from './Footer';
import InstaFeed from './instaFeed';

const Page = () => {
  return (
    <>
      <Header />
      <Home />
      <HoWeAre />
      <Feedbacks />
      <Surf />
      <Values />
      <InstaFeed />
      {/* <Trainers /> */}
      {/* <Trips /> */}
      <Footer />
    </>
  );
};

export default Page;
