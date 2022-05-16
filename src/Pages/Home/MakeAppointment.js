import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center rounded "
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-130px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5 space-y-3">
        <h3 className="text-xl text-secondary font-semibold">Appointment</h3>
        <h2 className="text-2xl text-white">Make an Appointment Today</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
          veniam reiciendis dolorem minus aliquam sit omnis perspiciatis
          voluptatibus quaerat assumenda. Quam illo suscipit cum distinctio
          repellat eum enim blanditiis recusandae nobis ipsa vero, ullam ad
          magni itaque nulla aperiam molestiae!
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
