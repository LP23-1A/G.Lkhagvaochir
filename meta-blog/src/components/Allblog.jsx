import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useState, useEffect } from "react";

let api = "https://dev.to/api/articles?username=gereltuyamz";

// const data = [
//   {
//     id: uuidv4(),
//     img: Blog1,
//     title: "Technology",
//     description:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     id: uuidv4(),
//     img: Blog1,
//     title: "Design",
//     description:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     id: uuidv4(),
//     img: Blog1,
//     title: "Technology",
//     description:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     id: uuidv4(),
//     img: Blog1,
//     title: "Technology",
//     description:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     id: uuidv4(),
//     img: Blog1,
//     title: "Software",
//     description:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     id: uuidv4(),
//     img: Blog1,
//     title: "Technology",
//     description:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     id: uuidv4(),
//     img: Blog1,
//     title: "Technology",
//     description:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     id: uuidv4(),
//     img: Blog1,
//     title: "Technology",
//     description:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     id: uuidv4(),
//     img: Blog1,
//     title: "Technology",
//     description:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
// ];
export default function AllBlog() {
  const [data, setData] = useState([]);
  const getData = async (api) => {
    let res = await axios.get(api);
    setData(() => [...res.data]);
  };
  useEffect(() => {
    getData(api);
  }, []);

  return (
    <div className="flex flex-col gap-8 max-w-[1230px] m-auto">
      <div className="flex flex-col gap-8">
        <h1 className="text-[24px] text-[#181A2A] font-bold">All Blog post</h1>
        <div className="flex justify-between text-[12px] text-[#495057] font-bold">
          <div className="gap-5 flex ">
            <p className="text-[#D4A373]">All</p>
            <p>Design</p>
            <p>Travel</p>
            <p>Fashion</p>
            <p>Technology</p>
            <p>Branding</p>
          </div>
          <div>
            <p>View All</p>
          </div>
        </div>
      </div>
      <div className="gap-5 grid-rows-3 grid-cols-3 grid">
        {data.map((e) => {
          let key = uuidv4();
          return (
            <div
              key={key}
              className="flex flex-col rounded-[12px] border-solid border-[#E8E8EA] border-2 p-4 mx-auto"
            >
              <div className="flex gap-5 flex-col">
                <img src={e.social_image} alt="" />
                <div className="flex flex-col ">
                  <a
                    href="Technology"
                    className="rounded-md px-[5px] py-1 text-[#4B6BFB] bg-[#f1f1f5] text-center justify-center max-w-[95px] items-center"
                  >
                    {e.tags}
                  </a>
                  <p className="text-[#181A2A] text-[24px] font-semibold">
                    {e.description}
                  </p>
                </div>
              </div>
              <div className="text-[#97989F] text-[16px] font-normal ">
                {e.published_timestamp}
              </div>
            </div>
          );
        })}
      </div>
      <button className="flex gap-3 items-center justify-center px-5 py-3 text-[16px] font-medium rounded-[12px] border-solid border-[#E8E8EA] border-2 m-auto text-[#696A75]">
        Load More
      </button>
    </div>
  );
}
