import React from "react";
import appointment from "../../assets/images/appointment.png";
import myPic from "../../assets/images/my-pic.JPG";

const About = () => {
  return (
    <div
      class="hero  min-h-screen"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <>
        <div className=" shadow-lg text-white rounded font-mono  pl-10 p-5 lg:ml-20">
          <div className="w-52 mx-auto mt-5 h-52">
            <img src={myPic} alt="" />
          </div>
          <h1 className="text-xl my-2 mt-24 font-semibold text-emerald-600">
            About Me
          </h1>

          <p className="text-md font-semibold">Name: Omar Faruk Ronnie </p>
          <p className="text-md font-semibold my-2">
            Email: ronymaze55@gmail.com{" "}
          </p>
          <p className="text-md font-semibold">Education</p>
          <ul className="">
            <li className="ml-24 font-medium">SSC - Science</li>
            <li className="ml-24 font-medium">HSC - Science</li>
            <li className="ml-24 font-medium">
              Bachelor - Computer Science and Technology
            </li>
          </ul>
          <br />
          <p className="text-md font-semibold">Skills</p>
          <ul>
            <li className="ml-24 font-medium">HTML</li>
            <li className="ml-24 font-medium">CSS</li>
            <li className="ml-24 font-medium">Bootstrap , Tailwind</li>
            <li className="ml-24 font-medium">React JS</li>
            <li className="ml-24 font-medium">Git</li>
            <li className="ml-24 font-medium">Javascript, Typescript, ES6 </li>
          </ul>

          <p className="text-md font-semibold my-4">My Projects</p>
          <ul>
            <li className="ml-24 font-medium text-blue-600">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://gadget-warehouse-management.web.app/"
              >
                {" "}
                Warehouse Management
              </a>
            </li>
            <li className="ml-24 font-medium text-blue-600">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://independent-service-prov-a3a74.web.app/"
              >
                Independent Service Provider
              </a>
            </li>
            <li className="ml-24 font-medium text-blue-600">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://cameramania.netlify.app/"
              >
                Camera Mania
              </a>
            </li>
          </ul>
        </div>
      </>
    </div>
  );
};

export default About;
