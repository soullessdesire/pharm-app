import { TableDemo } from "@components/Table";

const page = () => {
  return (
    <div className="overflow-scroll  flex flex-col h-[802px]">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold m-2">Inventory</h2>
          <button
            type="buttons"
            className="p-2 rounded-sm border hover:bg-neutral-50 hover:text-neutral-500"
          >
            Configuire Notification Alerts
          </button>
        </div>
        <TableDemo className={"m-2 w-[1250px]"} />
      </div>
      <div>
        <h2 className="text-3xl font-bold m-2">Damages</h2>
        <TableDemo className={"m-2 w-[1250px]"} />
        <div className="h-[100px] w-full"></div>
      </div>
    </div>
  );
};

export default page;
