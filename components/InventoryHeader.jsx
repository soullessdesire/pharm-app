"use client";
import React, { useRef } from "react";
import { Search } from "lucide-react";

const InventoryHeader = () => {
  const ref = useRef();
  const handleKeyUp = () => {};
  return (
    <div className="flex justify-between border-b p-2 m-2">
      <h1 className="font-bold text-4xl">Inventory</h1>
      <div className="rounded-2 relative">
        <Search
          size={20}
          strokeWidth={0.5}
          className="absolute mt-[11px] mb-2 mr-2 ml-2 text-neutral-500"
        />
        <input
          type="text"
          name=""
          ref={ref}
          id=""
          onKeyUp={handleKeyUp}
          className="pl-[45px] border h-10 w-[450px] rounded-md focus:outline-none"
          placeholder="Type a comment or search....."
        />
      </div>
    </div>
  );
};

export default InventoryHeader;
