import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="hero lg:min-h-screen justify-around"
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <img
          src={chair}
          className="max-w-lg rounded-lg shadow-xl"
          alt="Dentist Chair"
        />
        <div className="card bg-base-100 shadow-xl ">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
