import './Team.css'
import {
  BiLogoFacebook,
  BiLogoGoogle,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";

import engineerImg1 from "../../assets/images/engineer_1.webp";
import engineerImg2 from "../../assets/images/engineer_2.webp";
import engineerImg3 from "../../assets/images/engineer_3.webp";
import engineerImg4 from "../../assets/images/engineer_4.webp";

const Team = () => {
  return (
    <div>
        
            <div className="team grid place-items-center w-full min-h-screen">
              <div className="container mx-auto px-6 md:px-24">
                <h4 className="text-lg primary-color text-center mb-4 font-bold my-4 md:mb-6">
                  Team & Staff
                </h4>
                <h1 className="text-2xl md:text-6xl font-bold text-center mb-4">
                  Aualified Engineers
                </h1>
                <div className="grid grid-cols-1 md:grid-cols lg:grid-cols-4 gap-4">
                  <div className="team-card bg-white shadow-md">
                    <img src={engineerImg1} alt="" />
                    <div className="card-content my-4">
                      <h1 className="text-2xl text-center font-bold uppercase">
                        Jhon
                      </h1>
                      <p className="text-gray-400 text-center uppercase">
                        Senior Engineer
                      </p>
                    </div>
                    <div className="team-social flex flex-col gap-y-2">
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoTwitter />
                        </a>
                      </div>
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoFacebook />
                        </a>
                      </div>
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoInstagram />
                        </a>
                      </div>
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoGoogle />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-card bg-white shadow-md">
                    <img src={engineerImg2} alt="" />
                    <div className="card-content my-4">
                      <h1 className="text-2xl text-center font-bold uppercase">
                        William
                      </h1>
                      <p className="text-gray-400 text-center uppercase">
                        Senior Engineer
                      </p>
                    </div>
                    <div className="team-social flex flex-col gap-y-2">
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoTwitter />
                        </a>
                      </div>
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoFacebook />
                        </a>
                      </div>
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoInstagram />
                        </a>
                      </div>
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoGoogle />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-card bg-white shadow-md">
                    <img src={engineerImg3} alt="" />
                    <div className="card-content my-4">
                      <h1 className="text-2xl text-center font-bold uppercase">
                        Mary
                      </h1>
                      <p className="text-gray-400 text-center uppercase">
                        Senior Engineer
                      </p>
                    </div>
                    <div className="team-social flex flex-col gap-y-2">
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoTwitter />
                        </a>
                      </div>
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoFacebook />
                        </a>
                      </div>
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoInstagram />
                        </a>
                      </div>
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoGoogle />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-card bg-white shadow-md">
                    <img src={engineerImg4} alt="" />
                    <div className="card-content my-4">
                      <h1 className="text-2xl text-center font-bold uppercase">
                        Chris
                      </h1>
                      <p className="text-gray-400 text-center uppercase">
                        Senior Engineer
                      </p>
                    </div>
                    <div className="team-social flex flex-col gap-y-2">
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoTwitter />
                        </a>
                      </div>
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoFacebook />
                        </a>
                      </div>
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoInstagram />
                        </a>
                      </div>
                      <div className="team-social-icon">
                        <a href="">
                          <BiLogoGoogle />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
    </div>
  )
}

export default Team
