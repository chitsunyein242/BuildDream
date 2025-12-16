import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>BUILDREAM | Page Not Found</title>
      </Helmet>
      <div className="w-full m-h-screen grid place-items-center">
        <h1 className="text-3xl text-center text-gray-800 mb-6">
          Page Not Found
        </h1>
        <Link to="/">
          <button>Go Back Home</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
