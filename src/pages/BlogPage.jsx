import Banner from "../components/Banner/Banner";
import Blog from "../components/Blog/Blog";
import { Helmet } from "react-helmet-async";
import PageAnimation from "../components/PageAnimation/PageAnimation";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>BUILDREAM | Blog</title>
      </Helmet>
      <PageAnimation>
        <>
          <Banner title="Blog Page" since={false} isBtn={false} />
          <Blog title={"All Blogs"} />
          <Blog title={""} />
          <Blog title={""} />
        </>
      </PageAnimation>
    </>
  );
};

export default BlogPage;
