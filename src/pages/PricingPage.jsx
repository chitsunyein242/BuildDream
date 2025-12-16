import Banner from "../components/Banner/Banner";
import PageAnimation from "../components/PageAnimation/PageAnimation";
import Pricing from "../components/Pricing/Pricing";
import { Helmet } from "react-helmet-async";

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>BUILDREAM | Pricing</title>
      </Helmet>
      <PageAnimation>
        <>
          <Banner title="Pricing Page" since={false} isBtn={false} />
          <Pricing />
        </>
      </PageAnimation>
    </>
  );
};

export default PricingPage;
