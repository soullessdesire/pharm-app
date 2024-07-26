import React from "react";
import UserItem from "./components/UserItem";
import MenuItem from "./components/MenuItem";

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col gap-4 w-[280px] border-r min-h-screen p-4">
      <UserItem />
      <MenuItem />
      <div>Setting/Notifications</div>
    </div>
  );
};

export default Sidebar;
