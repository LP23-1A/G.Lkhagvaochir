import ArrowCircleup from "@/images/ArrowCircleup";
import Ellipse from "@/images/Ellipse";

export default function Card() {
  return (
    <div className="bg-[#fff] w-[384px] h-[216px] rounded-xl">
      <div className="flex py-4 pl-6 items-center gap-2 border-b">
        <Ellipse />
        <p className="text-[16px] font-semibold">Your Incoming</p>
      </div>
      <div className="py-4 pl-6 flex flex-col gap-4">
        <div>
          <p className="text-[36px] font-semibold">1,200,000</p>
          <p className="text-[18px] text-[#64748B] font-normal">
            Your Income Amount
          </p>
        </div>
        <div className="flex items-center">
          <ArrowCircleup />
          <p className="text-[18px] font-normal">32% from last month</p>
        </div>
      </div>
    </div>
  );
}
