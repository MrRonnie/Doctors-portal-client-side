import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer px-10 drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-3xl font-bold text-secondary">
          Welcome to Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className=" drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu  overflow-y-auto w-52  bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My reviews</Link>
          </li>
          <li>
            <Link to="/dashboard/history">My History</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/addDoctor">Add a Doctor</Link>
              </li>
              <li>
                <Link to="/dashboard/manageDoctors">Manage Doctors</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
