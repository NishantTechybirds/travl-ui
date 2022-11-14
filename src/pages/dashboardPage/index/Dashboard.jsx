/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";

const Dashboard = () => {
  return (
    <div className="">
      <SideBar></SideBar>
      <div className="bg-yellow-500  grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
