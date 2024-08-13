"use client";
import React, { useState } from "react";
import { CreditCard } from "lucide-react";
import { Component as Bar } from "@components/Charts/Bar";
import Image from "next/image";

const Page = () => {
  const sales = 265;
  const [sampleValue, setSampleValue] = useState(["2875483Ksh"]);
  const sampleData = [
    {
      header: "Total Revenue",
      icon: <CreditCard strokeWidth={1} />,
      meta: "+20.1% from last month",
      value: `${sampleValue[0]}`,
    },
    {
      header: "Total Revenue",
      icon: <CreditCard strokeWidth={1} />,
      meta: "+20.1% from last month",
      value: `${sampleValue[0]}`,
    },
    {
      header: "Total Revenue",
      icon: <CreditCard strokeWidth={1} />,
      meta: "+20.1% from last month",
      value: `${sampleValue[0]}`,
    },
    {
      header: "Total Revenue",
      icon: <CreditCard strokeWidth={1} />,
      meta: "+20.1% from last month",
      value: `${sampleValue[0]}`,
    },
  ];
  const salesData = [
    {
      image: "/assets/images/01.png",
      name: "John Doe",
      email: function () {
        return this.name.split(" ").join(".").toLowerCase() + "@gmail.com";
      },
      value: "5,500Ksh",
    },
    {
      image: "/assets/images/02.png",
      name: "Ian Munyua",
      email: function () {
        return this.name.split(" ").join(".").toLowerCase() + "@gmail.com";
      },
      value: "200,000Ksh",
    },
    {
      image: "/assets/images/03.png",
      name: "Jack Daniels",
      email: function () {
        return this.name.split(" ").join(".").toLowerCase() + "@gmail.com";
      },
      value: "66,000Ksh",
    },
    {
      image: "/assets/images/04.png",
      name: "Johnny Walker",
      email: function () {
        return this.name.split(" ").join(".").toLowerCase() + "@gmail.com";
      },
      value: "30,000Ksh",
    },
  ];
  return (
    <div className="flex flex-col gap-2 w-full h-[740px] overflow-y-scroll overflow-x-hidden">
      <h2 className="p-2 font-bold text-3xl">Dashboard</h2>
      <div className="flex gap-2 grow">
        {sampleData.map((data, key) => {
          return (
            <div
              key={key}
              className="p-2 border rounded-md mt-2 ml-2 w-[215px] h-[140px] grow"
            >
              <div className="p-2 flex justify-between">
                <h3 className="font-meduim">{data.header}</h3>
                {data.icon}
              </div>
              <p className="font-[800] text-3xl pt-1 pb-2 pr-2 pl-2">
                {data.value}
              </p>
              <p className="text-neutral-500 pl-2 text-xs">{data.meta}</p>
            </div>
          );
        })}
      </div>
      <div className="flex">
        <div className="p-2 w-[550px] grow">
          <Bar />
        </div>
        <div className="border rounded-sm p-3 m-2 w-[350px] flex flex-col gap-2 grow">
          <div>
            <h4 className="font-[600] text-xl">Recent Sales</h4>
            <p className="text-neutral-500 text-xs">
              You made {sales} this month
            </p>
          </div>
          <div>
            {salesData.map((sale, key) => {
              return (
                <div
                  key={key}
                  className="flex p-2 justify-between h-[80px] gap-2"
                >
                  <div
                    className={`rounded-full flex justify-center w-[48px] h-[48px]`}
                  >
                    <Image
                      src={sale.image}
                      width={48}
                      height={24}
                      alt="customer image"
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div className="grow">
                    <h4>{sale.name}</h4>
                    <p>{sale.email()}</p>
                  </div>
                  <p>{sale.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-[300px]"></div>
    </div>
  );
};

export default Page;
