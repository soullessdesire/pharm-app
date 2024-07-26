import React from "react";
import {
  Building2,
  Gauge,
  Bell,
  Logs,
  Settings,
  GlobeLock,
  Warehouse,
} from "lucide-react";
import Link from "next/link";

const MenuItem = () => {
  const menuItems = [
    {
      group: "General",
      item: [
        {
          link: "/profile",
          text: "Business Profile",
          icon: <Building2 strokeWidth={1} />,
        },
        {
          link: "/dashboard",
          text: "Dashboard",
          icon: <Gauge strokeWidth={1} />,
        },
        {
          link: "/inventory",
          text: "Inventory",
          icon: <Warehouse strokeWidth={1} />,
        },
      ],
    },
    {
      group: "Settings",
      item: [
        {
          link: "/",
          text: "General Settings",
          icon: <Settings strokeWidth={1} />,
        },
        {
          link: "/",
          text: "Privacy",
          icon: <GlobeLock strokeWidth={1} />,
        },
        {
          link: "/",
          text: "Logs",
          icon: <Logs strokeWidth={1} />,
        },
      ],
    },
  ];
  return (
    <div className="grow">
      <div>
        <ul className="flex flex-col">
          {menuItems.map((menu, key) => {
            return (
              <li className="m-2 cursor-pointer" key={key}>
                <h4 className="text-neutral-500 ">{menu.group}</h4>
                {menu.item.map((item, key) => {
                  return (
                    <Link
                      href={item.link}
                      key={key}
                      className="flex gap-2 p-2 mb-4 mt-4 hover:bg-neutral-50 hover:text-neutral-500 rounded-md"
                    >
                      {item.icon}
                      {item.text}
                    </Link>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuItem;
