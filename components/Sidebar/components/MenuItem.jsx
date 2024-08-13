import React from "react";
import { menuItems } from "@components/DataBuffer";
import Link from "next/link";

const MenuItem = () => {
  return (
    <div className="grow">
      <div className="flex flex-col">
        {menuItems.map((item, key) => {
          return (
            <Link
              href={item.link}
              key={key}
              className="flex gap-2 p-2 my-3 hover:bg-neutral-50 hover:text-neutral-500 rounded-md"
            >
              {item.icon}
              {item.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItem;
