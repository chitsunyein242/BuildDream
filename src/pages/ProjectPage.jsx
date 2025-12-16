import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import Projects from "../components/Projects/Projects";
import PageAnimation from "../components/PageAnimation/PageAnimation";

const ProjectPage = () => {
  return (
    <>
      <Helmet>
        <title>BUILDREAM | Projects</title>
      </Helmet>
      <PageAnimation>
        <>
          <Banner title="Project Page" since={false} isBtn={false} />
          <Projects />
        </>
      </PageAnimation>
    </>
  );
};

export default ProjectPage;
