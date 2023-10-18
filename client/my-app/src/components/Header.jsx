import React from "react";
import {
  AssignmentTurnedInOutlined,
  Close,
  NotificationsOutlined,
  FeaturedPlayListOutlined,
  PeopleAltOutlined,
  Search,
  ExpandMore,
  Home,
} from "@material-ui/icons";
import { Avatar, Button } from "@material-ui/core";

const Header = () => {
  return (
    <div className="flex items-center bg-white sticky z-50 shadow-sm top-0 justify-center p-[3px]">
      <div className="flex">
        <span className="text-orange-500 text-lg font-semibold mr-5">
          Kysyms
        </span>
      </div>
      <div>Icons</div>
      <div>Avatar & Button</div>
    </div>
  );
};

export default Header;
