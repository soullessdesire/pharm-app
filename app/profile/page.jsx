import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const page = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full">
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
          </div>
          <div>
            <h4>Username</h4>
            <p>user.name@gmail.com</p>
          </div>
        </div>
        <div className="m-2 p-2 border rounded-xl grow flex flex-col justify-between h-[350px]">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-2xl">Current Sale</h4>
            <div className="flex gap-2">
              <button
                type="button"
                className="p-2 hover:bg-neutral-50 hover:text-neutral-500 rounded-sm border"
              >
                Contact
              </button>
              <button
                type="button"
                className="p-2 hover:bg-neutral-50 hover:text-neutral-500 rounded-sm border"
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
              ></Image>
            </button>
            <div>
              <h2 className="font-bold text-xl">Client Name</h2>
              <p className="text-xs text-neutral-500">client.name@gmail.com</p>
              <p className="flex mt-2 pt-2  w-[150px] justify-between items-center">
                Profit <TrendingUp color="#1eff00" />
              </p>
              <p className="flex mt-2 pt-2  w-[150px] justify-between items-center">
                Loss <TrendingDown color="#ff0000" />
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <button
                type="button"
                className="p-2 m-2 w-12 h-12 rounded-full border flex justify-center items-center hover:bg-neutral-50"
              >
                <Facebook strokeWidth={1} />
              </button>
              <button
                type="button"
                className="p-2 m-2 w-12 h-12 rounded-full border flex justify-center items-center hover:bg-neutral-50"
              >
                <Twitter strokeWidth={1} />
              </button>
              <button
                type="button"
                className="p-2 m-2 w-12 h-12 rounded-full border flex justify-center items-center hover:bg-neutral-50"
              >
                <Instagram strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
