import Homei from "@/images/Homei";

export default function House() {
  return (
    <div className="flex items-center  py-5 pl-6 justify-between border-b">
      <div className="flex gap-4">
        <div>
          <div className="flex  bg-[#0166FF] rounded-[100px] w-[40px] h-[40px] items-center justify-center">
            <Homei />
          </div>
        </div>
        <div>
          <p className="font-normal text-[16px]">Lending & Renting</p>
          <p className="text-[#6B7280] text-[12px] font-normal">3 hours ago</p>
        </div>
      </div>
      <div className="px-6">
        <p className="text-[#84CC16]">-1000</p>
      </div>
    </div>
  );
}
