import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card w-96  mx-auto  bg-base-100 shadow-xl mt-10 justify-around">
      <div class="card-body text-center">
        <h2 class="card-title text-secondary justify-center ">{name}</h2>
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
        <div class="card-actions justify-center">
          <label
            for="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            class="btn btn-secondary  text-white font-bold uppercase border-0"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
