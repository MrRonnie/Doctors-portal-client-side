import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";

import Service from "./Service";
import PrimaryButton from "../Shared/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda",
      img: whitening,
    },
  ];
  return (
    <div className="my-24">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our services
        </h3>
        <h2 className="text-3xl mt-2">Services We Provide</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>

      <div className="hero min-h-screen justify-center">
        <div className="hero-content flex-col lg:flex-row gap-14 px-24">
          <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>
              <span onClick={() => navigate("/appointment")}>Book Now</span>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
