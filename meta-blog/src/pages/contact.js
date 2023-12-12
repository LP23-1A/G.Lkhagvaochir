import axios from "axios";
import { useRef, useState } from "react";
import { headers } from "../../next.config";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
=======


export default function contact() {
  const [data, setData] = useState({ published: true });
  const dataRef = useRef({});
  const handlerInput = (el, obKey) => {
    let mock = {};
    if (obKey === "tags") {
      mock[obKey] = [el.target.value];
    } else {
      mock[obKey] = [el.target.value];
    }
    mock[obKey] = el.target.value;
    setData({ ...data, ...mock });
  };

  const postMessage = async () => {

  const sendRequest = async () => {

    let response = await axios.post("https://dev.to/api/articles", data);
    headers: {
      // "api-key": "YOUR_API_KEY",
      // ContentType:
    }
  };
  console.log(data);
  return (

    <div className="flex flex-col gap-[100px]">
      <Navbar />
      <div className=" m-auto max-w-[769px] gap-5 flex flex-col pb-7">
        <div className="flex flex-col gap-5 max-w-[624px] m-auto">
          <h1 className="text-[24px] text-[#181A2A] font-bold">Contact Us</h1>
          <p className="text-[16px] text-[#696A75] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex gap-12 m-auto">
          <div className=" border rounded-xl p-4 w-[294px]">
            <h1 className="text-[20px] text-[#181A2A] font-semibold">
              Address
            </h1>
            <p className="text-[16px] text-[#696A75] font-normal">
              1328 Oak Ridge Drive, Saint <br />
              Louis, Missouri
            </p>
          </div>
          <div className="border rounded-xl p-4 w-[294px]">
            <h1 className="text-[20px] text-[#181A2A] font-semibold">
              Contact
            </h1>
            <p className="text-[16px] text-[#696A75] font-normal">
              313-332-8662 <br /> info@email.com
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-3 max-w-[643px] py-7 m-auto pl-[34px] pr-[130px] border-1 rounded-md bg-[#F6F6F7]">
          <h1 className=" font-semibold text-[18px]">Leave a Message</h1>
          <div className="flex gap-6">
            <input
              onChange={(el) => handlerInput(el, "title")}
              placeholder="Your Name"
              className="p-2 flex flex-col w-[225px]"
            ></input>
            <input
              onChange={(el) => handlerInput(el, "tags")}
              placeholder="Your Email"
              className=" p-2 flex flex-col w-[225px]"
            ></input>
          </div>
          <input
            onChange={(el) => handlerInput(el, "body_markdown")}
            placeholder="subject"
            className="p-2 w-[478px]"
          ></input>
          <input
            onChange={(el) => handlerInput(el, "series")}
            placeholder="Write a message"
            className=" p-2 flex flex-col h-[134px]"
          ></input>
          <button
            onClick={() => postMessage()}
            className="justify-center w-fit rounded-xl items-center inline-flex px-[16px] py-[10px] gap-1 bg-[#4B6BFB] text-[12px] font-medium text-[#fff]"
          >
            Send message
          </button>
        </div>
      </div>
      <div className="bg-[#F6F6F7]">
        <Footer />
      </div>

    <div>
      <div className="flex h-[1230px]">
        <div className="flex flex-col gap-3 w-[400px] h-[300px] m-auto border-1 rounded-md bg-slate-50">
          <input
            onChange={(el) => handlerInput(el, "title")}
            placeholder="title"
            className="p-2 flex flex-col"
          ></input>
          <input
            onChange={(el) => handlerInput(el, "tags")}
            placeholder="tags"
            className=" p-2 flex flex-col"
          ></input>
          <input
            onChange={(el) => handlerInput(el, "body_markdown")}
            placeholder="description"
            className="p-2 h-[600px]"
          ></input>
          <input
            onChange={(el) => handlerInput(el, "series")}
            placeholder="series"
            className=" p-2 flex flex-col"
          ></input>
          <button
            onClick={sendRequest()}
            className="bg-[black] text-[white] p-2"
          >
            sumbit
          </button>
        </div>
      </div>

    </div>
  );
}
