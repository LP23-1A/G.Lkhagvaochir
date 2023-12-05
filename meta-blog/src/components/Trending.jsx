import Rectangle from "@/images/rectangle38.png";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    img: Rectangle,
    title: "Technology",
    desciption:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    id: uuidv4(),
    img: Rectangle,
    title: "Technology",
    desciption:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    id: uuidv4(),
    img: Rectangle,
    title: "Technology",
    desciption:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    id: uuidv4(),
    img: Rectangle,
    title: "Technology",
    desciption:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];
export default function Trending() {
  return (
    <div className="max-w-[1230px] m-auto flex flex-col gap-8">
      <h1 className="text-[24px] text-[#181A2A] font-bold">Trending</h1>
      <div className="grid-cols-4 grid m-auto gap-5">
        {data.map((e) => {
          return (
            <div
              key={e.id}
              className="flex shrink-0 relative w-[289px] h-[320px]"
              style={{
                backgroundSize: `cover`,
                backgroundImage: `url(${e.img.src})`,
              }}
            >
              <div className="absolute left-2 bottom-7 flex gap-4 flex-col px-6">
                <div className="flex px-[10px] py-1 max-w-[86px] gap-1 rounded-md bg-[#4B6BFB] text-[12px] font-medium text-[#fff]">
                  {e.title}
                </div>
                <div className="text-[white] text-[18px] font-semibold">
                  {e.desciption}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
