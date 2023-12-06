import BlackN from "@/images/Image.png";
import Back from "@/icons/back.png";
import Forward from "@/icons/forward.png";
export default function Carousel() {
  return (
    <div>
      <div
        className="max-w-[1216px] h-[600px] m-auto shrink p-3 relative"
        style={{ backgroundImage: `url(${BlackN.src})` }}
      >
        <div className="bg-[white] w-[598px] h-[252px] items-start flex flex-col p-10 gap-6 border-solid border rounded-xl absolute top-[335px]">
          <div className="flex flex-col gap-4">
            <div className="flex px-[10px] py-1 max-w-[86px] gap-1 rounded-md bg-[#4B6BFB] text-[12px] font-medium text-[#fff]">
              Technology
            </div>
            <p className="text-[#181A2A] text-[36px] font-semibold">
              Grid system for better <br />
              Design User Interface
            </p>
          </div>
          <div className="text-[#97989F] text-[16px] font-normal">
            August 20, 2022
          </div>
        </div>
      </div>
      <button className="w-[100px] m-auto flex justify-end">
        <img
          className="rounded border-solid border-2 p-[20px]"
          src={Back.src}
          alt=""
        />
        <img
          className="rounded border-solid border-2 p-[20px]"
          src={Forward.src}
          alt=""
        />
      </button>
    </div>
  );
}
