import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LastestListings from "../components/LastestListings";
import { Plans } from "../components/Plans";

const Home = () => {
  return (
    <div>
      <Hero />
      <LastestListings />
      <Plans />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
