import React from "react";

const InfoCard = ({ img, cardTitle, cardDetail, bgClass }) => {
  return (
    <div class={`card lg:card-side bg-base-100 shadow-xl py-5 px-2 ${bgClass}`}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardDetail}</p>
      </div>
    </div>
  );
};

export default InfoCard;
