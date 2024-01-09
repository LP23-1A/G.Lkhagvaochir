import Circle from "@/components/circle";
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
          <li class="step">Balance</li>
          <li class="step">Finish</li>
        </ul>
      </div>
      <div>
        <Circle />
        <p></p>
      </div>
    </div>
  );
}
