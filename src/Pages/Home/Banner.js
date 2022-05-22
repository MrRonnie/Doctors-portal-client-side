import React from "react";
import chair from "../../assets/images/chair.png";
import backgroundImg from "../../assets/images/bg.png";
import PrimaryButton from "../Shared/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero sm:min-h-screen justify-center">
      <div className="">
        <img className="w-full h-full" src={backgroundImg} alt="" />
      </div>
      <div className="hero-content flex-col lg:gap-32 lg:flex-row-reverse px-5">
        <img
          src={chair}
          className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>
            <span onClick={() => navigate("/appointment")}>Book Now</span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
