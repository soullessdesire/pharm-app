"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Search, Bell } from "lucide-react";
import { menuItems as menuItemsBuffer } from "./DataBuffer";
import { notifications as notificationBuffer } from "./DataBuffer";
import Link from "next/link";

const Header = () => {
  const [menuItems, setMenuItems] = useState(menuItemsBuffer);
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);
  const ref = useRef();
  const handleHover = () => {
    setHover((prev) => !prev);
  };
  const handleMarkAllAsRead = () => {
    setNotifications((prev) => {
      return prev.map((el) => {
        return { ...el, read: false };
      });
    });
  };
  const [notifications, setNotifications] = useState(notificationBuffer);
  const handleClick = (e) => {
    if (e.target === ref.current) {
      setShow((prev) => !prev);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClick);
  }, []);

  return (
    <div className="p-4 border-b w-full">
      <div className="flex items-center justify-end relative">
        <button
          type="button"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className="relative"
        >
          <Bell className="border h-9 w-9 p-2 rounded-sm" strokeWidth={1} />
          <div
            className={`flex justify-center items-center h-3 w-3 rounded-full -right-1 -top-2 absolute ${
              notifications.find((x) => x.read === true)
                ? "bg-green-500"
                : "bg-neutral-50"
            }`}
          >
            <p className="text-white text-xs">
              {notifications.reduce(
                (accumulator, value) => accumulator + value.read,
                0
              )}
            </p>
          </div>
        </button>
        {hover && (
          <div
            className="absolute top-[38px] bg-white border p-1 rounded-md w-[425px] z-50"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <div className="flex justify-between items-center p-2">
              <h5 className="font-bold text-xl">Notifications</h5>
              <div className="flex gap-2">
                <Link
                  href={"/notifications"}
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                  onClick={() => redirect("/notifications")}
                >
                  View All
                </Link>
                <button
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                  onClick={handleMarkAllAsRead}
                >
                  Mark all as read
                </button>
              </div>
            </div>
            {notifications.map((notification, key) => {
              if (!notification.read) {
                return;
              }
              return (
                <div
                  className="flex gap-2 hover:bg-neutral-50 rounded-sm cursor-pointer"
                  key={key}
                >
                  <div
                    className={`rounded-full h-3 w-3 my-2 ${
                      notification.read ? "bg-green-500" : "bg-neutral-50"
                    }`}
                  ></div>
                  <div>
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
