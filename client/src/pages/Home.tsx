import Hero from "../components/Hero";
import LastestListings from "../components/LastestListings";
import { Plans } from "../components/Plans";

const Home = () => {
  return (
    <div>
      <Hero />
      <LastestListings />
      <Plans />
    </div>
  );
};

export default Home;
