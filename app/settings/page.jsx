"use client";

import { ChevronDown, Minus } from "lucide-react";
import { useRef, useState } from "react";
import { countryCodes as countryCodesBuffer } from "@components/DataBuffer";
import { Modal } from "@components/Modal";
import Image from "next/image";
import validateCardNumber from "@utils/bankNo";

const options = ["JSON", "XML"];

const Form = ({ setShow }) => {
  const [countryCodes, setCountryCodes] = useState(countryCodesBuffer);
  const [message, setMessage] = useState(false);
  const phoneRef = useRef();
  const bankRef = useRef();
  const [phoneCodesShow, setPhoneCodesShow] = useState(false);
  const [formData, setFormData] = useState({
    "Bank Account Number": "",
    "Phone Number": "",
    "Email Address": "",
    "Phone Code": "",
  });
  const setCodesShow = () => {
    setPhoneCodesShow((prev) => {
      setCountryCodes(countryCodesBuffer);
      phoneRef.current.setAttribute("keyup", "");
      return !prev;
    });
  };
  const handleClick = (e) => {
    e.stopPropagation();
    const { name } = phoneRef.current;
    let value = e.target.textContent.replace(/[A-Za-z()]/g, "");
    if (!value) {
      value = e.target.parentNode.getAttribute("customvalue");
    }
    console.log(name, value);
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
    setCodesShow();
  };
  const handlePhoneCodeChange = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;
    setFormData(() => ({
      ...formData,
      [name]: value.replace(/[^0-9+]+/g, ""),
    }));
    setCountryCodes(countryCodesBuffer);
  };
  function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, function (match) {
      return match.toUpperCase();
    });
  }
  const handleKeyUp = (e) => {
    e.stopPropagation();
    let value;
    if (e.key === "Backspace") {
      e.target.setAttribute("keyup", "");
      setCountryCodes(countryCodesBuffer);
      console.log(countryCodes);
    }
    if (/[A-Za-z]/.test(e.key)) {
      e.target.setAttribute("keyup", e.target.getAttribute("keyup") + e.key);
      value = e.target.getAttribute("keyup");
      setCountryCodes(
        countryCodesBuffer.filter((el) =>
          el.name.startsWith(capitalizeFirstLetter(value))
        )
      );
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleBankChange = (e) => {
    const { name, value } = e.target;
    const maxLength = 20;
    if (!/[^0-9]/.test(value.replace(/\s+/g, ""))) {
      console.log(/[^0-9]/.test(value.replace(/\s+/g, "")));
      console.log("enter");
      if (value.length === maxLength) {
        if (!validateCardNumber(formData["Bank Account Number"])) {
          bankRef.current.style["outline"] = "red 1px solid";
          setMessage(true);
          return;
        }
      } else if (value.length > maxLength) {
        return;
      }
      if (formData["Bank Account Number"].length > 2) {
        setFormData(() => ({
          ...formData,
          [name]: value
            .replace(/\s+/g, "")
            .match(/.{1,4}/g)
            .join(" "),
        }));
      } else {
        setFormData(() => ({
          ...formData,
          [name]: value,
        }));
      }
    }
  };
  const handleSubmit = () => {
    e.preventDefauit();
    setShow(false);
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md bg-white">
      <div className="rounded-lg">
        <div className="">
          <h4 className="font-bold text-3xl py-2 my-2">Phone Number</h4>
          <div className="flex gap-2 ">
            <div className="border rounded-sm w-[130px] flex justify-between h-[40px] relative focus:border-black">
              <input
                type="text"
                ref={phoneRef}
                name="Phone Code"
                value={formData["Phone Code"]}
                onKeyUp={handleKeyUp}
                onChange={handlePhoneCodeChange}
                className="w-[100px] p-2 focus:outline-none"
                onClick={setCodesShow}
                keyup=""
              />
              <button
                type="button"
                className="flex justify-center items-center h-full m-0.5"
              >
                <ChevronDown strokeWidth={1} />
              </button>
              {phoneCodesShow && (
                <div
                  onClick={handleClick}
                  className="max-h-[150px] overflow-y-scroll grow absolute w-[260px] top-full left-0 bg-white border mt-0.5"
                >
                  {countryCodes.map((entry, key) => {
                    return (
                      <div
                        key={key}
                        className="cursor-pointer hover:text-neutral-500 hover:bg-neutral-50 flex items-center gap-2"
                        customvalue={`${entry.phoneCode}`}
                      >
                        <div
                          className="bg-neutral-200 flex justify-center items-center w-[40px] px-1 h-[56px]"
                          customvalue={`${entry.phoneCode}`}
                        >
                          <Image
                            src={`/assets/Svgs/country-flags/${
                              entry.name + ".svg"
                            }`}
                            width={40}
                            height={40}
                            alt={`${entry.name + "'s flag"}`}
                          />
                        </div>
                        <div
                          className="py-2 px-1"
                          customvalue={`${entry.phoneCode}`}
                        >
                          <p customvalue={`${entry.phoneCode}`}>
                            {entry.name === "Democratic Republic of the Congo"
                              ? "DRC"
                              : entry.name}
                          </p>
                          <p
                            className="text-neutral-500 text-xs"
                            customvalue={`${entry.phoneCode}`}
                          >
                            ({entry.phoneCode})
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <input
              type="tel"
              minLength={9}
              placeholder="058234934"
              className="border rounded-sm p-2"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-3xl my-2 py-2">Email</h4>
          <input
            type="email"
            value={formData["Email Address"]}
            onChange={handleChange}
            placeholder="email@gmail.com"
            className="border rounded-sm p-2"
          />
        </div>
        <div>
          <h5 className="font-bold text-3xl my-2 py-2">Bank Account Number</h5>
          <div className="focus:border-black focus:border-[2px]">
            <input
              type="text"
              name="Bank Account Number"
              maxLength={20}
              value={formData["Bank Account Number"]}
              ref={bankRef}
              onChange={handleBankChange}
              className="border rounded-sm p-2"
            />
          </div>
          {message && (
            <p className="text-red-500 text-sm">
              This is not a valid card number
            </p>
          )}
        </div>
        <div>
          <h5 className="font-bold text-3xl my-2 py-2">Alert Threshold</h5>
          <input type="number" className="border rounded-sm p-2" />
        </div>
      </div>
      <div>
        <button
          type="button"
          className="border rounded-sm hover:text-neutral-500 hover:bg-neutral-50 p-2 my-2"
          onClick={() => setShow(false)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
const AlertForm = ({ setShow }) => {
  const handleClick = () => {};
  const handleSubmit = () => {};
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-2 border rounded-md shadow flex flex-col gap-2"
    >
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-3xl">Custom Alerts</h4>
        <p className="text-neutral-500 text-s">
          Choose a formart to create a custom alert with
        </p>
        <div onClick={handleClick} className="flex gap-2">
          {options.map((el, key) => (
            <button
              type="button"
              key={key}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              {el}
            </button>
          ))}
        </div>
        <div className="flex rounded-md">
          <div className="flex flex-col w-[20px] bg-neutral-200">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((el, key) => {
              return (
                <p key={key} className="text-center">
                  {el}
                </p>
              );
            })}
          </div>
          <textarea
            name=""
            id=""
            rows={8}
            className="bg-neutral-50 h-[200px] focus:outline-none"
          ></textarea>
        </div>
        {/* <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button> */}
      </div>
      <button
        type="button"
        onClick={() => setShow(false)}
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};
const Page = () => {
  const [formShow, setFormShow] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  return (
    <div className="bg-white p-6 overflow-y-scroll overflow-x-hidden h-[750px] grow w-full">
      <h4 className="text-2xl font-bold mb-4">Settings</h4>
      <p className="mb-6 text-gray-600">
        Manage your account settings and preferences.
      </p>

      <h5 className="text-xl font-semibold mb-2">Bank Account(s)</h5>
      <p className="mb-2 text-gray-600">
        Show the bank account(s) and the last four digits of the account
        number(s).
      </p>
      <div className="w-full flex border justify-between">
        <input
          type="text"
          value="**** **** **** 1234"
          readOnly
          className="p-2 rounded focus:outline-none"
        />
        <button
          type="button"
          className="bg-neutral-100 text-neutral-600 py-2 px-4 "
        >
          <Minus strokeWidth={1.5} />
        </button>
      </div>
      <button
        type="button"
        className="py-2 px-4 rounded my-2 bg-white text-black border-black border hover:bg-black transition hover:text-white"
        onClick={() => setFormShow(true)}
      >
        Add Bank Account number
      </button>

      <h5 className="text-xl font-semibold mb-2">Email</h5>
      <p className="mb-2 text-gray-600">Your registered email address.</p>
      <input
        type="text"
        value="user@example.com"
        readOnly
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <div className="mb-6">
        <button
          type="button"
          className="py-2 px-4 rounded my-2 bg-white text-black border-black border hover:bg-black transition hover:text-white"
          onClick={() => setFormShow((prev) => !prev)}
        >
          Change email address
        </button>
      </div>

      <h5 className="text-xl font-semibold mb-2">Phone Number</h5>
      <p className="mb-2 text-gray-600">Your registered phone number.</p>
      <input
        type="text"
        value="+1234567890"
        readOnly
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <div className="mb-6">
        <button
          type="button"
          className="py-2 px-4 rounded my-2 bg-white text-black border-black border hover:bg-black transition hover:text-white"
          onClick={() => setFormShow((prev) => !prev)}
        >
          Change phone number
        </button>
      </div>

      <h5 className="text-xl font-semibold mb-2">
        Alert Notification Threshold
      </h5>
      <p className="mb-2 text-gray-600">
        Set the threshold for alert notifications.
      </p>
      <input
        type="text"
        value="50"
        readOnly
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <div className="mb-6">
        <button
          type="button"
          className="py-2 px-4 rounded my-2 bg-white text-black border-black border hover:bg-black transition hover:text-white"
          onClick={() => setFormShow((prev) => !prev)}
        >
          Change Alert Threshold
        </button>
      </div>

      <h6 className="text-lg font-semibold mb-2">Custom Alert Notification</h6>
      <p className="mb-2 text-gray-600">
        Create and manage custom alert notifications.
      </p>
      <p className="mb-2 text-gray-600">Current custom alert notifications:</p>
      <input
        type="text"
        value="ExampleKey"
        readOnly
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="text"
        value="ExampleValue"
        readOnly
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <div className="mb-6 flex gap-3">
        <button
          type="button"
          className="py-2 px-4 rounded my-2 bg-white text-black border-black border hover:bg-black transition hover:text-white"
          onClick={() => setAlertShow((prev) => !prev)}
        >
          Add Custom Alert
        </button>
        <button
          type="button"
          className="py-2 px-4 rounded my-2 bg-white text-black border-black border hover:bg-black transition hover:text-white"
        >
          Change Custom Alert
        </button>
      </div>
      {formShow && (
        <Modal>
          <Form setShow={setFormShow} />
        </Modal>
      )}
      {alertShow && (
        <Modal>
          <AlertForm setShow={setAlertShow} />
        </Modal>
      )}
    </div>
  );
};

export default Page;
