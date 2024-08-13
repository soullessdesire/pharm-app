import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { Component as Line } from "@components/Charts/Line";
const page = () => {
  const buttonIcons = [
    <Facebook strokeWidth={1} key={"Facebook"} />,
    <Instagram strokeWidth={1} key={"Instagram"} />,
    <Twitter strokeWidth={1} key={"Twitter"} />,
  ];
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full grow min-h-[715px]">
        <div className="flex flex-col gap-10 m-2">
          <div className="w-[900px] h-[350px] relative bg-color rounded-t-md flex items-center justify-center">
            <div className="w-[150px] h-[150px] rounded-full bg-color absolute top-[250px] left-[75px]">
              <Image
                src={"/assets/Svgs/smallLogo.svg"}
                width={150}
                height={150}
                alt="small logo"
              ></Image>
            </div>
            <Image
              src={"/assets/Svgs/largelogo.svg"}
              width={300}
              height={300}
              alt="logo"
            ></Image>
            <button
              type="button"
              className="absolute top-2 right-2 border hover:bg-neutral-50 hover:text-neutral-500 p-2"
            >
              Change Profile
            </button>
          </div>
          <div className="bg-white p-2">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-700">
                Company Description
              </h4>
              <p className="text-gray-600">
                We are a leading company in providing exemplary services and
                products.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-700">
                Company Motto
              </h4>
              <p className="text-gray-600">Quality and Excellence</p>
            </div>
          </div>
        </div>
        <div className="m-2 grow flex flex-col ">
          <div className="border rounded-xl p-3 mb-2 flex justify-between flex-col gap-1">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-2xl">Recent Sale</h4>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="p-1 text-s hover:bg-neutral-50 hover:text-neutral-500 rounded-sm border"
                >
                  Contact
                </button>
                <button
                  type="button"
                  className="p-1 text-s hover:bg-neutral-50 hover:text-neutral-500 rounded-sm border"
                >
                  Message
                </button>
              </div>
            </div>
            <div className="flex gap-8">
              <button type="button" className="rounded-full overflow-hidden">
                <Image
                  src={"/assets/images/01.png"}
                  width={120}
                  height={120}
                  alt="profile"
                  className="rounded-full"
                ></Image>
              </button>
              <div>
                <h2 className="font-bold text-xl">Client Name</h2>
                <p className="text-xs text-neutral-500">
                  client.name@gmail.com
                </p>
                <p className="flex mt-2 pt-2  w-[150px] justify-between items-center">
                  Profit <TrendingUp color="#1eff00" />
                </p>
                <p className="flex mt-2 pt-2  w-[150px] justify-between items-center">
                  Loss <TrendingDown color="#ff0000" />
                </p>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <Line />
          </div>
          <div className="border rounded-md grow"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
