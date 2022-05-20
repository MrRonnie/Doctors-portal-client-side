import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success(`Successfully made an admin`);
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{user.email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs text-white">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs text-white">Remove</button>
      </td>
    </tr>
  );
};

export default UserRow;
