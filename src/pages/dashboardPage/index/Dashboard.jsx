/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import BarChart from "../../../components/BarChart";
import SideBar from "../sidebar/SideBar";

const Dashboard = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="h-screen p-2 grow">
        <div className="w-1/3 m-10 border border-gray-200 shadow-md h-2/5">
          <BarChart></BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
