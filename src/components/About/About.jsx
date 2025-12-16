import aboutImg from "../../assets/images/home_page_2.webp";
import consulting from "../../assets/images/consulting.png";
import settings from "../../assets/images/settings.png";
import engineer from "../../assets/images/engineer.png";
import buildings from "../../assets/images/buildings.png";
import './About.css'
import { Bounce, Flip } from "react-reveal";

const About = () => {
  return (
    <div>
      <div className="bg-gray-100 w-full py-6 md:py-24">
        <div className="container mx-auto px-6 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <div className="relative w-full h-fullp-2 md:p-6">
              <Flip left>
                <img
                src={aboutImg}
                alt="About Image"
                className="w-full h-full object-cover"
              />
              </Flip>
              <div className="absolute bottom-0 right-0 about-img-card flex px-4 py-6 items-center justify-start w-full gap-x-4 md:w-[300px] about-info-card">
                <div>
                  <img src={engineer} alt="" />
                </div>
                <div>
                  <span
                    className="text-xl"
                    style={{
                      color: "rgb(255, 166, 43)",
                    }}
                  >
                    38
                  </span>
                  <p className="text-2xl font-bold text-white">
                    Years of experience
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-y-6">
              <p className="primary-color font-bold text-lg">
                Welcome to BuildDream
              </p>
              <h1 className="text-4xl md:text-6xl  leading-20 font-semibold text-wrap">
                Quality and Afforable Constructor
              </h1>
              <p className="text-gray-400">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <h2 className="text-2xl text-gray-600">We Can Help You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <Bounce right>
                 <div className="px-4 py-6 flex gap-x-4 shadow-lg hover:bg-gray-900 about-card transition duration-500">
                  <div>
                    <img src={buildings} alt="" />
                  </div>
                  <div>
                    <h2 className="text-xl text-gray-900 transition duration-500">
                      Construction
                    </h2>
                    <p className="text-gray-400 transition duration-500">
                      Far far away, behind the word mountains.
                    </p>
                  </div>
                </div>
                <div className="px-4 py-6 flex gap-x-4 shadow-lg hover:bg-gray-900 about-card transition duration-500">
                  <div>
                    <img src={buildings} alt="" />
                  </div>
                  <div>
                    <h2 className="text-xl text-gray-900 transition duration-500">
                      Architecture
                    </h2>
                    <p className="text-gray-400 transition duration-500">
                      Far far away, behind the word mountains.
                    </p>
                  </div>
                </div>
                <div className="px-4 py-6 flex gap-x-4 shadow-lg hover:bg-gray-900 about-card transition duration-500">
                  <div>
                    <img src={consulting} alt="" />
                  </div>
                  <div>
                    <h2 className="text-xl text-gray-900 transition duration-500">
                      Consulting
                    </h2>
                    <p className="text-gray-700 transition duration-500">
                      Far far away, behind the word mountains.
                    </p>
                  </div>
                </div>
                <div className="px-4 py-6 flex gap-x-4 shadow-lg hover:bg-gray-900 about-card transition duration-500">
                  <div>
                    <img src={settings} alt="" />
                  </div>
                  <div>
                    <h2 className="text-xl text-gray-900 transition duration-500">
                      Mechanical
                    </h2>
                    <p className="text-gray-400 transition duration-500">
                      Far far away, behind the word mountains.
                    </p>
                  </div>
                </div>
               </Bounce>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
