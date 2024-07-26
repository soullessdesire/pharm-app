import React from "react";

const UserItem = () => {
  return (
    <div className="flex items-center justify-center gap-4 border p-4 rounded-[8px]">
      <div className="avatar rounded-full h-12 w-12 bg-emerald-500 text-white font-[700] flex items-center justify-center">
        IA
      </div>
      <div>
        <p className="text-[16px] font-bold">{"Ian Munyua"}</p>
        <p className="text-[12px] text-neutral-500">
          {"soullessdesire34@gmail.com"}
        </p>
      </div>
    </div>
  );
};

export default UserItem;
