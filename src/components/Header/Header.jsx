import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Header = () => {
  
  return (
    <div className="bg-secondary-color w-full">
      <div className="flex w-full max-w-7xl mx-auto py-5  gap-4 items-center flex-wrap">
        <div className="flex-1">
          <div className="w-full flex justify-between flex-col md:flex-row">
            <div>
              <span className="primary-color mr-5" >
                Free Call:
              </span>
              <span className="text-white">+1 234 567 890</span>
            </div>

            <div>
              <span className="primary-color mr-5" >
                Email:
              </span>
              <span className="text-white">builddream12@gmail.com</span>
            </div>
          </div>
        </div>

        <div>
          <ul className="list-none flex">
            <li className="inline">
              <a href="/" className="p-3 mr-2 primary-color bg-gray-600 block">
                <FaTwitter/>
              </a>
            </li>
            <li className="inline">
              <a href="/"  className="p-3 mr-2 primary-color bg-gray-600 block">
                <FaFacebookF/>
              </a>
            </li>
            <li className="inline">
              <a href="/" className="p-3 mr-2 primary-color bg-gray-600 block">
                <FaInstagram/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
