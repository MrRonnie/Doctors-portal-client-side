import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card w-96 mx-auto bg-base-100 shadow-xl">
      <div class="card-body space-y-6">
        <p>{review.review}</p>
        <div class="flex items-center">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
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
