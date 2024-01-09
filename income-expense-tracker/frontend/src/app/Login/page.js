"use client";
import ButtonL from "@/components/ButtonL";
import Geld from "@/images/Geld";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div className="flex">
      <div className="flex justify-center items-center flex-col gap-10 w-1/2">
        <div className="flex gap-[10px]">
          <div>
            <Geld />
          </div>
          <div>Geld</div>
        </div>
        <div className="flex flex-col items-center">
          <div>Welcome Back</div>
          <div>Welcome back, Please enter your details</div>
        </div>
        <div className="flex flex-col gap-4">
          <input
            placeholder="Email"
            className="bg-[#F3F4F6] h-[48px] p-4 rounded-lg border"
            type="text"
          />
          <input
            placeholder="Password"
            className="bg-[#F3F4F6] h-[48px] p-4 rounded-lg border"
            type="password"
          />
          <ButtonL text="Login" />
        </div>
        <div className="flex gap-3">
          <p>Don't have account?</p>
          <button
            className="text-[#0166FF] rounded-3xl"
            onClick={() => router.push("/Signup")}
          >
            Sign up
          </button>
        </div>
      </div>
      <div className="bg-[#0166FF] w-1/2 h-[100vh]"></div>
    </div>
  );
}
