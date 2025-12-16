import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Construction from "../components/Construction/Construction";
import Service from "../components/Service/Service";
import Counter from "../components/Counter/Counter";
import Team from "../components/Team/Team";
import Projects from "../components/Projects/Projects";
import Pricing from "../components/Pricing/Pricing";
import Testingmonial from "../components/Testingmonial/Testingmonial";
import Blog from "../components/Blog/Blog";
import Faq from "../components/Faq/Faq";
import { Helmet } from "react-helmet-async";
import PageAnimation from "../components/PageAnimation/PageAnimation";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>BUILDREAM | Home</title>
      </Helmet>

      <PageAnimation>
        <>
          <Banner
            title="WE WILL BE HAPPY TO TAKE CARE OF YOUR WORK"
            since={true}
            isBtn={true}
          />
          <About />
          <Construction />
          <Service />
          <Counter />
          <Team />
          <Projects />
          <Pricing />
          <Testingmonial />
          <Blog />
          <Faq />
        </>
      </PageAnimation>
    </>
  );
};

export default HomePage;
