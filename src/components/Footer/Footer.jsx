import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import blogImg1 from "../../assets/images/blog_1.webp";
import blogImg2 from "../../assets/images/blog_2.webp";
import blogImg3 from "../../assets/images/blog_3.webp";
import { BiComment, BiMapAlt, BiPhone, BiUser } from "react-icons/bi";
import 'react-accessible-accordion/dist/fancy-example.css';


const Footer = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-800">
      <div className="py-12 md:py-28 w-full container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-6">
          <div>
            <h3 className="text-3xl font-bold text-white uppercase mb-7">
              BuildDream
            </h3>
            <p className="text-gray-500 my-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div>
              <ul className="list-none flex">
                <li className="inline">
                  <a
                    href="/"
                    className="p-3 mr-2 primary-color bg-gray-600 block"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="/"
                    className="p-3 mr-2 primary-color bg-gray-600 block"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="/"
                    className="p-3 mr-2 primary-color bg-gray-600 block"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white uppercase mb-7">
              Service
            </h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <img src={blogImg1} width={100} height={100} alt="" />
                <div>
                  <h4 className="primary-color text-md text-white hover:primary-color">
                    Biggest Construction in New York, USA
                  </h4>
                  <div className="flex gap-x-2">
                    <div className="flex gap-x-2 items-center">
                      <BiUser className="primary-color font-bold text-sm" />
                      <p className=" text-sm uppercase text-md text-gray-400">
                        Admin
                      </p>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <BiComment className="primary-color  text-sm" />
                      <p className=" text-xs uppercase text-md text-gray-400">
                        3 comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <img src={blogImg2} width={100} height={100} alt="" />
                <div>
                  <h4 className="primary-color text-md text-white hover:primary-color">
                    Biggest Construction in New York, USA
                  </h4>
                  <div className="flex gap-x-2">
                    <div className="flex gap-x-2 items-center">
                      <BiUser className="primary-color  text-sm" />
                      <p className=" text-sm uppercase text-md text-gray-400">
                        Admin
                      </p>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <BiComment className="primary-color  text-sm" />
                      <p className=" text-xs uppercase text-md text-gray-400">
                        3 comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <img src={blogImg3} width={100} height={100} alt="" />
                <div>
                  <h4 className="primary-color text-md text-white hover:primary-color">
                    Biggest Construction in New York, USA
                  </h4>
                  <div className="flex gap-x-2">
                    <div className="flex gap-x-2 items-center">
                      <BiUser className="primary-color  text-sm" />
                      <p className=" text-sm uppercase text-md text-gray-400">
                        Admin
                      </p>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <BiComment className="primary-color  text-sm" />
                      <p className=" text-xs uppercase text-md text-gray-400">
                        3 comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white uppercase mb-7">
              quick links
            </h3>
            <div className="flex flex-col gap-y-4">
              <div>
                <a
                  href=""
                  className="text-white font-bold text-lg flex gap-x-2 items-center"
                >
                  <FaAngleRight />
                  <span>Home</span>
                </a>
                <a
                  href=""
                  className="text-white font-bold text-lg flex gap-x-2 items-center"
                >
                  <FaAngleRight />
                  <span>About</span>
                </a>
                <a
                  href=""
                  className="text-white font-bold text-lg flex gap-x-2 items-center"
                >
                  <FaAngleRight />
                  <span>Services</span>
                </a>
                <a
                  href=""
                  className="text-white font-bold text-lg flex gap-x-2 items-center"
                >
                  <FaAngleRight />
                  <span>Project</span>
                </a>
                <a
                  href=""
                  className="text-white font-bold text-lg flex gap-x-2 items-center"
                >
                  <FaAngleRight />
                  <span>Pricing</span>
                </a>
                <a
                  href=""
                  className="text-white font-bold text-lg flex gap-x-2 items-center"
                >
                  <FaAngleRight />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white uppercase mb-7">
              Have a question?
            </h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-4">
                <BiMapAlt className="primary-color text-3xl" />
                <span className="text-gray-300">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </div>
              <div className="flex gap-x-4">
                <BiPhone className="primary-color text-3xl" />
                <span className="text-gray-300">0977777276</span>
              </div>
              <div className="flex gap-x-4">
                <FaTelegram className="primary-color text-3xl" />
                <span className="text-gray-300">info@buildream.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 md:py-12 text-center bg-zinc-600 text-zinc-400">
        Copyright ©2025 All rights reserved | This template is made with  by Colorlib
      </div>
    </div>
  );
};

export default Footer;
