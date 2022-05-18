import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card w-96 mx-auto  bg-base-100 shadow-xl mt-10 justify-around ">
      <div className="card-body space-y-1 text-center">
        <h2 className="card-title text-secondary justify-center ">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slot Available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="btn btn-sm btn-secondary  text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary "
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
