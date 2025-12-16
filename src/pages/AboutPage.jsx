import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import { Helmet } from "react-helmet-async";
import PageAnimation from "../components/PageAnimation/PageAnimation";
import Testingmonial from "../components/Testingmonial/Testingmonial";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>BUILDREAM | About</title>
      </Helmet>
      <PageAnimation>
        <>
          <Banner title="About Page" since={false} isBtn={false}/>
          <About />
          <Testingmonial/>
        </>
      </PageAnimation>
    </>
  );
};

export default AboutPage
