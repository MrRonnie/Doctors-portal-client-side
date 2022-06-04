import React, { useState } from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, role, name } = user;
  const makeAdmin = () => {
    fetch(`https://glacial-falls-98864.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td className="">
        {user?.role === "admin" ? (
          <span className="bg-gray-600 text-white px-8 font-semibold rounded-md ">
            Admin
          </span>
        ) : (
          <button
            onClick={makeAdmin}
            className="bg-emerald-500 text-white px-3 rounded"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs loading">loading</button>
      </td>
    </tr>
  );
};

export default UserRow;
