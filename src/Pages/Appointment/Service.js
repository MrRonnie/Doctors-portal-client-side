import React from "react";
import Services from "../Home/Services";
import PrimaryButton from "../Shared/PrimaryButton";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg  bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-secondary">{name}</h2>
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
          <button
            disabled={slots.length === 0}
            className="btn btn-secondary  text-white font-bold uppercase border-0"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
