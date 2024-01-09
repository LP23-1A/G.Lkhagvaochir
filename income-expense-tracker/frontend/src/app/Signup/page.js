"use client";
import Geld from "@/images/Geld";
import ButtonL from "@/components/ButtonL";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
const defaultUrl = "http://localhost:8000/users";

export default function Signup() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const test = {
    name: name,
    email: email,
    password: password,
  };

  const handler = async () => {
    let res = await axios.post(defaultUrl, {
      name: name,
      email: email,
      password: password,
    });
    console.log(res, "res");
  };
  const router = useRouter();
  return (
    <div className="flex">
      <div className="flex justify-center items-center flex-col gap-10 w-1/2">
        <div className="flex gap-[10px]">
          <div>
            <Geld />
          </div>
          <div className=" font-bold text-[20px]">Geld</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-bold text-[18px]">Create Geld account</div>
          <div>Sign up below to create your Wallet account</div>
        </div>
        <div className="flex flex-col gap-4">
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            style={{ color: "black" }}
            placeholder="Name"
            className="bg-[#F3F4F6] h-[48px] p-4 rounded-lg border"
            type="name"
          />
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            style={{ color: "black" }}
            placeholder="Email"
            className="bg-[#F3F4F6] h-[48px] p-4 rounded-lg border"
            type="email"
          />
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            style={{ color: "black" }}
            placeholder="Password"
            className="bg-[#F3F4F6] h-[48px] p-4 rounded-lg border"
            type="password"
          />
          <input
            placeholder="Re-password"
            className="bg-[#F3F4F6] h-[48px] p-4 rounded-lg border"
            type="password"
          />
          <button
            onClick={handler}
            className="flex justify-center items-center w-[384px] h-[48px] text-[#fff] rounded-3xl bg-[#0166FF]"
          >
            Sign up
          </button>
        </div>
        <div className="flex gap-3">
          <p>Already have account?</p>
          <button
            className="text-[#0166FF] rounded-3xl"
            onClick={() => router.push("/Login")}
          >
            Log in
          </button>
        </div>
      </div>
      <div className="bg-[#0166FF] w-1/2 h-[100vh]"></div>
    </div>
  );
}
