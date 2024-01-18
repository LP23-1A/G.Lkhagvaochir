import ButtonL from "@/components/ButtonL";
import Check from "@/images/Check";
import Geld from "@/images/Geld";

export default function step1() {
  return (
    <div className="flex flex-col gap-12 w-full justify-center items-center">
      <div class="flex">
        <Geld />
        Geld
      </div>
      <div>
        <ul class="steps">
          <li class="step step-primary">Currency</li>
          <li class="step step-primary">Balance</li>
          <li class="step step-primary">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex absolute bg-[#0166FF] rounded-[100px] w-[40px] h-[40px]"></div>
          <Check />
          <p className="text-[20px] text-[#0F172A] font-semibold">Good Job!</p>
        </div>
        <div>
          <select class="select select-bordered w-full max-w-xs m-auto">
            <option disabled selected>
              MNT - Mongolian Tugrik
            </option>
            <option>MNT</option>
            <option>USD</option>
          </select>
        </div>
        <div>
          <p className="text-[12px] text-[#475569] font-normal">
            Your very first account has been created. Now <br /> continue to
            dashboard and start tracking
          </p>
        </div>
        <ButtonL text="Go to Dashboard" />
      </div>
    </div>
  );
}
