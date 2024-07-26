"use client";

import React, { useState, useRef } from "react";
import { Search, Bell } from "lucide-react";

const Header = () => {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover((prev) => !prev);
  };
  const [notifications, setNotifications] = useState([
    {
      message: "This is a notification",
      date: "02-02-2024",
      read: false,
    },
    {
      message: "This is another notification",
      date: "01-01-2024",
      read: true,
    },
  ]);
  return (
    <div className="grid grid-cols-2 gap-4 p-4 border-b w-full">
      <div className="rounded-2">
        <Search
          size={20}
          strokeWidth={0.5}
          className="absolute mt-[11px] mb-2 mr-2 ml-2 text-neutral-500"
        />
        <input
          type="text"
          name=""
          id=""
          className="pl-[45px] border h-10 w-[450px] rounded-md focus:outline-none"
          placeholder="Type a comment or search....."
        />
      </div>
      <div className="flex items-center justify-end relative">
        <button
          type="button"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className="relative"
        >
          <Bell className="border h-9 w-9 p-2 rounded-sm" strokeWidth={1} />
          <div
            className={`h-3 w-3 rounded-full -right-1 -top-2 absolute ${
              notifications.find((x) => x.read === true)
                ? "bg-green-500"
                : "bg-neutral-50"
            }`}
          ></div>
        </button>
        {hover && (
          <div
            className="absolute top-[38px] bg-white border p-1 rounded-md"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            {notifications.map((notification, key) => {
              return (
                <div className="flex gap-2 hover:bg-neutral-50 rounded-sm cursor-pointer">
                  <div
                    className={`rounded-full h-3 w-3 my-2 ${
                      notification.read ? "bg-green-500" : "bg-neutral-50"
                    }`}
                  ></div>
                  <div key={key}>
                    <p>{notification.message}</p>
                    <p className="text-xs text-neutral-500">
                      {notification.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
