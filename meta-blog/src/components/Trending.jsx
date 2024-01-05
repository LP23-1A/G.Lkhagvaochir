import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useState, useEffect } from "react";
let api = "https://dev.to/api/articles";

// const data = [
//   {
//     id: uuidv4(),
//     img: Rectangle,
//     title: "Technology",
//     desciption:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
//   {
//     id: uuidv4(),
//     img: Rectangle,
//     title: "Technology",
//     desciption:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
//   {
//     id: uuidv4(),
//     img: Rectangle,
//     title: "Technology",
//     desciption:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
//   {
//     id: uuidv4(),
//     img: Rectangle,
//     title: "Technology",
//     desciption:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
// ];
export default function Trending() {
  const [data, setData] = useState([]);
  const getData = async (api) => {
    let res = await axios.get(api);
    setData(() => [...res.data]);
  };
  useEffect(() => {
    getData(api);
  }, []);

  return (
    <div className="max-w-[1230px] m-auto flex flex-col gap-8 over h-[400px] overflow-hidden">
      <h1 className="text-[24px] text-[#181A2A] font-bold">Trending</h1>
      <div className="grid-cols-4  grid-rows-1 grid m-auto gap-5">
        {data.map((e) => {
          let key = uuidv4();
          return (
            <div key={key} className="flex shrink-0 relative ">
              <img
                className="w-[289px] h-[320px] rounded-xl object-cover"
                src={e.social_image}
                alt=""
              />
              <div className="absolute left-2 bottom-7 flex gap-4 flex-col px-6">
                <div className="flex px-[10px] py-1 w-fit gap-1 rounded-md bg-[#4B6BFB] text-[12px] font-medium text-[#fff]">
                  {e.tags}
                </div>
                <div className="text-[white] text-[18px] font-semibold overflow-hidden h-[85px]">
                  {e.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
