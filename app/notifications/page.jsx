"use client";
import { useState } from "react";
import { notifications as notificationBuffer } from "@components/DataBuffer";

const Page = () => {
  const [notifications, setNotifications] = useState(notificationBuffer);
  const handleMarkAllAsRead = () => {
    setNotifications((prev) => {
      return prev.map((el) => {
        return { ...el, read: false };
      });
    });
  };
  return (
    <div className="p-6">
      <div className="flex justify-between items-center px-1 border-b">
        <h5 className="font-bold text-xl my-3">Notifications</h5>

        {notifications.some((el) => el.read === true) && (
          <p className="p-2 bg-green-600 text-white rounded-full">
            {`You have ${notifications.reduce(
              (last, current) => last + current.read,
              0
            )} new message(s)`}
          </p>
        )}
        <button
          type="button"
          className="text-blue-500 hover:text-blue-700 hover:underline"
          onClick={handleMarkAllAsRead}
        >
          Mark all as read
        </button>
      </div>
      <div>
        {notifications.map((notification, key) => {
          return (
            <div
              className={`flex gap-2 cursor-pointer py-6 px-1 ${
                notification.read &&
                "border-green-600 border-l border-l-[3px] bg-green-100"
              }`}
              key={key}
            >
              <div>
                <p className="text-xl">{notification.message}</p>
                <p className="text-xs text-neutral-500">{notification.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
