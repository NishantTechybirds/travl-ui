/** @format */

import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { BsFillBootstrapFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CottageIcon from "@mui/icons-material/Cottage";
import InfoIcon from "@mui/icons-material/Info";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

const SideBar = () => {
  return (
    <div className="sticky top-0 h-screen w-60">
      <Sidebar>
        <Menu className="bg-white">
          <SubMenu
            className="font-semibold text-gray-500"
            icon={<CottageIcon />}
            label="Dashboard"
          >
            <MenuItem>
              <Link to="/dashboardLight">dashboard light</Link>
            </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu
            label="Apps"
            icon={<InfoIcon />}
            className="font-semibold text-gray-500"
          >
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu
            label="Charts"
            icon={<TrendingUpOutlinedIcon />}
            className="font-semibold text-gray-500"
          >
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu
            label="Bootstrap"
            className="font-semibold text-gray-500"
            icon={<BsFillBootstrapFill />}
          >
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label="Plugins">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label="Redux">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem>Widget</MenuItem>
          <SubMenu label="Forms">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label="Table">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label="Widget">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
