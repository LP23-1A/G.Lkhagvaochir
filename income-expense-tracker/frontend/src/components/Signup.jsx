import Geld from "@/images/Geld";
import ButtonL from "./ButtonL";
import LinkButton from "./LinkButton";

export default function Signup() {
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
          <div>Create Geld account</div>
          <div>Sign up below to create your Wallet account</div>
        </div>
        <div className="flex flex-col gap-4">
          <input
            placeholder="Name"
            className="bg-[#F3F4F6] h-[48px] p-4 rounded-lg border"
            type="text"
          />
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
          <input
            placeholder="Re-password"
            className="bg-[#F3F4F6] h-[48px] p-4 rounded-lg border"
            type="password"
          />
          <ButtonL text="Sign up" />
        </div>
        <div className="flex gap-3">
          <p>Already have account?</p>
          <LinkButton text="Log in" />
        </div>
      </div>
      <div className="bg-[#0166FF] w-1/2 h-[100vh]"></div>
    </div>
  );
}
