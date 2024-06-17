import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListnings from "../components/JobListings";
import ViewAlljobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListnings isHome={true} />
      <ViewAlljobs />
    </>
  );
};

export default HomePage;
