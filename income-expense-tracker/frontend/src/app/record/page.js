import ButtonL from "@/components/ButtonL";
import Navbar from "@/components/Navbar";
import Leading from "@/images/Leading";
import right from "@/images/rightArrow.png";
import left from "@/images/leftArrow.png";

export default function Record() {
  const typesData = [
    {
      text: "All",
    },
    {
      text: "Income",
    },
    {
      text: "Expess",
    },
  ];
  return (
    <div className="m-auto w-[1440px]">
      <div>
        <Navbar />
      </div>
      <div className="bg-[#F3F4F6] w-[1440px] h-screen py-6 flex">
        <div className="max-w-[282px] py-6 px-4 flex flex-col gap-6 rounded-xl bg-[#fff]">
          <div className=" ">
            <h1 className="text-[24px] font-semibold">Records</h1>
            <div>
              <button className="w-full py-1 rounded-3xl justify-center item-center flex text-center text-[#fff] bg-[#0166FF]">
                <Leading />
                Add
              </button>
            </div>
          </div>
          <input
            type="text"
            className="w-full border rounded-lg bg-[#F3F4F6] py-1 px-2"
            placeholder="Search"
          ></input>
          <div>
            {typesData.map((el) => {
              return (
                <div className="flex gap-2">
                  <input type="radio" />
                  <p>{el.text}</p>
                </div>
              );
            })}
          </div>
          <div>
            <div className="flex justify-between    ">
              <h4>Category</h4>
              <button className="opacity-20">Clear</button>
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <button>
            <img className="w-[32px]" src={left.src} />
          </button>
          <p>Last 30 Days</p>
          <button>
            <img className="w-[32px]" src={right.src} />
          </button>
        </div>
      </div>
    </div>
  );
}
