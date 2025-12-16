import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import Service from "../components/Service/Service";
import PageAnimation from "../components/PageAnimation/PageAnimation";

const ServicePage = () => {
  return (
    <>
      <Helmet>
        <title>BUILDREAM | Service</title>
      </Helmet>
      <PageAnimation>
        <>
          <Banner title="Service Page" since={false} isBtn={false} />
          <Service />
        </>
      </PageAnimation>
    </>
  );
};

export default ServicePage;
