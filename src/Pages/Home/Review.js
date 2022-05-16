import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg mx-auto bg-base-100 shadow-xl">
      <div className="card-body space-y-6">
        <p>{review.review}</p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div className="">
            <h4 className="text-xl">{review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
